// Pulse — a deliberately small ops dashboard used as the hands-on playground
// for the Claude Code best-practices session. No build step, no dependencies:
// open index.html directly in a browser.

const KPIS = [
  { id: "users", label: "Active users", unit: "count", lowerIsBetter: false, previous: 18240, current: 19830,
    spark: [17200, 17450, 17600, 17900, 18100, 18240, 18400, 18650, 18900, 19200, 19500, 19830] },
  { id: "mrr", label: "MRR", unit: "currency", lowerIsBetter: false, previous: 42100, current: 46850,
    spark: [39800, 40200, 40900, 41500, 41900, 42100, 43000, 43800, 44600, 45300, 46000, 46850] },
  { id: "errorRate", label: "Error rate", unit: "percent", lowerIsBetter: true, previous: 2.4, current: 1.1,
    spark: [3.1, 2.9, 2.8, 2.6, 2.5, 2.4, 2.1, 1.9, 1.7, 1.5, 1.3, 1.1] },
  { id: "latency", label: "Avg response time", unit: "ms", lowerIsBetter: true, previous: 312, current: 287,
    spark: [330, 325, 320, 318, 315, 312, 308, 302, 298, 294, 290, 287] },
];

const DAILY_ACTIVE_USERS = [
  612, 598, 640, 655, 671, 660, 702, 718, 709, 733, 748, 762, 755, 780,
  796, 788, 812, 829, 845, 833, 858, 871, 889, 902, 915, 908, 930, 948, 961, 980,
];

const CHANNEL_SIGNUPS = [
  { name: "Organic", previous: 410, current: 560, series: "--series-1" },
  { name: "Paid", previous: 260, current: 300, series: "--series-2" },
  { name: "Referral", previous: 150, current: 210, series: "--series-3" },
  { name: "Social", previous: 0, current: 140, series: "--series-4" },
];

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function formatCompact(value) {
  const abs = Math.abs(value);
  if (abs >= 1_000_000) return (value / 1_000_000).toFixed(1) + "M";
  if (abs >= 1_000) return (value / 1_000).toFixed(1) + "K";
  return String(Math.round(value));
}

function formatValue(kpi, value) {
  switch (kpi.unit) {
    case "currency":
      return "$" + formatCompact(value);
    case "percent":
      return value.toFixed(1) + "%";
    case "ms":
      return Math.round(value) + "ms";
    default:
      return formatCompact(value);
  }
}

function percentChange(previous, current) {
  return ((current - previous) / previous) * 100;
}

function deltaIsGood(kpi) {
  return kpi.current > kpi.previous;
}

function renderKpis() {
  const row = document.getElementById("kpi-row");
  row.textContent = "";

  for (const kpi of KPIS) {
    const tile = document.createElement("div");
    tile.className = "stat-tile";

    const label = document.createElement("p");
    label.className = "stat-label";
    label.textContent = kpi.label;
    tile.appendChild(label);

    const valueRow = document.createElement("div");
    valueRow.className = "stat-value-row";

    const value = document.createElement("span");
    value.className = "stat-value";
    value.textContent = formatValue(kpi, kpi.current);
    valueRow.appendChild(value);

    const change = percentChange(kpi.previous, kpi.current);
    const good = deltaIsGood(kpi);
    const delta = document.createElement("span");
    delta.className = "stat-delta " + (good ? "is-good" : "is-bad");
    delta.textContent = (change > 0 ? "+" : "") + change.toFixed(1) + "%";
    valueRow.appendChild(delta);

    tile.appendChild(valueRow);
    tile.appendChild(renderSparkline(kpi.spark));
    row.appendChild(tile);
  }
}

function renderSparkline(points) {
  const width = 140;
  const height = 32;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const span = max - min || 1;

  const x = (i) => (i / (points.length - 1)) * width;
  const y = (v) => height - ((v - min) / span) * height;

  const path = points.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "stat-sparkline");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

  const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
  line.setAttribute("d", path);
  line.setAttribute("fill", "none");
  line.setAttribute("stroke", cssVar("--text-muted"));
  line.setAttribute("stroke-width", "2");
  line.setAttribute("stroke-linejoin", "round");
  line.setAttribute("stroke-linecap", "round");
  svg.appendChild(line);

  const lastIndex = points.length - 1;
  const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute("cx", x(lastIndex).toFixed(1));
  dot.setAttribute("cy", y(points[lastIndex]).toFixed(1));
  dot.setAttribute("r", "4");
  dot.setAttribute("fill", cssVar("--series-1"));
  dot.setAttribute("stroke", cssVar("--surface-1"));
  dot.setAttribute("stroke-width", "2");
  svg.appendChild(dot);

  return svg;
}

function niceMax(value) {
  const magnitude = Math.pow(10, Math.floor(Math.log10(value || 1)));
  return Math.ceil(value / magnitude) * magnitude;
}

function renderTrendChart() {
  const container = document.getElementById("trend-chart");
  container.textContent = "";

  const width = 480;
  const height = 220;
  const margin = { top: 10, right: 16, bottom: 24, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const data = DAILY_ACTIVE_USERS;
  const maxY = niceMax(Math.max(...data) * 1.1);
  const x = (i) => margin.left + (i / (data.length - 1)) * innerWidth;
  const y = (v) => margin.top + innerHeight - (v / maxY) * innerHeight;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

  const gridSteps = 4;
  for (let i = 0; i <= gridSteps; i++) {
    const value = (maxY / gridSteps) * i;
    const gy = y(value);

    const gridLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    gridLine.setAttribute("x1", margin.left);
    gridLine.setAttribute("x2", width - margin.right);
    gridLine.setAttribute("y1", gy);
    gridLine.setAttribute("y2", gy);
    gridLine.setAttribute("stroke", cssVar("--gridline"));
    gridLine.setAttribute("stroke-width", "1");
    svg.appendChild(gridLine);

    const tick = document.createElementNS("http://www.w3.org/2000/svg", "text");
    tick.setAttribute("x", margin.left - 8);
    tick.setAttribute("y", gy + 4);
    tick.setAttribute("text-anchor", "end");
    tick.setAttribute("font-size", "11");
    tick.setAttribute("fill", cssVar("--text-muted"));
    tick.textContent = Math.round(value).toLocaleString();
    svg.appendChild(tick);
  }

  const linePath = data.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${x(data.length - 1).toFixed(1)},${(margin.top + innerHeight).toFixed(1)} L${x(0).toFixed(1)},${(margin.top + innerHeight).toFixed(1)} Z`;

  const area = document.createElementNS("http://www.w3.org/2000/svg", "path");
  area.setAttribute("d", areaPath);
  area.setAttribute("fill", cssVar("--series-1"));
  area.setAttribute("opacity", "0.1");
  area.setAttribute("stroke", "none");
  svg.appendChild(area);

  const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
  line.setAttribute("d", linePath);
  line.setAttribute("fill", "none");
  line.setAttribute("stroke", cssVar("--series-1"));
  line.setAttribute("stroke-width", "2");
  line.setAttribute("stroke-linejoin", "round");
  line.setAttribute("stroke-linecap", "round");
  svg.appendChild(line);

  const lastIndex = data.length - 1;
  const endDot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  endDot.setAttribute("cx", x(lastIndex).toFixed(1));
  endDot.setAttribute("cy", y(data[lastIndex]).toFixed(1));
  endDot.setAttribute("r", "4");
  endDot.setAttribute("fill", cssVar("--series-1"));
  endDot.setAttribute("stroke", cssVar("--surface-1"));
  endDot.setAttribute("stroke-width", "2");
  svg.appendChild(endDot);

  const endLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
  endLabel.setAttribute("x", x(lastIndex) - 4);
  endLabel.setAttribute("y", y(data[lastIndex]) - 10);
  endLabel.setAttribute("text-anchor", "end");
  endLabel.setAttribute("font-size", "12");
  endLabel.setAttribute("font-weight", "600");
  endLabel.setAttribute("fill", cssVar("--text-primary"));
  endLabel.textContent = data[lastIndex].toLocaleString();
  svg.appendChild(endLabel);

  const crosshair = document.createElementNS("http://www.w3.org/2000/svg", "line");
  crosshair.setAttribute("y1", margin.top);
  crosshair.setAttribute("y2", margin.top + innerHeight);
  crosshair.setAttribute("stroke", cssVar("--baseline"));
  crosshair.setAttribute("stroke-width", "1");
  crosshair.setAttribute("opacity", "0");
  svg.appendChild(crosshair);

  container.appendChild(svg);

  const tooltip = document.createElement("div");
  tooltip.className = "chart-tooltip";
  container.appendChild(tooltip);

  svg.addEventListener("pointermove", (event) => {
    const rect = svg.getBoundingClientRect();
    const pointerX = ((event.clientX - rect.left) / rect.width) * width;
    const index = Math.round(((pointerX - margin.left) / innerWidth) * (data.length - 1));
    const clamped = Math.max(0, Math.min(data.length - 1, index));

    crosshair.setAttribute("x1", x(clamped));
    crosshair.setAttribute("x2", x(clamped));
    crosshair.setAttribute("opacity", "1");

    tooltip.textContent = "";
    const valueEl = document.createElement("div");
    valueEl.className = "tooltip-value";
    valueEl.textContent = data[clamped].toLocaleString() + " users";
    const labelEl = document.createElement("div");
    labelEl.className = "tooltip-label";
    labelEl.textContent = `Day ${clamped + 1} of ${data.length}`;
    tooltip.appendChild(valueEl);
    tooltip.appendChild(labelEl);

    const left = (x(clamped) / width) * rect.width;
    tooltip.style.left = `${Math.min(rect.width - 90, Math.max(0, left - 40))}px`;
    tooltip.style.top = `${(y(data[clamped]) / height) * rect.height - 48}px`;
    tooltip.classList.add("is-visible");
  });

  svg.addEventListener("pointerleave", () => {
    crosshair.setAttribute("opacity", "0");
    tooltip.classList.remove("is-visible");
  });
}

function renderChannelChart() {
  const container = document.getElementById("channel-chart");
  container.textContent = "";

  const width = 360;
  const height = 220;
  const margin = { top: 10, right: 10, bottom: 28, left: 10 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const maxY = niceMax(Math.max(...CHANNEL_SIGNUPS.map((c) => c.current)) * 1.2);
  const bandWidth = innerWidth / CHANNEL_SIGNUPS.length;
  const barWidth = Math.min(24, bandWidth * 0.5);

  const y = (v) => margin.top + innerHeight - (v / maxY) * innerHeight;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

  const baseline = document.createElementNS("http://www.w3.org/2000/svg", "line");
  baseline.setAttribute("x1", margin.left);
  baseline.setAttribute("x2", width - margin.right);
  baseline.setAttribute("y1", margin.top + innerHeight);
  baseline.setAttribute("y2", margin.top + innerHeight);
  baseline.setAttribute("stroke", cssVar("--baseline"));
  baseline.setAttribute("stroke-width", "1");
  svg.appendChild(baseline);

  const tooltip = document.createElement("div");
  tooltip.className = "chart-tooltip";

  CHANNEL_SIGNUPS.forEach((channel, i) => {
    const bandX = margin.left + i * bandWidth;
    const barX = bandX + (bandWidth - barWidth) / 2;
    const barY = y(channel.current);
    const barHeight = margin.top + innerHeight - barY;
    const color = cssVar(channel.series);

    const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    bar.setAttribute("x", barX);
    bar.setAttribute("y", barY);
    bar.setAttribute("width", barWidth);
    bar.setAttribute("height", Math.max(0, barHeight));
    bar.setAttribute("rx", "4");
    bar.setAttribute("fill", color);
    svg.appendChild(bar);

    const valueLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    valueLabel.setAttribute("x", barX + barWidth / 2);
    valueLabel.setAttribute("y", barY - 6);
    valueLabel.setAttribute("text-anchor", "middle");
    valueLabel.setAttribute("font-size", "12");
    valueLabel.setAttribute("font-weight", "600");
    valueLabel.setAttribute("fill", cssVar("--text-primary"));
    valueLabel.textContent = channel.current.toLocaleString();
    svg.appendChild(valueLabel);

    const nameLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    nameLabel.setAttribute("x", bandX + bandWidth / 2);
    nameLabel.setAttribute("y", margin.top + innerHeight + 18);
    nameLabel.setAttribute("text-anchor", "middle");
    nameLabel.setAttribute("font-size", "11");
    nameLabel.setAttribute("fill", cssVar("--text-muted"));
    nameLabel.textContent = channel.name;
    svg.appendChild(nameLabel);

    const hitArea = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    hitArea.setAttribute("x", bandX);
    hitArea.setAttribute("y", margin.top);
    hitArea.setAttribute("width", bandWidth);
    hitArea.setAttribute("height", innerHeight);
    hitArea.setAttribute("fill", "transparent");
    hitArea.addEventListener("pointerenter", () => {
      const change = percentChange(channel.previous, channel.current);
      tooltip.textContent = "";
      const valueEl = document.createElement("div");
      valueEl.className = "tooltip-value";
      valueEl.textContent = `${channel.current.toLocaleString()} signups`;
      const labelEl = document.createElement("div");
      labelEl.className = "tooltip-label";
      labelEl.textContent = `${channel.name} · ${change > 0 ? "+" : ""}${change.toFixed(1)}% vs prior period`;
      tooltip.appendChild(valueEl);
      tooltip.appendChild(labelEl);
      tooltip.style.left = `${(bandX / width) * 100}%`;
      tooltip.style.top = "0px";
      tooltip.classList.add("is-visible");
    });
    hitArea.addEventListener("pointerleave", () => tooltip.classList.remove("is-visible"));
    svg.appendChild(hitArea);
  });

  container.appendChild(svg);
  container.appendChild(tooltip);

  const legend = document.createElement("div");
  legend.className = "legend";
  for (const channel of CHANNEL_SIGNUPS) {
    const item = document.createElement("span");
    item.className = "legend-item";
    const swatch = document.createElement("span");
    swatch.className = "legend-swatch";
    swatch.style.background = cssVar(channel.series);
    item.appendChild(swatch);
    const text = document.createElement("span");
    text.textContent = channel.name;
    item.appendChild(text);
    legend.appendChild(item);
  }
  container.appendChild(legend);
}

function renderChannelTable() {
  const tbody = document.querySelector("#channel-table tbody");
  tbody.textContent = "";

  for (const channel of CHANNEL_SIGNUPS) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = channel.name;
    row.appendChild(nameCell);

    const prevCell = document.createElement("td");
    prevCell.className = "num";
    prevCell.textContent = channel.previous.toLocaleString();
    row.appendChild(prevCell);

    const currCell = document.createElement("td");
    currCell.className = "num";
    currCell.textContent = channel.current.toLocaleString();
    row.appendChild(currCell);

    const change = percentChange(channel.previous, channel.current);
    const changeCell = document.createElement("td");
    changeCell.className = "num";
    changeCell.textContent = (change > 0 ? "+" : "") + change.toFixed(1) + "%";
    row.appendChild(changeCell);

    tbody.appendChild(row);
  }
}

function setupThemeToggle() {
  const button = document.getElementById("theme-toggle");
  button.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    document.documentElement.dataset.theme = isDark ? "light" : "dark";
    button.setAttribute("aria-pressed", String(!isDark));
    renderAll();
  });
}

function renderAll() {
  renderKpis();
  renderTrendChart();
  renderChannelChart();
  renderChannelTable();
}

setupThemeToggle();
renderAll();

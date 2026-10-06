// Media Screening Dashboard, rehearsal build for Mission 1 ("Build the
// dashboard") of Operation Media Screening. Built from
// master-prompt-filled.md. ARTICLES below is fabricated, clearly
// fictional sample data, not real media coverage. No build step, no
// dependencies: open index.html directly in a browser.

const ARTICLES = [
  { date: "2026-09-09", headline: "Julius Baer expands wealth advisory team in Singapore", source: "SG Business Daily", country: "Singapore", mediaType: "Online News", sentiment: "Positive" },
  { date: "2026-09-10", headline: "Private banks report steady first-half results, Julius Baer among them", source: "Swiss Finance Journal", country: "Switzerland", mediaType: "Print", sentiment: "Neutral" },
  { date: "2026-09-10", headline: "Julius Baer executive discusses APAC growth plans on business segment", source: "Pacific Business TV", country: "Hong Kong", mediaType: "Broadcast", sentiment: "Positive" },
  { date: "2026-09-12", headline: "Industry commentators weigh in on private banking fee structures, Julius Baer named", source: "UK Wealth Social Feed", country: "United Kingdom", mediaType: "Social Media", sentiment: "Neutral" },
  { date: "2026-09-14", headline: "Julius Baer named finalist in regional private banking awards", source: "Asia Wealth Wire", country: "Singapore", mediaType: "Online News", sentiment: "Positive" },
  { date: "2026-09-14", headline: "Swiss private banks adapt to new cross-border wealth rules", source: "Alpine Markets Review", country: "Switzerland", mediaType: "Online News", sentiment: "Neutral" },
  { date: "2026-09-15", headline: "Julius Baer opens enlarged client relationship centre in Hong Kong", source: "Pacific Wealth Times", country: "Hong Kong", mediaType: "Print", sentiment: "Positive" },
  { date: "2026-09-17", headline: "London wealth managers, including Julius Baer, see steady inflows", source: "UK Finance Digest", country: "United Kingdom", mediaType: "Online News", sentiment: "Neutral" },
  { date: "2026-09-18", headline: "Julius Baer executive to speak at Singapore FinTech Festival panel", source: "Pacific Business TV", country: "Singapore", mediaType: "Broadcast", sentiment: "Positive" },
  { date: "2026-09-19", headline: "Online commentary questions pace of digital transformation at legacy private banks, Julius Baer mentioned", source: "Alpine Social Feed", country: "Switzerland", mediaType: "Social Media", sentiment: "Negative" },
  { date: "2026-09-19", headline: "Asia private banking roundup: assets under management trends", source: "HK Finance Post", country: "Hong Kong", mediaType: "Online News", sentiment: "Neutral" },
  { date: "2026-09-21", headline: "Julius Baer sponsors sustainability-focused investment forum in Singapore", source: "SG Business Daily", country: "Singapore", mediaType: "Online News", sentiment: "Positive" },
  { date: "2026-09-22", headline: "Julius Baer reports steady client asset growth in half-year update", source: "UK Finance Digest", country: "United Kingdom", mediaType: "Print", sentiment: "Positive" },
  { date: "2026-09-23", headline: "A look at private banking succession planning across the industry", source: "Swiss Finance Journal", country: "Switzerland", mediaType: "Online News", sentiment: "Neutral" },
  { date: "2026-09-24", headline: "Clients cite long wait times for onboarding across several private banks, including Julius Baer", source: "Pacific Social Wire", country: "Hong Kong", mediaType: "Social Media", sentiment: "Negative" },
  { date: "2026-09-25", headline: "Julius Baer named among top APAC wealth managers in annual survey", source: "Asia Wealth Wire", country: "Singapore", mediaType: "Online News", sentiment: "Positive" },
  { date: "2026-09-26", headline: "Swiss banking sector outlook discussed on evening business programme", source: "Alpine Business TV", country: "Switzerland", mediaType: "Broadcast", sentiment: "Neutral" },
  { date: "2026-09-27", headline: "Julius Baer expands sustainable investing product range", source: "UK Finance Digest", country: "United Kingdom", mediaType: "Online News", sentiment: "Positive" },
  { date: "2026-09-28", headline: "Private banks in Hong Kong navigate shifting regulatory landscape", source: "Pacific Wealth Times", country: "Hong Kong", mediaType: "Print", sentiment: "Neutral" },
  { date: "2026-09-29", headline: "Social chatter mixed on wealth management fee transparency across the industry", source: "SG Social Feed", country: "Singapore", mediaType: "Social Media", sentiment: "Neutral" },
  { date: "2026-09-30", headline: "Julius Baer strengthens leadership team with senior hire", source: "Swiss Finance Journal", country: "Switzerland", mediaType: "Online News", sentiment: "Positive" },
  { date: "2026-10-01", headline: "Julius Baer featured in segment on growth of Asian wealth corridors", source: "UK Business TV", country: "United Kingdom", mediaType: "Broadcast", sentiment: "Positive" },
  { date: "2026-10-01", headline: "Asia wealth management roundup: hiring trends across major banks", source: "HK Finance Post", country: "Hong Kong", mediaType: "Online News", sentiment: "Neutral" },
  { date: "2026-10-02", headline: "Julius Baer client assets grow amid strong regional demand", source: "SG Business Daily", country: "Singapore", mediaType: "Online News", sentiment: "Positive" },
  { date: "2026-10-03", headline: "Commentary questions pace of fee disclosure reform across Swiss private banks, Julius Baer named", source: "Alpine Social Feed", country: "Switzerland", mediaType: "Social Media", sentiment: "Negative" },
  { date: "2026-10-03", headline: "UK wealth managers prepare for new cross-border reporting rules", source: "UK Finance Digest", country: "United Kingdom", mediaType: "Online News", sentiment: "Neutral" },
  { date: "2026-10-04", headline: "Julius Baer recognised for client service excellence in Hong Kong", source: "Pacific Wealth Times", country: "Hong Kong", mediaType: "Print", sentiment: "Positive" },
  { date: "2026-10-05", headline: "Julius Baer deepens partnership with regional fintech for digital onboarding", source: "Asia Wealth Wire", country: "Singapore", mediaType: "Online News", sentiment: "Positive" },
  { date: "2026-10-05", headline: "Swiss private banking sector sees modest asset growth in Q3", source: "Swiss Finance Journal", country: "Switzerland", mediaType: "Online News", sentiment: "Neutral" },
  { date: "2026-10-06", headline: "Some clients voice frustration over mobile app downtime, Julius Baer among banks named", source: "UK Social Feed", country: "United Kingdom", mediaType: "Social Media", sentiment: "Negative" },
  { date: "2026-10-06", headline: "Julius Baer discusses APAC expansion strategy in interview", source: "Pacific Business TV", country: "Hong Kong", mediaType: "Broadcast", sentiment: "Positive" },
  { date: "2026-10-07", headline: "Julius Baer opens applications for graduate wealth management programme", source: "SG Business Daily", country: "Singapore", mediaType: "Online News", sentiment: "Positive" },
  { date: "2026-10-07", headline: "Private banking industry group publishes annual membership report, Julius Baer included", source: "Swiss Finance Journal", country: "Switzerland", mediaType: "Print", sentiment: "Neutral" },
  { date: "2026-10-07", headline: "Julius Baer named a top employer in wealth management by industry survey", source: "UK Finance Digest", country: "United Kingdom", mediaType: "Online News", sentiment: "Positive" },
];

const COUNTRY_SERIES = {
  Singapore: "--series-1",
  Switzerland: "--series-2",
  "Hong Kong": "--series-3",
  "United Kingdom": "--series-4",
};

const MEDIA_TYPE_SERIES = {
  "Online News": "--series-1",
  Print: "--series-2",
  Broadcast: "--series-3",
  "Social Media": "--series-4",
};

const SENTIMENT_COLOR = {
  Positive: "--sentiment-positive",
  Neutral: "--sentiment-neutral",
  Negative: "--sentiment-negative",
};

const filters = { country: null, mediaType: null, sentiment: null };

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function matchesFilters(article, exceptDimension) {
  if (filters.country && exceptDimension !== "country" && article.country !== filters.country) return false;
  if (filters.mediaType && exceptDimension !== "mediaType" && article.mediaType !== filters.mediaType) return false;
  if (filters.sentiment && exceptDimension !== "sentiment" && article.sentiment !== filters.sentiment) return false;
  return true;
}

function filteredArticles() {
  return ARTICLES.filter((a) => matchesFilters(a, null));
}

function articlesExcept(dimension) {
  return ARTICLES.filter((a) => matchesFilters(a, dimension));
}

function countBy(articles, key) {
  const counts = new Map();
  for (const a of articles) {
    counts.set(a[key], (counts.get(a[key]) || 0) + 1);
  }
  return counts;
}

function toggleFilter(dimension, value) {
  filters[dimension] = filters[dimension] === value ? null : value;
  renderAll();
}

function clearFilters() {
  filters.country = null;
  filters.mediaType = null;
  filters.sentiment = null;
  renderAll();
}

function renderFilterBar() {
  const bar = document.getElementById("filter-bar");
  bar.textContent = "";

  const active = Object.entries(filters).filter(([, v]) => v);
  if (active.length === 0) {
    bar.textContent = "Showing all articles. Click a bar or segment below to filter.";
    return;
  }

  const label = document.createElement("span");
  label.textContent = "Filtered to:";
  bar.appendChild(label);

  for (const [, value] of active) {
    const chip = document.createElement("span");
    chip.className = "filter-chip";
    chip.textContent = value;
    bar.appendChild(chip);
  }

  const clear = document.createElement("button");
  clear.type = "button";
  clear.className = "filter-clear";
  clear.textContent = "Clear filters";
  clear.addEventListener("click", clearFilters);
  bar.appendChild(clear);
}

function niceMax(value) {
  const magnitude = Math.pow(10, Math.floor(Math.log10(value || 1)));
  return Math.ceil((value * 1.2) / magnitude) * magnitude || 1;
}

function renderFrequencyChart() {
  const container = document.getElementById("frequency-chart");
  container.textContent = "";

  const data = filteredArticles();
  const byDay = countBy(data, "date");
  const days = Array.from(new Set(ARTICLES.map((a) => a.date))).sort();

  const width = 480;
  const height = 200;
  const margin = { top: 10, right: 12, bottom: 24, left: 32 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  if (data.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No articles match the current filters.";
    container.appendChild(empty);
    return;
  }

  const maxY = niceMax(Math.max(...days.map((d) => byDay.get(d) || 0)));
  const x = (i) => margin.left + (i / (days.length - 1)) * innerWidth;
  const y = (v) => margin.top + innerHeight - (v / maxY) * innerHeight;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

  const gridSteps = 3;
  for (let i = 0; i <= gridSteps; i++) {
    const value = (maxY / gridSteps) * i;
    const gy = y(value);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", margin.left);
    line.setAttribute("x2", width - margin.right);
    line.setAttribute("y1", gy);
    line.setAttribute("y2", gy);
    line.setAttribute("stroke", cssVar("--gridline"));
    line.setAttribute("stroke-width", "1");
    svg.appendChild(line);

    const tick = document.createElementNS("http://www.w3.org/2000/svg", "text");
    tick.setAttribute("x", margin.left - 6);
    tick.setAttribute("y", gy + 4);
    tick.setAttribute("text-anchor", "end");
    tick.setAttribute("font-size", "10");
    tick.setAttribute("fill", cssVar("--text-muted"));
    tick.textContent = Math.round(value);
    svg.appendChild(tick);
  }

  const linePath = days.map((d, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(byDay.get(d) || 0).toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${x(days.length - 1).toFixed(1)},${(margin.top + innerHeight).toFixed(1)} L${x(0).toFixed(1)},${(margin.top + innerHeight).toFixed(1)} Z`;

  const area = document.createElementNS("http://www.w3.org/2000/svg", "path");
  area.setAttribute("d", areaPath);
  area.setAttribute("fill", cssVar("--series-1"));
  area.setAttribute("opacity", "0.1");
  svg.appendChild(area);

  const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
  line.setAttribute("d", linePath);
  line.setAttribute("fill", "none");
  line.setAttribute("stroke", cssVar("--series-1"));
  line.setAttribute("stroke-width", "2");
  line.setAttribute("stroke-linejoin", "round");
  line.setAttribute("stroke-linecap", "round");
  svg.appendChild(line);

  container.appendChild(svg);

  const tooltip = document.createElement("div");
  tooltip.className = "chart-tooltip";
  container.appendChild(tooltip);

  const crosshair = document.createElementNS("http://www.w3.org/2000/svg", "line");
  crosshair.setAttribute("y1", margin.top);
  crosshair.setAttribute("y2", margin.top + innerHeight);
  crosshair.setAttribute("stroke", cssVar("--baseline"));
  crosshair.setAttribute("stroke-width", "1");
  crosshair.setAttribute("opacity", "0");
  svg.appendChild(crosshair);

  svg.addEventListener("pointermove", (event) => {
    const rect = svg.getBoundingClientRect();
    const pointerX = ((event.clientX - rect.left) / rect.width) * width;
    const index = Math.round(((pointerX - margin.left) / innerWidth) * (days.length - 1));
    const clamped = Math.max(0, Math.min(days.length - 1, index));
    const day = days[clamped];

    crosshair.setAttribute("x1", x(clamped));
    crosshair.setAttribute("x2", x(clamped));
    crosshair.setAttribute("opacity", "1");

    tooltip.textContent = "";
    const valueEl = document.createElement("div");
    valueEl.className = "tooltip-value";
    valueEl.textContent = `${byDay.get(day) || 0} article${(byDay.get(day) || 0) === 1 ? "" : "s"}`;
    const labelEl = document.createElement("div");
    labelEl.className = "tooltip-label";
    labelEl.textContent = day;
    tooltip.appendChild(valueEl);
    tooltip.appendChild(labelEl);

    const left = (x(clamped) / width) * rect.width;
    tooltip.style.left = `${Math.min(rect.width - 90, Math.max(0, left - 40))}px`;
    tooltip.style.top = `${(y(byDay.get(day) || 0) / height) * rect.height - 48}px`;
    tooltip.classList.add("is-visible");
  });
  svg.addEventListener("pointerleave", () => {
    crosshair.setAttribute("opacity", "0");
    tooltip.classList.remove("is-visible");
  });
}

function renderCategoricalBarChart(containerId, dimension, seriesMap, categories) {
  const container = document.getElementById(containerId);
  container.textContent = "";

  const data = articlesExcept(dimension);
  const counts = countBy(data, dimension);
  const total = data.length;

  const width = 480;
  const height = 200;
  const margin = { top: 10, right: 10, bottom: 28, left: 10 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const maxY = niceMax(Math.max(...categories.map((c) => counts.get(c) || 0)));
  const bandWidth = innerWidth / categories.length;
  const barWidth = Math.min(28, bandWidth * 0.5);
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

  categories.forEach((category, i) => {
    const value = counts.get(category) || 0;
    const isActive = filters[dimension] === category;
    const isDimmed = filters[dimension] && !isActive;

    const bandX = margin.left + i * bandWidth;
    const barX = bandX + (bandWidth - barWidth) / 2;
    const barY = y(value);
    const barHeight = margin.top + innerHeight - barY;
    const color = cssVar(seriesMap[category]);

    const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    bar.setAttribute("x", barX);
    bar.setAttribute("y", barY);
    bar.setAttribute("width", barWidth);
    bar.setAttribute("height", Math.max(0, barHeight));
    bar.setAttribute("rx", "4");
    bar.setAttribute("fill", color);
    bar.setAttribute("opacity", isDimmed ? "0.35" : "1");
    bar.style.cursor = "pointer";
    svg.appendChild(bar);

    const valueLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    valueLabel.setAttribute("x", barX + barWidth / 2);
    valueLabel.setAttribute("y", barY - 6);
    valueLabel.setAttribute("text-anchor", "middle");
    valueLabel.setAttribute("font-size", "12");
    valueLabel.setAttribute("font-weight", "600");
    valueLabel.setAttribute("fill", cssVar("--text-primary"));
    valueLabel.textContent = String(value);
    svg.appendChild(valueLabel);

    const nameLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    nameLabel.setAttribute("x", bandX + bandWidth / 2);
    nameLabel.setAttribute("y", margin.top + innerHeight + 18);
    nameLabel.setAttribute("text-anchor", "middle");
    nameLabel.setAttribute("font-size", "11");
    nameLabel.setAttribute("fill", cssVar("--text-muted"));
    nameLabel.textContent = category;
    svg.appendChild(nameLabel);

    const hitArea = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    hitArea.setAttribute("x", bandX);
    hitArea.setAttribute("y", margin.top);
    hitArea.setAttribute("width", bandWidth);
    hitArea.setAttribute("height", innerHeight);
    hitArea.setAttribute("fill", "transparent");
    hitArea.style.cursor = "pointer";
    hitArea.addEventListener("click", () => toggleFilter(dimension, category));
    hitArea.addEventListener("pointerenter", () => {
      const pct = total ? Math.round((value / total) * 100) : 0;
      tooltip.textContent = "";
      const valueEl = document.createElement("div");
      valueEl.className = "tooltip-value";
      valueEl.textContent = `${value} article${value === 1 ? "" : "s"} (${pct}%)`;
      const labelEl = document.createElement("div");
      labelEl.className = "tooltip-label";
      labelEl.textContent = `${category} · click to ${isActive ? "clear" : "filter"}`;
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
}

function renderSentimentChart() {
  const container = document.getElementById("sentiment-chart");
  container.textContent = "";

  const data = articlesExcept("sentiment");
  const counts = countBy(data, "sentiment");
  const order = ["Positive", "Neutral", "Negative"];
  const total = data.length;

  const width = 480;
  const barHeight = 32;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("viewBox", `0 0 ${width} ${barHeight}`);

  const tooltip = document.createElement("div");
  tooltip.className = "chart-tooltip";

  let x = 0;
  const gap = 2;
  order.forEach((sentiment) => {
    const value = counts.get(sentiment) || 0;
    if (total === 0) return;
    const segWidth = Math.max(0, (value / total) * width - gap);
    const isActive = filters.sentiment === sentiment;
    const isDimmed = filters.sentiment && !isActive;

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", segWidth);
    rect.setAttribute("height", barHeight);
    rect.setAttribute("rx", "4");
    rect.setAttribute("fill", cssVar(SENTIMENT_COLOR[sentiment]));
    rect.setAttribute("opacity", isDimmed ? "0.35" : "1");
    rect.style.cursor = "pointer";
    rect.addEventListener("click", () => toggleFilter("sentiment", sentiment));
    rect.addEventListener("pointerenter", () => {
      const pct = Math.round((value / total) * 100);
      tooltip.textContent = "";
      const valueEl = document.createElement("div");
      valueEl.className = "tooltip-value";
      valueEl.textContent = `${value} article${value === 1 ? "" : "s"} (${pct}%)`;
      const labelEl = document.createElement("div");
      labelEl.className = "tooltip-label";
      labelEl.textContent = `${sentiment} · click to ${isActive ? "clear" : "filter"}`;
      tooltip.appendChild(valueEl);
      tooltip.appendChild(labelEl);
      tooltip.style.left = `${(x / width) * 100}%`;
      tooltip.style.top = "-44px";
      tooltip.classList.add("is-visible");
    });
    rect.addEventListener("pointerleave", () => tooltip.classList.remove("is-visible"));
    svg.appendChild(rect);

    x += segWidth + gap;
  });

  container.appendChild(svg);
  container.appendChild(tooltip);

  const legend = document.createElement("div");
  legend.className = "legend";
  for (const sentiment of order) {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "legend-item" + (filters.sentiment === sentiment ? " is-active" : "");
    const swatch = document.createElement("span");
    swatch.className = "legend-swatch";
    swatch.style.background = cssVar(SENTIMENT_COLOR[sentiment]);
    item.appendChild(swatch);
    const text = document.createElement("span");
    text.textContent = `${sentiment} (${counts.get(sentiment) || 0})`;
    item.appendChild(text);
    item.addEventListener("click", () => toggleFilter("sentiment", sentiment));
    legend.appendChild(item);
  }
  container.appendChild(legend);
}

function renderArticleTable() {
  const tbody = document.querySelector("#article-table tbody");
  tbody.textContent = "";

  const data = filteredArticles().slice().sort((a, b) => (a.date < b.date ? 1 : -1));

  if (data.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 6;
    cell.className = "empty-state";
    cell.textContent = "No articles match the current filters.";
    row.appendChild(cell);
    tbody.appendChild(row);
    return;
  }

  for (const article of data) {
    const row = document.createElement("tr");

    const dateCell = document.createElement("td");
    dateCell.textContent = article.date;
    row.appendChild(dateCell);

    const headlineCell = document.createElement("td");
    headlineCell.textContent = article.headline;
    row.appendChild(headlineCell);

    const sourceCell = document.createElement("td");
    sourceCell.textContent = article.source;
    row.appendChild(sourceCell);

    const countryCell = document.createElement("td");
    countryCell.textContent = article.country;
    row.appendChild(countryCell);

    const mediaTypeCell = document.createElement("td");
    mediaTypeCell.textContent = article.mediaType;
    row.appendChild(mediaTypeCell);

    const sentimentCell = document.createElement("td");
    const pill = document.createElement("span");
    pill.className = "sentiment-pill " + article.sentiment.toLowerCase();
    pill.textContent = article.sentiment;
    sentimentCell.appendChild(pill);
    row.appendChild(sentimentCell);

    tbody.appendChild(row);
  }
}

function renderAll() {
  renderFilterBar();
  renderFrequencyChart();
  renderSentimentChart();
  renderCategoricalBarChart("country-chart", "country", COUNTRY_SERIES, Object.keys(COUNTRY_SERIES));
  renderCategoricalBarChart("media-type-chart", "mediaType", MEDIA_TYPE_SERIES, Object.keys(MEDIA_TYPE_SERIES));
  renderArticleTable();
}

renderAll();

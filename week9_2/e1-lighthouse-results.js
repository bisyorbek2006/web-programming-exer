const examples = {
  improved: {
    score: "92",
    scoreNote: "Illustrative",
    fcp: "0.9 s",
    lcp: "2.1 s",
    cls: "0.02",
    status: "IMPROVED EXAMPLE",
    preview: "Image space is reserved and the secondary image loads only when needed.",
    log: "Example state: improved setup. Values are illustrative, not a Lighthouse run."
  },
  baseline: {
    score: "58",
    scoreNote: "Illustrative",
    fcp: "2.8 s",
    lcp: "4.2 s",
    cls: "0.28",
    status: "BASELINE EXAMPLE",
    preview: "A synchronous script and unsized images are shown as possible audit concerns.",
    log: "Example state: baseline setup. These sample values do not measure this page."
  }
};

const controls = document.querySelectorAll("[data-mode]");
const score = document.getElementById("metric-score");
const scoreNote = document.getElementById("metric-score-note");
const fcp = document.getElementById("metric-fcp");
const lcp = document.getElementById("metric-lcp");
const cls = document.getElementById("metric-cls");
const status = document.getElementById("preview-status");
const preview = document.getElementById("preview-copy");
const log = document.getElementById("status-log");
const metrics = document.querySelectorAll(".metric");

function showExample(mode) {
  const example = examples[mode];

  if (!example) {
    throw new Error(`Unknown Lighthouse example mode: ${mode}`);
  }

  for (const control of controls) {
    control.setAttribute("aria-pressed", String(control.dataset.mode === mode));
  }

  score.textContent = example.score;
  scoreNote.textContent = example.scoreNote;
  fcp.textContent = example.fcp;
  lcp.textContent = example.lcp;
  cls.textContent = example.cls;
  status.textContent = example.status;
  status.dataset.state = mode;
  preview.textContent = example.preview;
  log.textContent = example.log;

  for (const metric of metrics) {
    metric.dataset.state = mode;
  }
}

for (const control of controls) {
  control.addEventListener("click", () => showExample(control.dataset.mode));
}

showExample("improved");

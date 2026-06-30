const STORAGE_KEY = "star-maas-quiz-progress-v1";
const MOBILE_MINIMAL_MODE_KEY = "star-maas-mobile-minimal-mode-v1";
const MOBILE_FOCUS_MODE_KEY = "star-maas-mobile-focus-mode-v1";

const FILTERS = [
  { key: "all", label: "全部", match: () => true },
  { key: "single", label: "单选", match: (q) => q.type === "single" },
  { key: "multiple", label: "多选", match: (q) => q.type === "multiple" },
  { key: "judge", label: "判断", match: (q) => q.type === "judge" },
  {
    key: "wrong",
    label: "错题",
    match: (q, progress) => progress[q.id]?.checked && !progress[q.id]?.isCorrect,
  },
];

const TYPE_LABELS = {
  single: "单选题",
  multiple: "多选题",
  judge: "判断题",
};

const QUESTION_BANK = QUIZ_DATA.map((item) => {
  if (item.type === "judge") {
    return {
      ...item,
      options: [
        { key: "✓", text: "正确" },
        { key: "✕", text: "错误" },
      ],
    };
  }
  return item;
});

const elements = {
  totalCount: document.querySelector("#totalCount"),
  answeredCount: document.querySelector("#answeredCount"),
  correctCount: document.querySelector("#correctCount"),
  accuracyRate: document.querySelector("#accuracyRate"),
  filterBar: document.querySelector("#filterBar"),
  filterSummary: document.querySelector("#filterSummary"),
  progressLabel: document.querySelector("#progressLabel"),
  progressFill: document.querySelector("#progressFill"),
  navCount: document.querySelector("#navCount"),
  questionNav: document.querySelector("#questionNav"),
  questionBadge: document.querySelector("#questionBadge"),
  questionIndex: document.querySelector("#questionIndex"),
  questionTitle: document.querySelector("#questionTitle"),
  optionsWrap: document.querySelector("#optionsWrap"),
  resultPanel: document.querySelector("#resultPanel"),
  resultTitle: document.querySelector("#resultTitle"),
  resultAnswer: document.querySelector("#resultAnswer"),
  resultMessage: document.querySelector("#resultMessage"),
  resultExplanation: document.querySelector("#resultExplanation"),
  prevBtn: document.querySelector("#prevBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  clearCurrentBtn: document.querySelector("#clearCurrentBtn"),
  resetAllBtn: document.querySelector("#resetAllBtn"),
  toggleNavBtn: document.querySelector("#toggleNavBtn"),
  toggleMinimalModeBtn: document.querySelector("#toggleMinimalModeBtn"),
  toggleFocusModeBtn: document.querySelector("#toggleFocusModeBtn"),
  closeSidebarBtn: document.querySelector("#closeSidebarBtn"),
  sidebarOverlay: document.querySelector("#sidebarOverlay"),
  sidebar: document.querySelector("#sidebar"),
};

const state = {
  filter: "all",
  currentIndex: 0,
  progress: loadProgress(),
  mobileMinimalMode: loadMode(MOBILE_MINIMAL_MODE_KEY, false),
  mobileFocusMode: loadMode(MOBILE_FOCUS_MODE_KEY, true),
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed ? parsed : {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function loadMode(storageKey, defaultValue) {
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw === null) return defaultValue;
    return raw === "true";
  } catch {
    return defaultValue;
  }
}

function saveMode(storageKey, value) {
  localStorage.setItem(storageKey, String(value));
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function setSidebarOpen(isOpen) {
  const shouldOpen = isOpen && isMobileViewport();
  elements.sidebar.classList.toggle("open", shouldOpen);
  elements.sidebarOverlay.classList.toggle("hidden", !shouldOpen);
  document.body.classList.toggle("sidebar-open", shouldOpen);
}

function syncMobileModes() {
  document.body.classList.toggle("mobile-minimal-mode", isMobileViewport() && state.mobileMinimalMode);
  document.body.classList.toggle("mobile-focus-mode", isMobileViewport() && state.mobileFocusMode);
  if (!isMobileViewport()) {
    setSidebarOpen(false);
  }

  if (elements.toggleMinimalModeBtn) {
    elements.toggleMinimalModeBtn.classList.toggle("active", state.mobileMinimalMode);
    elements.toggleMinimalModeBtn.textContent = state.mobileMinimalMode ? "极简开" : "极简";
  }

  if (elements.toggleFocusModeBtn) {
    elements.toggleFocusModeBtn.classList.toggle("active", state.mobileFocusMode);
    elements.toggleFocusModeBtn.textContent = state.mobileFocusMode ? "专注开" : "专注";
  }
}

function getVisibleQuestions() {
  const currentFilter = FILTERS.find((item) => item.key === state.filter) || FILTERS[0];
  return QUESTION_BANK.filter((question) => currentFilter.match(question, state.progress));
}

function getCurrentQuestion() {
  const visible = getVisibleQuestions();
  if (!visible.length) return null;
  if (state.currentIndex >= visible.length) {
    state.currentIndex = 0;
  }
  return visible[state.currentIndex];
}

function getSelectedSet(questionId) {
  return new Set(state.progress[questionId]?.selected || []);
}

function getAnswerSet(question) {
  if (question.type === "multiple") {
    return new Set(question.answer.split(""));
  }
  return new Set([question.answer]);
}

function isCorrectAnswer(question, selectedSet) {
  const answerSet = getAnswerSet(question);
  if (answerSet.size !== selectedSet.size) return false;
  return [...answerSet].every((item) => selectedSet.has(item));
}

function ensureQuestionProgress(questionId) {
  if (!state.progress[questionId]) {
    state.progress[questionId] = {
      selected: [],
      checked: false,
      isCorrect: false,
    };
  }
  return state.progress[questionId];
}

function setFilter(filterKey) {
  state.filter = filterKey;
  state.currentIndex = 0;
  render();
}

function toggleOption(question, optionKey) {
  const progress = ensureQuestionProgress(question.id);
  const selected = new Set(progress.selected);

  if (question.type === "multiple") {
    if (selected.has(optionKey)) {
      selected.delete(optionKey);
    } else {
      selected.add(optionKey);
    }
  } else if (selected.has(optionKey)) {
    selected.clear();
  } else {
    selected.clear();
    selected.add(optionKey);
  }

  progress.selected = [...selected];
  progress.checked = progress.selected.length > 0;
  progress.isCorrect = progress.checked ? isCorrectAnswer(question, selected) : false;
  saveProgress();
  render();
}

function clearCurrentQuestion() {
  const question = getCurrentQuestion();
  if (!question) return;

  delete state.progress[question.id];
  saveProgress();

  const visible = getVisibleQuestions();
  if (!visible.length && state.filter === "wrong") {
    state.filter = "all";
    state.currentIndex = 0;
  }
  render();
}

function resetAllProgress() {
  const shouldReset = window.confirm("确定要清空所有答题进度吗？");
  if (!shouldReset) return;

  state.progress = {};
  state.filter = "all";
  state.currentIndex = 0;
  saveProgress();
  render();
}

function jumpToQuestion(questionId) {
  const visible = getVisibleQuestions();
  const nextIndex = visible.findIndex((item) => item.id === questionId);
  if (nextIndex >= 0) {
    state.currentIndex = nextIndex;
    setSidebarOpen(false);
    renderQuestion();
    renderNav();
  }
}

function moveQuestion(step) {
  const visible = getVisibleQuestions();
  if (!visible.length) return;
  state.currentIndex = (state.currentIndex + step + visible.length) % visible.length;
  renderQuestion();
  renderNav();
}

function renderFilters() {
  elements.filterBar.innerHTML = FILTERS.map((filter) => {
    const isActive = filter.key === state.filter ? "active" : "";
    return `<button class="filter-btn ${isActive}" type="button" data-filter="${filter.key}">${filter.label}</button>`;
  }).join("");

  const current = FILTERS.find((item) => item.key === state.filter) || FILTERS[0];
  elements.filterSummary.textContent = current.label;
}

function renderStats() {
  const total = QUESTION_BANK.length;
  const answered = Object.values(state.progress).filter((item) => item.checked).length;
  const correct = Object.values(state.progress).filter((item) => item.checked && item.isCorrect).length;
  const accuracy = answered ? `${Math.round((correct / answered) * 100)}%` : "0%";

  elements.totalCount.textContent = String(total);
  elements.answeredCount.textContent = String(answered);
  elements.correctCount.textContent = String(correct);
  elements.accuracyRate.textContent = accuracy;
}

function renderNav() {
  const visible = getVisibleQuestions();
  elements.navCount.textContent = `${visible.length} 题`;
  elements.progressLabel.textContent = `${visible.length ? state.currentIndex + 1 : 0} / ${visible.length}`;
  const currentQuestion = getCurrentQuestion();

  const answeredCount = visible.filter((item) => state.progress[item.id]?.checked).length;
  const percentage = visible.length ? Math.round((answeredCount / visible.length) * 100) : 0;
  elements.progressFill.style.width = `${percentage}%`;

  if (!visible.length) {
    elements.questionNav.innerHTML = `<p class="muted-text">当前筛选下暂无题目。</p>`;
    return;
  }

  elements.questionNav.innerHTML = visible.map((question) => {
    const record = state.progress[question.id];
    const statusClass = record?.checked ? (record.isCorrect ? "correct" : "wrong") : "";
    const currentClass = currentQuestion?.id === question.id ? "current" : "";
    return `<button class="nav-btn ${statusClass} ${currentClass}" type="button" data-question-id="${question.id}">${question.id}</button>`;
  }).join("");
}

function renderQuestion() {
  const question = getCurrentQuestion();
  if (!question) {
    elements.questionBadge.textContent = "暂无题目";
    elements.questionIndex.textContent = "";
    elements.questionTitle.textContent = "当前筛选条件下没有题目，请切换筛选后继续练习。";
    elements.optionsWrap.innerHTML = "";
    elements.resultPanel.className = "result-panel hidden";
    return;
  }

  const progress = ensureQuestionProgress(question.id);
  const selectedSet = getSelectedSet(question.id);
  const answerSet = getAnswerSet(question);

  elements.questionBadge.textContent = TYPE_LABELS[question.type];
  elements.questionIndex.textContent = `第 ${question.id} 题`;
  elements.questionTitle.textContent = question.question;

  elements.optionsWrap.innerHTML = question.options.map((option) => {
    const classNames = ["option-btn"];
    const isSelected = selectedSet.has(option.key);
    if (isSelected) classNames.push("selected");

    if (progress.checked) {
      if (answerSet.has(option.key)) {
        classNames.push("correct");
      } else if (isSelected) {
        classNames.push("wrong");
      }
    }

    return `
      <button class="${classNames.join(" ")}" type="button" data-option-key="${option.key}">
        <span class="option-key">${option.key}</span>
        <span class="option-text">${option.text}</span>
        ${isSelected ? '<span class="selected-flag">已选</span>' : ""}
      </button>
    `;
  }).join("");

  renderResult(question, progress);
}

function renderResult(question, progress) {
  if (!progress.checked) {
    elements.resultPanel.className = "result-panel hidden";
    return;
  }

  const correctAnswer = question.type === "judge"
    ? (question.answer === "✓" ? "正确" : "错误")
    : question.answer;

  elements.resultPanel.className = `result-panel ${progress.isCorrect ? "success" : "danger"}`;
  elements.resultTitle.textContent = progress.isCorrect ? "回答正确" : "回答错误";
  elements.resultAnswer.textContent = `正确答案：${correctAnswer}`;
  elements.resultMessage.textContent = progress.isCorrect
    ? "这题答对了，可以继续下一题。"
    : `你的答案：${formatSelected(progress.selected, question.type)}`;
  elements.resultExplanation.textContent = question.explanation || "暂无解析。";
}

function formatSelected(selected, questionType) {
  if (!selected.length) return "未作答";
  if (questionType === "judge") {
    return selected[0] === "✓" ? "正确" : "错误";
  }
  return selected.join("");
}

function render() {
  const visible = getVisibleQuestions();
  if (state.currentIndex >= visible.length) {
    state.currentIndex = Math.max(visible.length - 1, 0);
  }
  syncMobileModes();
  renderFilters();
  renderStats();
  renderNav();
  renderQuestion();
}

elements.filterBar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  setFilter(button.dataset.filter);
});

elements.questionNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-question-id]");
  if (!button) return;
  jumpToQuestion(Number(button.dataset.questionId));
});

elements.optionsWrap.addEventListener("click", (event) => {
  const button = event.target.closest("[data-option-key]");
  if (!button) return;
  const question = getCurrentQuestion();
  if (!question) return;
  toggleOption(question, button.dataset.optionKey);
});

elements.clearCurrentBtn.addEventListener("click", clearCurrentQuestion);
elements.resetAllBtn.addEventListener("click", resetAllProgress);
elements.prevBtn.addEventListener("click", () => moveQuestion(-1));
elements.nextBtn.addEventListener("click", () => moveQuestion(1));
elements.toggleNavBtn.addEventListener("click", () => {
  setSidebarOpen(!elements.sidebar.classList.contains("open"));
});
elements.closeSidebarBtn.addEventListener("click", () => setSidebarOpen(false));
elements.sidebarOverlay.addEventListener("click", () => setSidebarOpen(false));
elements.toggleMinimalModeBtn.addEventListener("click", () => {
  state.mobileMinimalMode = !state.mobileMinimalMode;
  saveMode(MOBILE_MINIMAL_MODE_KEY, state.mobileMinimalMode);
  render();
});
elements.toggleFocusModeBtn.addEventListener("click", () => {
  state.mobileFocusMode = !state.mobileFocusMode;
  saveMode(MOBILE_FOCUS_MODE_KEY, state.mobileFocusMode);
  render();
});
window.addEventListener("resize", syncMobileModes);

render();

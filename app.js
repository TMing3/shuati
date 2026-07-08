const STORAGE_KEY_PREFIX = "star-maas-quiz-progress-";
const MOBILE_MINIMAL_MODE_KEY = "star-maas-mobile-minimal-mode-v1";
const MOBILE_FOCUS_MODE_KEY = "star-maas-mobile-focus-mode-v1";
const MISTAKE_STATS_KEY_PREFIX = "star-maas-quiz-mistake-stats-";

const QUESTION_BANKS = [
  { key: "old", label: "原题库", data: QUIZ_DATA },
  { key: "new", label: "课程测试题100道", data: QUIZ_DATA_NEW },
];

const FILTERS = [
  { key: "all", label: "全部", match: () => true },
  { key: "single", label: "单选", match: (q) => q.type === "single" },
  { key: "multiple", label: "多选", match: (q) => q.type === "multiple" },
  { key: "judge", label: "判断", match: (q) => q.type === "judge" },
  {
    key: "hard",
    label: "易错",
    match: (q, progress, mistakeStats) => {
      const stat = mistakeStats[q.id];
      if (!stat) return false;
      if ((stat.attempts || 0) < 2) return false;
      return (stat.wrongs || 0) / Math.max(stat.attempts || 0, 1) >= 0.5;
    },
    sort: (_a, _b, mistakeStats) => {
      const a = mistakeStats[_a.id] || { attempts: 0, wrongs: 0 };
      const b = mistakeStats[_b.id] || { attempts: 0, wrongs: 0 };
      const aRate = a.attempts ? a.wrongs / a.attempts : -1;
      const bRate = b.attempts ? b.wrongs / b.attempts : -1;
      if (bRate !== aRate) return bRate - aRate;
      if ((b.wrongs || 0) !== (a.wrongs || 0)) return (b.wrongs || 0) - (a.wrongs || 0);
      return (_a.id || 0) - (_b.id || 0);
    },
  },
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

function getCurrentQuestionBank() {
  const bank = QUESTION_BANKS.find((b) => b.key === state.currentBank) || QUESTION_BANKS[0];
  return bank.data.map((item) => {
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
}

function getStorageKey() {
  return `${STORAGE_KEY_PREFIX}${state.currentBank}`;
}

function getMistakeStatsKey() {
  return `${MISTAKE_STATS_KEY_PREFIX}${state.currentBank}`;
}

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
  confirmMultiBtn: document.querySelector("#confirmMultiBtn"),
  resetStatsBtn: document.querySelector("#resetStatsBtn"),
  resetAllBtn: document.querySelector("#resetAllBtn"),
  toggleNavBtn: document.querySelector("#toggleNavBtn"),
  toggleMinimalModeBtn: document.querySelector("#toggleMinimalModeBtn"),
  toggleFocusModeBtn: document.querySelector("#toggleFocusModeBtn"),
  closeSidebarBtn: document.querySelector("#closeSidebarBtn"),
  sidebarOverlay: document.querySelector("#sidebarOverlay"),
  sidebar: document.querySelector("#sidebar"),
  bankOldBtn: document.querySelector("#bankOldBtn"),
  bankNewBtn: document.querySelector("#bankNewBtn"),
};

const state = {
  currentBank: "old",
  filter: "all",
  currentIndex: 0,
  progress: loadProgress(),
  mistakeStats: loadMistakeStats(),
  mobileMinimalMode: loadMode(MOBILE_MINIMAL_MODE_KEY, false),
  mobileFocusMode: loadMode(MOBILE_FOCUS_MODE_KEY, true),
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(getStorageKey());
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed ? parsed : {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(getStorageKey(), JSON.stringify(state.progress));
}

function loadMistakeStats() {
  try {
    const raw = localStorage.getItem(getMistakeStatsKey());
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed ? parsed : {};
  } catch {
    return {};
  }
}

function saveMistakeStats() {
  localStorage.setItem(getMistakeStatsKey(), JSON.stringify(state.mistakeStats));
}

function normalizeSelectedSignature(selected) {
  return [...new Set(selected)].sort().join("");
}

function recordMistakeAttempt(question, selected) {
  const signature = normalizeSelectedSignature(selected);
  if (!signature) return;
  const current = state.mistakeStats[question.id] || { attempts: 0, wrongs: 0, lastSig: "" };
  if (current.lastSig === signature) return;

  const isCorrect = isCorrectAnswer(question, new Set(selected));
  current.attempts = (current.attempts || 0) + 1;
  current.wrongs = (current.wrongs || 0) + (isCorrect ? 0 : 1);
  current.lastSig = signature;
  state.mistakeStats[question.id] = current;
  saveMistakeStats();
}

function getMistakeSummary(questionId) {
  const stat = state.mistakeStats[questionId];
  if (!stat || !stat.attempts) return "";
  const rate = Math.round((stat.wrongs / Math.max(stat.attempts, 1)) * 100);
  return `历史错误率：${rate}%（${stat.wrongs}/${stat.attempts}）`;
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
  const QUESTION_BANK = getCurrentQuestionBank();
  const filtered = QUESTION_BANK.filter((question) => currentFilter.match(question, state.progress, state.mistakeStats));
  if (typeof currentFilter.sort === "function") {
    return filtered.sort((a, b) => currentFilter.sort(a, b, state.mistakeStats));
  }
  return filtered;
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

function switchQuestionBank(bankKey) {
  state.currentBank = bankKey;
  state.filter = "all";
  state.currentIndex = 0;
  state.progress = loadProgress();
  state.mistakeStats = loadMistakeStats();

  if (elements.bankOldBtn) {
    elements.bankOldBtn.classList.toggle("active", bankKey === "old");
  }
  if (elements.bankNewBtn) {
    elements.bankNewBtn.classList.toggle("active", bankKey === "new");
  }

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

  if (question.type === "multiple") {
    progress.checked = false;
    progress.isCorrect = false;
  } else {
    progress.checked = progress.selected.length > 0;
    progress.isCorrect = progress.checked ? isCorrectAnswer(question, selected) : false;
    recordMistakeAttempt(question, progress.selected);
  }

  saveProgress();
  render();
}

function confirmMultipleAnswer() {
  const question = getCurrentQuestion();
  if (!question || question.type !== "multiple") return;

  const progress = ensureQuestionProgress(question.id);
  if (!progress.selected.length) {
    window.alert("请先选择答案再确认。");
    return;
  }

  const selectedSet = new Set(progress.selected);
  progress.checked = true;
  progress.isCorrect = isCorrectAnswer(question, selectedSet);
  recordMistakeAttempt(question, progress.selected);
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
  const QUESTION_BANK = getCurrentQuestionBank();
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
    document.body.classList.remove("needs-multi-confirm");
    if (elements.confirmMultiBtn) elements.confirmMultiBtn.classList.add("hidden");
    return;
  }

  const progress = ensureQuestionProgress(question.id);
  const selectedSet = getSelectedSet(question.id);
  const answerSet = getAnswerSet(question);

  elements.questionBadge.textContent = TYPE_LABELS[question.type];
  elements.questionIndex.textContent = `第 ${question.id} 题`;
  elements.questionTitle.textContent = question.question;

  const needsConfirm = question.type === "multiple";
  document.body.classList.toggle("needs-multi-confirm", isMobileViewport() && needsConfirm);
  if (elements.confirmMultiBtn) {
    elements.confirmMultiBtn.classList.toggle("hidden", !needsConfirm);
    elements.confirmMultiBtn.disabled = progress.checked || progress.selected.length === 0;
    elements.confirmMultiBtn.textContent = progress.checked ? "已确认" : "确认答案";
  }

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
  const mistakeSummary = getMistakeSummary(question.id);
  elements.resultExplanation.textContent = mistakeSummary
    ? `${mistakeSummary}\n${question.explanation || "暂无解析。"}`
    : (question.explanation || "暂无解析。");
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

if (elements.bankOldBtn) {
  elements.bankOldBtn.addEventListener("click", () => switchQuestionBank("old"));
}
if (elements.bankNewBtn) {
  elements.bankNewBtn.addEventListener("click", () => switchQuestionBank("new"));
}

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
elements.confirmMultiBtn.addEventListener("click", confirmMultipleAnswer);
elements.resetStatsBtn.addEventListener("click", () => {
  const shouldReset = window.confirm("确定要清空易错库统计吗？（不会影响答题进度）");
  if (!shouldReset) return;
  state.mistakeStats = {};
  try {
    localStorage.removeItem(MISTAKE_STATS_KEY);
  } catch {
    saveMistakeStats();
  }
  if (state.filter === "hard") {
    state.filter = "all";
    state.currentIndex = 0;
  }
  render();
});
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

/* ===================================================================
   TECH TONIC 2K26 - Electro Quiz App
   Interactive quiz with 2 rounds, timers, scoring, and review
   Round 1: 25 MCQs | Round 2: Set 1 (15 Qs) & Set 2 (15 Qs)
=================================================================== */

// ── Configuration ──
const CONFIG = {
  rounds: {
    1: { name: 'Round 1', questions: 25, time: 15 * 60, desc: 'Basic Engineering & Science Fundamentals' },
    2: { name: 'Round 2 — Set 1', questions: 15, time: 10 * 60, desc: 'Electronics, Communication & AI/ML' },
    3: { name: 'Round 2 — Set 2', questions: 15, time: 10 * 60, desc: 'Digital Electronics, Communication & IoT' }
  }
};

// ── Firebase Config — PASTE YOUR CONFIG HERE ──
const FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  databaseURL: "https://techtonic-quiz-default-rtdb.firebaseio.com",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// ── Actual Quiz Questions ──
const SAMPLE_QUESTIONS = {
  1: [
    { q: "Engineering is the application of:", options: ["Science", "Mathematics", "Scientific principles", "History"], answer: 2, type: "mcq" },
    { q: "Unit of Force is:", options: ["Joule", "Newton", "Watt", "Pascal"], answer: 1, type: "mcq" },
    { q: "Ohm's Law is expressed as:", options: ["V = IR", "P = VI", "F = ma", "E = mc²"], answer: 0, type: "mcq" },
    { q: "SI unit of Power is:", options: ["Joule", "Watt", "Volt", "Ampere"], answer: 1, type: "mcq" },
    { q: "A device used to increase or decrease voltage is:", options: ["Motor", "Generator", "Transformer", "Battery"], answer: 2, type: "mcq" },
    { q: "Stress is defined as:", options: ["Force × Area", "Force / Area", "Area / Force", "Mass × Acceleration"], answer: 1, type: "mcq" },
    { q: "The working principle of a lever is based on:", options: ["Friction", "Moment", "Pressure", "Velocity"], answer: 1, type: "mcq" },
    { q: "Unit of Current is:", options: ["Volt", "Ohm", "Ampere", "Watt"], answer: 2, type: "mcq" },
    { q: "Which is a renewable energy source?", options: ["Coal", "Diesel", "Solar", "Petrol"], answer: 2, type: "mcq" },
    { q: "Bernoulli's theorem is related to:", options: ["Heat", "Electricity", "Fluids", "Sound"], answer: 2, type: "mcq" },
    { q: "Hooke's Law is related to:", options: ["Electricity", "Elasticity", "Heat", "Magnetism"], answer: 1, type: "mcq" },
    { q: "Casting is a process of:", options: ["Joining metals", "Cutting metals", "Shaping molten metal", "Polishing metal"], answer: 2, type: "mcq" },
    { q: "The efficiency of a machine is always:", options: ["More than 100%", "Equal to 100%", "Less than or equal to 100%", "Zero"], answer: 2, type: "mcq" },
    { q: "AC stands for:", options: ["Alternating Current", "Active Current", "Ampere Current", "Automatic Current"], answer: 0, type: "mcq" },
    { q: "The unit of resistance is:", options: ["Volt", "Ohm", "Watt", "Tesla"], answer: 1, type: "mcq" },
    { q: "The device that converts mechanical energy into electrical energy is:", options: ["Motor", "Transformer", "Generator", "Inverter"], answer: 2, type: "mcq" },
    { q: "Pascal is the unit of:", options: ["Pressure", "Power", "Energy", "Work"], answer: 0, type: "mcq" },
    { q: "Work done is zero when:", options: ["Force is applied", "Displacement is zero", "Object moves", "Power is high"], answer: 1, type: "mcq" },
    { q: "Thermal conductivity is related to:", options: ["Electricity", "Heat transfer", "Magnetism", "Sound"], answer: 1, type: "mcq" },
    { q: "A closed circuit means:", options: ["Broken path", "Complete path", "No current", "High resistance"], answer: 1, type: "mcq" },
    { q: "Horsepower is a unit of:", options: ["Force", "Power", "Energy", "Speed"], answer: 1, type: "mcq" },
    { q: "Which is a semiconductor?", options: ["Copper", "Glass", "Silicon", "Wood"], answer: 2, type: "mcq" },
    { q: "The formula for Power is:", options: ["P = V/I", "P = VI", "P = I/R", "P = F/A"], answer: 1, type: "mcq" },
    { q: "The first class lever has fulcrum placed:", options: ["At one end", "Between load and effort", "Near load", "Near effort"], answer: 1, type: "mcq" },
    { q: "Welding is a process of:", options: ["Cutting", "Drilling", "Joining metals", "Painting"], answer: 2, type: "mcq" }
  ],
  2: [
    { q: "The basic building block of digital electronics is:", options: ["Transistor", "Diode", "Logic Gate", "Resistor"], answer: 2, type: "mcq" },
    { q: "A PN junction diode conducts in:", options: ["Reverse bias only", "Forward bias only", "Both directions", "No direction"], answer: 1, type: "mcq" },
    { q: "The unit of capacitance is:", options: ["Henry", "Farad", "Ohm", "Tesla"], answer: 1, type: "mcq" },
    { q: "In a common emitter amplifier, the output signal is in phase with the input signal.", options: ["True", "False"], answer: 1, type: "tf" },
    { q: "BJT stands for:", options: ["Binary Junction Transistor", "Bipolar Junction Transistor", "Basic Junction Transistor", "Balanced Junction Transistor"], answer: 1, type: "mcq" },
    { q: "The bandwidth of an AM signal is twice the highest frequency of the message signal.", options: ["True", "False"], answer: 0, type: "tf" },
    { q: "The output of an AND gate is HIGH when:", options: ["Any one input is HIGH", "All inputs are HIGH", "All inputs are LOW", "One input is LOW"], answer: 1, type: "mcq" },
    { q: "The process of converting analog signal to digital signal is called:", options: ["Modulation", "Amplification", "Sampling", "Rectification"], answer: 2, type: "mcq" },
    { q: "The frequency range of FM broadcasting is:", options: ["30–300 kHz", "300–3000 kHz", "88–108 MHz", "1–10 GHz"], answer: 2, type: "mcq" },
    { q: "An amplifier increases:", options: ["Frequency", "Power", "Resistance", "Wavelength"], answer: 1, type: "mcq" },
    { q: "The full form of LED is:", options: ["Light Emitting Diode", "Low Energy Device", "Light Energy Detector", "Linear Emitting Device"], answer: 0, type: "mcq" },
    { q: "What type of learning algorithm is used when labeled data is available?", options: ["Reinforcement Learning", "Unsupervised Learning", "Supervised Learning", "Semi-Supervised Learning"], answer: 2, type: "mcq" },
    { q: "Which algorithm is commonly used for classification problems in Machine Learning?", options: ["K-Nearest Neighbors", "Linear Regression", "Fourier Transform", "Huffman Coding"], answer: 0, type: "mcq" },
    { q: "Which language is most commonly used for AI and ML development?", options: ["Python", "Java", "C", "MATLAB"], answer: 0, type: "mcq" },
    { q: "In digital electronics, binary system uses:", options: ["0–9", "0–7", "0–1", "1–10"], answer: 2, type: "mcq" }
  ],
  3: [
    { q: "A flip-flop is used to:", options: ["Amplify signal", "Store one bit of data", "Filter noise", "Increase voltage"], answer: 1, type: "mcq" },
    { q: "The gain of an amplifier is:", options: ["Output/Input", "Input/Output", "Voltage × Current", "Power × Time"], answer: 0, type: "mcq" },
    { q: "The main function of a rectifier is to convert:", options: ["AC to DC", "DC to AC", "Analog to Digital", "Digital to Analog"], answer: 0, type: "mcq" },
    { q: "The device used to generate carrier signal is:", options: ["Amplifier", "Oscillator", "Transformer", "Diode"], answer: 1, type: "mcq" },
    { q: "A flip-flop can store more than one bit of data at a time.", options: ["True", "False"], answer: 1, type: "tf" },
    { q: "The bandwidth of a signal is measured in:", options: ["Volts", "Amperes", "Hertz", "Ohms"], answer: 2, type: "mcq" },
    { q: "The logic gate which gives HIGH output when inputs are different is:", options: ["AND", "OR", "XOR", "NAND"], answer: 2, type: "mcq" },
    { q: "The speed of electromagnetic wave in free space is:", options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"], answer: 1, type: "mcq" },
    { q: "An ideal operational amplifier has infinite input impedance.", options: ["True", "False"], answer: 0, type: "tf" },
    { q: "An antenna is used to:", options: ["Store energy", "Transmit and receive signals", "Amplify signals", "Rectify signals"], answer: 1, type: "mcq" },
    { q: "GSM stands for:", options: ["Global Signal Mode", "General Signal Method", "Global System for Mobile communication", "Ground System Mobile"], answer: 2, type: "mcq" },
    { q: "Which sensor is commonly used in IoT systems to measure temperature?", options: ["LDR", "LM35", "Ultrasonic sensor", "IR sensor"], answer: 1, type: "mcq" },
    { q: "Which protocol is widely used for IoT communication?", options: ["HTTP", "FTP", "SMTP", "MQTT"], answer: 3, type: "mcq" },
    { q: "In embedded systems, a microcontroller typically includes:", options: ["CPU only", "CPU + RAM + ROM + I/O ports", "RAM only", "CPU + Hard disk"], answer: 1, type: "mcq" },
    { q: "A multiplexer is used to:", options: ["Increase power", "Select one input from many inputs", "Store data", "Convert AC to DC"], answer: 1, type: "mcq" }
  ]
};

// ── State ──
let state = {
  teamName: '',
  participantId: '',
  currentRound: 1,
  currentQuestion: 0,
  answers: [],
  timeLeft: 0,
  timerInterval: null,
  startTime: null,
  questions: [],
  submitted: false,
  score: 0
};

// ── DOM Elements ──
const $ = id => document.getElementById(id);

// ── Screen Management ──
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

// ── Toast ──
function showToast(msg, type = 'info') {
  const toast = $('toast');
  toast.textContent = msg;
  toast.className = `toast ${type} show`;
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── Welcome Screen ──
function startQuiz() {
  const name = $('teamName').value.trim();
  const round = parseInt($('roundSelect').value);

  if (!name) return showToast('Please enter your team name', 'error');

  state.teamName = name;
  state.participantId = 'TT26-' + Date.now();
  state.currentRound = round;
  state.currentQuestion = 0;
  state.submitted = false;
  state.score = 0;
  state.startTime = Date.now();

  loadQuestions(round);
}

// ── Load Questions ──
function loadQuestions(round) {
  showScreen('loadingScreen');
  setTimeout(() => useSampleQuestions(round), 800);
}

function useSampleQuestions(round) {
  state.questions = SAMPLE_QUESTIONS[round] || [];
  state.answers = new Array(state.questions.length).fill(-1);
  initQuizScreen();
}

// ── Quiz Screen ──
function initQuizScreen() {
  state.timeLeft = CONFIG.rounds[state.currentRound].time;
  showScreen('quizScreen');
  $('roundBadge').textContent = CONFIG.rounds[state.currentRound].name.toUpperCase();
  renderQuestion();
  renderQuestionNav();
  startTimer();
}

function renderQuestion() {
  const q = state.questions[state.currentQuestion];
  const total = state.questions.length;
  const idx = state.currentQuestion;

  $('questionNumber').textContent = `QUESTION ${idx + 1} OF ${total}`;
  $('questionText').textContent = q.q;
  $('progressText').textContent = `${idx + 1} / ${total}`;
  $('progressFill').style.width = `${((idx + 1) / total) * 100}%`;

  const optionsHtml = q.options.map((opt, i) => {
    const labels = q.type === 'tf' ? ['T', 'F'] : ['A', 'B', 'C', 'D'];
    const selected = state.answers[idx] === i ? 'selected' : '';
    return `<button class="option-btn ${selected}" onclick="selectOption(${i})">
      <span class="option-label">${labels[i]}</span>
      <span>${opt}</span>
    </button>`;
  }).join('');

  $('optionsGrid').innerHTML = optionsHtml;

  // Nav buttons
  $('prevBtn').style.display = idx === 0 ? 'none' : 'block';
  const isLast = idx === total - 1;
  $('nextBtn').textContent = isLast ? '✓ Submit Quiz' : 'Next →';
  $('nextBtn').className = `btn-nav ${isLast ? 'btn-submit' : 'btn-next'}`;
  $('nextBtn').onclick = isLast ? () => confirmSubmit() : () => goNext();

  updateQuestionNav();
}

function selectOption(i) {
  state.answers[state.currentQuestion] = i;
  renderQuestion();
}

function goNext() {
  if (state.currentQuestion < state.questions.length - 1) {
    state.currentQuestion++;
    renderQuestion();
  }
}

function goPrev() {
  if (state.currentQuestion > 0) {
    state.currentQuestion--;
    renderQuestion();
  }
}

function jumpToQuestion(i) {
  state.currentQuestion = i;
  renderQuestion();
}

function renderQuestionNav() {
  const dots = state.questions.map((_, i) =>
    `<div class="q-dot" onclick="jumpToQuestion(${i})">${i + 1}</div>`
  ).join('');
  $('questionDots').innerHTML = dots;
}

function updateQuestionNav() {
  document.querySelectorAll('.q-dot').forEach((dot, i) => {
    dot.className = 'q-dot';
    if (i === state.currentQuestion) dot.classList.add('current');
    else if (state.answers[i] !== -1) dot.classList.add('answered');
  });
}

// ── Timer ──
function startTimer() {
  clearInterval(state.timerInterval);
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    updateTimerDisplay();
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      showToast('⏰ Time\'s up! Auto-submitting...', 'error');
      setTimeout(() => submitQuiz(), 1000);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const min = Math.floor(state.timeLeft / 60);
  const sec = state.timeLeft % 60;
  const timerEl = $('timer');
  timerEl.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

  timerEl.className = 'timer';
  if (state.timeLeft <= 60) timerEl.classList.add('danger');
  else if (state.timeLeft <= 120) timerEl.classList.add('warning');
}

// ── Submit ──
function confirmSubmit() {
  const unanswered = state.answers.filter(a => a === -1).length;
  const modal = $('confirmModal');
  $('modalMessage').innerHTML = unanswered > 0
    ? `You have <b style="color:#ff9800">${unanswered} unanswered</b> question${unanswered > 1 ? 's' : ''}. Are you sure you want to submit?`
    : 'Are you sure you want to submit your answers? This cannot be undone.';
  modal.classList.add('active');
}

function closeModal() {
  $('confirmModal').classList.remove('active');
}

function submitQuiz() {
  if (state.submitted) return;
  state.submitted = true;
  clearInterval(state.timerInterval);
  closeModal();

  // Calculate score
  let correct = 0;
  state.questions.forEach((q, i) => {
    if (state.answers[i] === q.answer) correct++;
  });
  state.score = correct;

  const timeTaken = Math.round((Date.now() - state.startTime) / 1000);

  // Save to Firebase
  saveToFirebase(correct, state.questions.length, timeTaken);

  showResults(correct, state.questions.length, timeTaken);
}

function saveToFirebase(score, total, timeTaken) {
  if (!FIREBASE_CONFIG.databaseURL) return;
  try {
    const roundNames = { 1: 'round1', 2: 'round2_set1', 3: 'round2_set2' };
    const path = roundNames[state.currentRound] || 'round1';
    const data = {
      team: state.teamName,
      round: state.currentRound,
      score: score,
      total: total,
      time: timeTaken,
      timestamp: new Date().toISOString(),
      winner: false
    };
    fetch(`${FIREBASE_CONFIG.databaseURL}/quiz_results/${path}.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).catch(() => { });
  } catch (e) { }
}

// ── Results ──
function showResults(score, total, timeTaken) {
  showScreen('resultsScreen');

  $('scoreValue').textContent = score;
  $('scoreTotal').textContent = `out of ${total}`;
  $('statCorrect').textContent = score;
  $('statWrong').textContent = total - score;
  $('statTime').textContent = formatTime(timeTaken);
  $('resultRound').textContent = CONFIG.rounds[state.currentRound].name;

  // Set score circle border color based on percentage
  const pct = (score / total) * 100;
  const circle = document.querySelector('.score-circle');
  if (pct >= 70) circle.style.borderColor = '#4CAF50';
  else if (pct >= 40) circle.style.borderColor = '#ff9800';
  else circle.style.borderColor = '#ef4444';

  renderReview();
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
}

function renderReview() {
  const html = state.questions.map((q, i) => {
    const userAns = state.answers[i];
    const isCorrect = userAns === q.answer;
    const labels = q.type === 'tf' ? ['T', 'F'] : ['A', 'B', 'C', 'D'];

    const optionsHtml = q.options.map((opt, j) => {
      let cls = '';
      let marker = '';
      if (j === q.answer) { cls = 'is-correct'; marker = '✓'; }
      if (j === userAns && !isCorrect) { cls = 'is-wrong'; marker = '✗'; }
      return `<div class="review-option ${cls}">
        <span class="option-label" style="width:26px;height:26px;font-size:0.75rem">${labels[j]}</span>
        <span>${opt}</span>
        ${marker ? `<span class="marker">${marker}</span>` : ''}
      </div>`;
    }).join('');

    return `<div class="review-item ${isCorrect ? 'correct' : 'wrong'}">
      <div class="review-q-num">Q${i + 1} ${isCorrect ? '✓ Correct' : (userAns === -1 ? '— Skipped' : '✗ Wrong')}</div>
      <div class="review-q-text">${q.q}</div>
      ${optionsHtml}
    </div>`;
  }).join('');

  $('reviewList').innerHTML = html;
}

// ── Restart ──
function restartQuiz() {
  state = { ...state, currentQuestion: 0, answers: [], timeLeft: 0, submitted: false, score: 0, questions: [] };
  clearInterval(state.timerInterval);
  showScreen('welcomeScreen');
}

// ── Page Leave Protection ──
// Warn before leaving during quiz
window.addEventListener('beforeunload', (e) => {
  if (state.questions.length > 0 && !state.submitted) {
    // Auto-submit answers to Firebase before leaving
    let correct = 0;
    state.questions.forEach((q, i) => {
      if (state.answers[i] === q.answer) correct++;
    });
    const timeTaken = Math.round((Date.now() - state.startTime) / 1000);

    // Use sendBeacon for reliable submission on page close
    if (FIREBASE_CONFIG.databaseURL) {
      const roundNames = { 1: 'round1', 2: 'round2_set1', 3: 'round2_set2' };
      const path = roundNames[state.currentRound] || 'round1';
      const data = JSON.stringify({
        team: state.teamName,
        round: state.currentRound,
        score: correct,
        total: state.questions.length,
        time: timeTaken,
        timestamp: new Date().toISOString(),
        winner: false,
        autoSubmitted: true
      });
      navigator.sendBeacon(
        `${FIREBASE_CONFIG.databaseURL}/quiz_results/${path}.json`,
        data
      );
    }

    e.preventDefault();
    e.returnValue = '';
  }
});

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  showScreen('welcomeScreen');
});

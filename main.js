import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";
import confetti from 'canvas-confetti';

// 1. GLOBAL STATE (Memory stays alive here)
let currentStreak = 0;

// 2. FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIza...", 
  authDomain: "solvesync-6f45a.firebaseapp.com",
  databaseURL: "https://solvesync-6f45a-default-rtdb.firebaseio.com", 
  projectId: "solvesync-6f45a",
  storageBucket: "solvesync-6f45a.appspot.com",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 3. UI REFERENCES
const inputField = document.getElementById('answer-input');
const displayArea = document.getElementById('student-work');
const clearBtn = document.getElementById('clear-btn');
const statusText = document.getElementById('connection-status');
const statusDot = document.getElementById('status-dot');
const mathProblemDisplay = document.getElementById('math-problem');
const submitBtn = document.getElementById('submit-btn');
const chalkboard = document.getElementById('chalkboard');
const streakNumDisplay = document.getElementById('streak-num');
const nextBtn = document.getElementById('next-btn');
const highScoreDisplay = document.getElementById('high-score-num');

// 4. CLOUD LISTENERS (Real-time Updates)
onValue(ref(db, ".info/connected"), (snap) => {
  if (snap.val() === true) {
    statusText.innerText = "CLOUD_SYNC_ACTIVE";
    statusDot.style.background = "#22c55e";
  }
});

// Sync the Problem from Cloud
onValue(ref(db, 'activeProblem'), (snapshot) => {
    const problem = snapshot.val();
    
    // 🟢 FIXED: If 'problem' is null, show a welcoming default
    if (mathProblemDisplay) {
        mathProblemDisplay.innerText = problem || "Select a category below to start!";
    }
});


// Sync World Record to the UI
onValue(ref(db, 'worldRecord'), (snapshot) => {
    const record = snapshot.val() || 0;
    if (highScoreDisplay) highScoreDisplay.innerText = record;
});

// Sync the Student's Work (Real-time Typing)
if (inputField && displayArea) {
    inputField.addEventListener('input', (e) => {
        set(ref(db, 'currentWork'), e.target.value);
    });

    onValue(ref(db, 'currentWork'), (snapshot) => {
        displayArea.innerText = snapshot.val() || "READY_FOR_INPUT";
    });
}

// 5. BUTTON LOGIC

// Clear Button
if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    set(ref(db, 'currentWork'), "");
    inputField.value = "";
  });
}

// Next Problem Generator (Teacher Mode)
let currentCategory = 'add'; // Default category

//  Category Buttons Logic
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    currentCategory = e.target.getAttribute('data-type');
    generateProblem(currentCategory); // Generate immediately
  });
});

//  The "Next" Button Logic (The Shuffle)
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    // It uses the last category you picked!
    generateProblem(currentCategory);
  });
}

//  One Master Function to rule them all
function generateProblem(type) {
  let num1 = Math.floor(Math.random() * 20) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  let q, a;

  if (type === 'add') { q = `${num1} + ${num2} = ?`; a = num1 + num2; }
  else if (type === 'sub') { q = `${num1 + num2} - ${num2} = ?`; a = num1; }
  else if (type === 'mult') { q = `${num1} × ${num2} = ?`; a = num1 * num2; }
  else if (type === 'alg') {
    let x = Math.floor(Math.random() * 50) + 10; // x will be between 10 and 60
    let multiplier = Math.floor(Math.random() * 5) + 2; // A
    let divisor = Math.floor(Math.random() * 10) + 2; 

    let result = (multiplier * x) / divisor;

      q = `Solve for x: (${multiplier}x) / ${divisor} = ${result}`; 
    a = x;
  }

 else if (type === 'div') { 
    let num1 = Math.floor(Math.random() * 50) + 10; // Larger numbers
    let num2 = Math.floor(Math.random() * 20) + 2; 
    let dividend = num1 * num2; 
    q = `Solve: ${dividend} ÷ ${num2} = ?`; 
    a = num1; 
  }

  // Update Firebase for everyone
  set(ref(db, 'activeProblem'), q);
  set(ref(db, 'correctAnswer'), a);
  set(ref(db, 'currentWork'), "");
  if (inputField) inputField.value = "";
}


// Submit Answer Logic
if (submitBtn) {
    submitBtn.addEventListener('click', () => {
        const rawInput = inputField.value.trim();
        const userTyped = Number(rawInput);

        onValue(ref(db, 'correctAnswer'), (snapshot) => {
            const correct = Number(snapshot.val());

            // --- SUCCESS CASE ---
            if (userTyped === correct && rawInput !== "") {
                currentStreak += 1;
                if (streakNumDisplay) streakNumDisplay.innerText = currentStreak;

                // Check for new World Record
                get(child(ref(db), 'worldRecord')).then((snap) => {
                    const currentRecord = snap.val() || 0;
                    if (currentStreak > currentRecord) {
                        set(ref(db, 'worldRecord'), currentStreak);
                        console.log("🏆 NEW WORLD RECORD!");
                    }
                });

                // Confetti Explosion
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#22d3ee', '#f8fafc', '#334155'] 
                });

                // Visual Effects
                chalkboard.classList.add('success-glow');
                displayArea.style.color = "var(--accent-cyan)";
                
                if (currentStreak >= 3) {
                    chalkboard.style.boxShadow = `0 0 50px var(--accent-cyan)`;
                }

                setTimeout(() => {
                    alert(`CORRECT! 🚀 STREAK: ${currentStreak}`);
                    chalkboard.classList.remove('success-glow');
                    inputField.value = ""; 
                }, 500);

            // --- FAILURE CASE ---
            } else {
                currentStreak = 0; 
                if (streakNumDisplay) streakNumDisplay.innerText = "0";
                
                chalkboard.style.boxShadow = "none";
                displayArea.style.color = "var(--danger-red)";
                
                alert("TRY AGAIN... ❌ STREAK RESET");
            }
        }, { onlyOnce: true });
    });
}

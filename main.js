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
    if (mathProblemDisplay) {
        mathProblemDisplay.innerText = problem || "Solve for x: 2x + 5 = 15";
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
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    const x = Math.floor(Math.random() * 10) + 1; // Hidden Answer
    const multiplier = Math.floor(Math.random() * 5) + 2;
    const result = x * multiplier;
    const problemText = `Solve for x: ${multiplier}x = ${result}`;

    set(ref(db, 'activeProblem'), problemText);
    set(ref(db, 'correctAnswer'), x);
    set(ref(db, 'currentWork'), ""); 
    
    if (inputField) inputField.value = "";
    console.log("New Algebra Problem Generated! 🛰️");
  });
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

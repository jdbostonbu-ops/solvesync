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
const hintBtn = document.getElementById('hint-btn');
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
    const type = e.target.getAttribute('data-type');
    
    // ONLY run if it has a data-type (this skips the Show Work button!)
    if (type) {
      currentCategory = type;
      generateProblem(currentCategory); 
    }
  });
});

//  The "Next" Button (The Shuffle)
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    // If they haven't picked a category yet, default to 'add'
    if (!currentCategory) currentCategory = 'add';
    
    generateProblem(currentCategory);
    
    // 🧹 Clear the old work from the chalkboard for the new problem
    if (displayArea) displayArea.innerText = ""; 
  });
}

//  One Master Function to rule them all
function generateProblem(type) {
  let num1 = Math.floor(Math.random() * 20) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  let q = "";
  let a = 0;
  let steps = "";

  if (type === 'add') { 
    q = `${num1} + ${num2} = ?`; 
    a = num1 + num2; 
    steps = `Simply add the two numbers together: ${num1} + ${num2} = ${a}`;
  } 
  else if (type === 'sub') { 
    q = `${num1 + num2} - ${num2} = ?`; 
    a = num1; 
    steps = `Subtract ${num2} from ${num1 + num2} to find the difference: ${a}`;
  } 
  else if (type === 'mult') { 
    q = `${num1} × ${num2} = ?`; 
    a = num1 * num2; 
    steps = `Multiply ${num1} by ${num2} to get ${a}`;
  } 
  else if (type === 'div') { 
    let d1 = Math.floor(Math.random() * 50) + 10;
    let d2 = Math.floor(Math.random() * 20) + 2; 
    let dividend = d1 * d2; 
    q = `${dividend} ÷ ${d2} = ?`; 
    a = d1; 
    steps = `Divide ${dividend} by ${d2}. Think: what times ${d2} equals ${dividend}? The answer is ${a}`;
  } 
  else if (type === 'alg') {
    let x = Math.floor(Math.random() * 15) + 2; 
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
      // Format: a(x + b) = c
      let aVal = Math.floor(Math.random() * 5) + 2;
      let bVal = Math.floor(Math.random() * 10) + 1;
      let cVal = aVal * (x + bVal);
      q = `Solve for x: ${aVal}(x + ${bVal}) = ${cVal}`;
      a = x;
      steps = `1. Divide both sides by ${aVal}: (x + ${bVal}) = ${cVal/aVal}\n2. Subtract ${bVal}: x = ${a}`;
    } 
    else if (choice === 1) {
      // Format: ax + b = cx + d
      let cVal = Math.floor(Math.random() * 4) + 1;
      let aVal = cVal + (Math.floor(Math.random() * 5) + 2);
      let bVal = Math.floor(Math.random() * 20) + 1;
      let dVal = (aVal * x + bVal) - (cVal * x);
      q = `Solve for x: ${aVal}x + ${bVal} = ${cVal}x + ${dVal}`;
      a = x;
      steps = `1. Subtract ${cVal}x from both sides: ${aVal - cVal}x + ${bVal} = ${dVal}\n2. Subtract ${bVal}: ${aVal - cVal}x = ${dVal - bVal}\n3. Divide: x = ${a}`;
    } 
    else {
      // Format: (ax) / b = c
      let mult = Math.floor(Math.random() * 8) + 3;
      let div = Math.floor(Math.random() * 6) + 2;
      let res = (mult * x) / div;
      while (res % 1 !== 0) { x++; res = (mult * x) / div; }
      q = `Solve for x: (${mult}x) / ${div} = ${res}`;
      a = x;
      steps = `1. Multiply both sides by ${div}: ${mult}x = ${res * div}\n2. Divide by ${mult}: x = ${a}`;
    }
  }

  // --- MASTER UPDATE (Runs once at the end) ---
  set(ref(db, 'activeSteps'), steps); 
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

                    generateProblem(currentCategory); 
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


// --- HINT / SHOW WORK LOGIC ---
if (hintBtn) {
  console.log("Found the hint button!");
  
  hintBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // 👈 Added this to stop the "Select Category" popup
    console.log("CLICKED!");
    
    get(ref(db, 'activeSteps')).then((snap) => {
      const work = snap.val();
      console.log("Firebase Data Received:", work); 

      if (work) {
        displayArea.innerText = "--- HOW TO SOLVE ---\n" + work;
        displayArea.style.color = "#fbbf24"; 
        currentStreak = 0;
        if (streakNumDisplay) streakNumDisplay.innerText = "0";
      } else {
        displayArea.innerText = "No work found in database.";
      }
    }).catch(err => {
      console.error("Firebase Error:", err.message);
    });
    // ❌ DELETE THE EXTRA console.error LINE THAT WAS HERE
  });
} else {
  console.error("COULD NOT FIND hint-btn IN HTML");
}





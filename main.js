import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";
import confetti from 'canvas-confetti';
import { playMathAnswer } from './utils/tts.js';
// 1. GLOBAL STATE (Memory stays alive here)
let currentStreak = 0;

// 2. FIREBASE CONFIG
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // updated apiKey with Google cloud, secured apiKey to prevent leakage by creating an env file //
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
let totalRounds = 0;



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

//  BUTTON LOGIC

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

function generateProblem(type) {
  let num1 = Math.floor(Math.random() * 20) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  let q = "";
  let a = 0;

  if (type === 'add') { 
    q = `${num1} + ${num2} = ?`; 
    a = num1 + num2; 
  } 
  else if (type === 'sub') { 
    q = `${num1 + num2} - ${num2} = ?`; 
    a = num1; 
  } 
  else if (type === 'mult') { 
    q = `${num1} × ${num2} = ?`; 
    a = num1 * num2; 
  } 
  else if (type === 'div') { 
    let d1 = Math.floor(Math.random() * 50) + 10;
    let d2 = Math.floor(Math.random() * 20) + 2; 
    let dividend = d1 * d2; 
    q = `${dividend} ÷ ${d2} = ?`; 
    a = d1; 
  } 
  else if (type === 'alg') {
    let x = Math.floor(Math.random() * 15) + 2; 
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
      let aVal = Math.floor(Math.random() * 5) + 2;
      let bVal = Math.floor(Math.random() * 10) + 1;
      let cVal = aVal * (x + bVal);
      q = `Solve for x: ${aVal}(x + ${bVal}) = ${cVal}`;
      a = x;
    } 
    else if (choice === 1) {
      let cVal = Math.floor(Math.random() * 4) + 1;
      let aVal = cVal + (Math.floor(Math.random() * 5) + 2);
      let bVal = Math.floor(Math.random() * 20) + 1;
      let dVal = (aVal * x + bVal) - (cVal * x);
      q = `Solve for x: ${aVal}x + ${bVal} = ${cVal}x + ${dVal}`;
      a = x;
    } 
    else {
      let mult = Math.floor(Math.random() * 8) + 3;
      let div = Math.floor(Math.random() * 6) + 2;
      let res = (mult * x) / div;
      while (res % 1 !== 0) { x++; res = (mult * x) / div; }
      q = `Solve for x: (${mult}x) / ${div} = ${res}`;
      a = x;
    }
  }

  // --- MASTER UPDATE (Runs once at the end) ---
  set(ref(db, 'activeProblem'), q);
  set(ref(db, 'correctAnswer'), a);
  set(ref(db, 'currentWork'), "");
  if (inputField) inputField.value = "";
}

// --- ALL-IN-ONE REWARD LOGIC (Branchy Celebration) ---

function triggerStreakReward(streak) {
  const bot = document.getElementById('math-bot');
  const botBubble = document.getElementById('bot-bubble');
  const rocket = document.getElementById('cosmo-rocket');
  const rocketBubble = document.getElementById('cosmo-bubble');
  const chalkboard = document.getElementById('chalkboard');

  // --- 🚀 STREAK 5: COSMO THE ROCKET BLAST OFF ---
  if (streak % 5 === 0) {
    if (!rocket || !rocketBubble) return;
    
    // Stage 1: Glide into view and park
    rocket.style.transition = "bottom 1s ease-out";
    rocket.style.bottom = "120px"; 
    rocketBubble.style.display = "block";
    if (chalkboard) chalkboard.classList.add('shake-screen');

    // Stage 2: Ignition puff
    setTimeout(() => {
      confetti({ particleCount: 60, spread: 80, origin: { x: 0.5, y: 0.8 }, colors: ['#4b5563', '#ff4500'] });

      // Stage 3: Slow majestic blast off
      setTimeout(() => {
        rocket.style.transition = "bottom 5s cubic-bezier(0.1, 0, 1, 1)"; 
        rocket.style.bottom = "180%"; 
        
        const end = Date.now() + 4500;
        (function frame() {
          confetti({
            particleCount: 12,
            angle: 270, 
            spread: 45,
            origin: { x: 0.5, y: 0.5 }, 
            colors: ['#ff4500', '#ffa500', '#ffff00'],
            gravity: 2
          });
          if (Date.now() < end) requestAnimationFrame(frame);
        }());
      }, 1500); 
    }, 500);

    setTimeout(() => {
      rocketBubble.style.display = "none";
      if (chalkboard) chalkboard.classList.remove('shake-screen');
      rocket.style.transition = "none";
      rocket.style.bottom = "-400px";
    }, 7500);
  } 

  // --- 🤖 STREAK 3: BRANCHY DANCE ---
  else if (streak % 3 === 0) {
    if (!bot || !botBubble) return;
    bot.style.bottom = '80px';
    bot.classList.add('bot-dancing');
    botBubble.style.display = 'block';

    setTimeout(() => {
      bot.style.bottom = '-450px';
      botBubble.style.display = 'none';
      bot.classList.remove('bot-dancing');
    }, 4500);
  }
}

function triggerPersistenceReward() {
  const banner = document.getElementById('persistence-banner');
  if (!banner) return;

  setTimeout(() => {
  // Slide down and Fade in
  banner.style.top = '50px';
  banner.style.opacity = '1';

  // Sprinkle Fairy Dust (Purple/Gold/Silver Confetti)
  const duration = 4000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.3 }, // Sprinkles from the side
      colors: ['#f0abfc', '#fbbf24', '#ffffff']
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.3 },
      colors: ['#f0abfc', '#fbbf24', '#ffffff']
    });

    if (Date.now() < end) requestAnimationFrame(frame);
  }());

  // Dissolve and Slide out
  setTimeout(() => {
    banner.style.top = '20px';
    banner.style.opacity = '0';
    banner.style.filter = 'blur(10px)'; // The "dissolve" effect
    
    setTimeout(() => {
      banner.style.top = '-100px';
      banner.style.filter = 'blur(0px)';
    }, 1000);
  }, 4000);
}, 8500);
}

// --- SUBMIT ANSWER LOGIC (Preserved Original + All Rewards) ---
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

                if (currentStreak > 0 && currentStreak % 5 === 0) {
                    // This keeps the Rocket blasting off every 5, 10, 15, etc.
                    triggerStreakReward(currentStreak); 
                } 
                else if (currentStreak === 3) { 
                    // This makes Branchy the Robot show up ONLY at streak 3 and never again.
                    triggerStreakReward(currentStreak);
                }

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

// This listener ONLY handles the 10-round banner reward
if (submitBtn) {
    submitBtn.addEventListener('click', () => {
        const rawInput = inputField.value.trim();
        
        // If the box isn't empty, count the round
        if (rawInput !== "") {
            totalRounds++;
            
            // If they reached round 10, 20, 30... show the banner
            if (totalRounds % 10 === 0) {
                triggerPersistenceReward();
            }
        }
    });
}


if (hintBtn) {
    hintBtn.addEventListener('click', async (e) => {
        e.stopPropagation();
        
        displayArea.innerText = "Analyzing problem and generating steps...";
        // Inside your hint generation function in main.js


        const problemRef = ref(db, 'activeProblem');
        
        try {
            const snapshot = await get(problemRef);
            const problemText = snapshot.val();
            console.log("Sending to AI:", problemText); 

            if (!problemText) {
                displayArea.innerText = "NEW_PROBLEM_LOADED";
                displayArea.style.color = "var(--chalk-text)";
                displayArea.innerText = "Please select a math problem first!";
                return;
            }

            const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
            const MODEL = "gemini-2.5-flash"; // Updated to the latest Gemini model
            const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest${MODEL}:generateContent?key=${API_KEY}`;
            const response = await fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Act as a 4th-8th grade math tutor. Solve this problem: "${problemText}". 
                        Break it into exactly as many steps as needed for a student to understand. 
                        Return ONLY a JSON array of strings like this: ["Step 1: ...", "Step 2: ..."] 
                        Do not include any other text or markdown.`

                    }]
                }]
            })
        });

    const result = await response.json();
    if (result.candidates && result.candidates[0]) {
    const aiRawText = result.candidates[0].content.parts[0].text;
    const cleanJson = aiRawText.replace(/```json|```/g, "").trim();
    const stepsArray = JSON.parse(cleanJson);
    const fullHintText = stepsArray.join("\n\n");
    displayArea.innerText = "--- HOW TO SOLVE ---\n\n" + fullHintText;
    playMathAnswer(fullHintText);
} else if (result.error && result.error.code === 429) {
    // 🟢 HANDLE THE 429 ERROR GRACEFULLY
    displayArea.innerText = "The tutor is busy. Please wait 60 seconds and try again!";
    displayArea.style.color = "var(--danger-red)";
} else {
    displayArea.innerText = "Oops! Something went wrong. Try again.";
}
       } catch (err) {
            console.error("AI/Firebase Error:", err);
            displayArea.innerText = "Oops! I hit a snag. Try clicking hint again.";
        }
    });
}


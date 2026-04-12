# SolveSync 🚀
A real-time collaborative math platform built for interactive learning, designed to bridge the gap between algorithmic problem solving and pedagogical clarity.

### 👤 Author
**Jacqueline**  
[Check out my GitHub Profile](https://github.com/jdbostonbu-ops)

🚀 **[Visit SolveSync](https://jdbostonbu-ops.github.io/solvesync/)**

### 🌟 Features
- **Real-Time Sync**: Powered by Firebase Realtime Database for instant tutor-student interaction and work tracking.
- **Adaptive Hint Engine**: An intelligent "Show Work" system that dynamically generates step-by-step solutions based on problem complexity.
- **Multi-Level Pedagogy**:
    - **3rd Grade**: Place-value decomposition for Addition.
    - **4th Grade**: "Friendly Number" strategy for Subtraction (e.g., $22 \rightarrow 11+11 \rightarrow 5+6$).
    - **5th Grade**: Factor-based Multiplication and Partial Quotient Division.
    - **6th/7th Grade**: Multi-step Algebra with full equation balancing (Inverse operations on **BOTH** sides).
- **Modern UI**: A professional "Slate & Cyan" engineering aesthetic with high-score persistence and visual "Success Glow" effects.

### 🏆 Gamification & Rewards
- **Branchy the Math Bot**: A celebratory character that rewards students at a 3-streak.
- **Cosmo the Rocket**: A majestic, slow-burn launch sequence with screen-shake and fire-trail effects at every 5-streak.
- **Persistence Banner**: A dissolving "Star Banner" with fairy dust that rewards every 10 rounds played (correct or incorrect) to encourage long-term effort.

### 🛠 Tech Stack
- **Frontend**: Vite, JavaScript (ES6+), CSS3
- **Backend**: Firebase Realtime Database
- **Animations**: Canvas-Confetti, CSS Keyframes
- **Deployment**: Firebase Hosting + GitHub Actions (CI/CD)

### 🌐 Compatibility & Optimization

| Browser / Device | Status | Performance Notes |
| :--- | :--- | :--- |
| **Google Chrome** | ✅ Compatible | Full support for real-time synchronization. |
| **Microsoft Edge** | ✅ Compatible | Full support for Chromium rendering. |
| **Safari** | ✅ Compatible | Full support for WebKit performance. |
| **Firefox** | ✅ Supported | Full support for UI and Algebra engine. |
| **iPad & Tablets** | ✅ Supported | Optimized for touch-based learning. |
| **iPhone (iOS)** | ⚠️ Limited | **Landscape Orientation** + **50% zoom-out** required. |

### ✅ Recent Improvements
*   **Factor-Based Logic**: Multiplication now illustrates multipliers using "strings of ones" and factor branches.
*   **Balance Illustration**: Algebra hints now explicitly show the same operation being applied to both sides of the equation to maintain mathematical equality.

### ✅ Hint Engine Logic Architecture
The "Show Work" system is built on a modular logic path designed for depth, though its current output is constrained by predefined pedagogical templates:

*   **Static Step Architecture (Addition, Subtraction, Multiplication, Algebra)**: 
    While these categories are built using a `steps.push` array—allowing for future scalability—the current output is **strictly limited to the hard-coded steps** within the logic. The system does not currently generate additional recursive steps (e.g., Step 6, 7, 8) beyond what is explicitly written in the code block. However, these categories still provide a consistent, fixed-length explanation of core concepts.
    
*   **Adaptive Step Expansion (Division)**: 
    The Division engine is currently the only module that utilizes true dynamic "Step-Pushing." It evaluates the complexity of the remainder in real-time; if the value is large, it triggers a conditional logic loop to generate extra sub-steps, allowing the solution to scale from 4 to 8 steps based on dividend complexity.

### 🚀 Curriculum Leveling
*   **Addition (3rd Grade)**: Predefined 5-step place-value alignment.
*   **Subtraction (4th Grade)**: Fixed 5-step "friendly number" decomposition.
*   **Multiplication (5th Grade)**: Fixed 5-step factor-based calculation paths.
*   **Algebra (6th/7th Grade)**: Standardized 4 to 5-step balancing (inverse operations shown on BOTH sides).
*   **Division (5th Grade/Adaptive)**: Dynamic pathing that scales up to 8 steps to simplify complex remainders.








CutieCalce
A fun, interactive calculator built with HTML, CSS, and JavaScript. It doesn't just do math it talks back to you.
<br>
Features
Basic Arithmetic: Supports addition, subtraction, multiplication, and division.<br>
Smart Input: Prevents you from typing two operators in a row (no 5++3 errors).<br>
Divide by Zero Protection: Catches division by zero and gives a warning instead of crashing.<br>
Auto-Correction: If you click = with a hanging operator (like 5+ =), it automatically removes the operator and calculates the number.<br>
"Human" Status Messages: A dynamic text box below the calculator reacts to your inputs, giving you feedback, and encouragement.<br>
Responsive Grid Layout: Built using CSS Grid for perfectly aligned buttons.<br>

Tech Stack:<br>
HTML5: Semantic structure for the calculator layout.<br>
CSS3: Styling, hover effects, and CSS Grid for the button layout.<br>
JavaScript: DOM manipulation, event listeners, and math evaluation logic.<br>

How to Run:
Because this is a pure front-end project, you don't need to install any dependencies.

Clone the repository:
git clone https://github.com/faisal-makercr/Cutie-Calcee.git

cd Cutie-Calcee
Open index.html in your favorite web browser (Chrome, Firefox, Safari, etc.).
Start calculating!

Project Structure:
text

Cutie-Calcee/
├── index.html      # The skeleton of the calculator
├── style.css       # Makes it look cute and organized
├── script.js       # The brain and personality of the calculator
└── README.md       # You are here!

What I Learned
Building this project helped me practice:
Using document.querySelectorAll and forEach loops to add event listeners to multiple elements.
Using the eval() function safely with try...catch blocks for error handling.
String manipulation in JavaScript (using .trim(), .slice(), and .includes()).
Creating responsive layouts with CSS Grid (grid-template-columns: repeat(4, 1fr)).

Future Improvements
Ideas to make CutieCalce even better:
 Add keyboard support (so you can type numbers on your physical keyboard).
 Add a decimal point button (.) for floating-point math.
 Add a backspace button (⌫) to delete just one character.
 Dark/Light mode toggle.
 
Made with Love and lots of debugging.

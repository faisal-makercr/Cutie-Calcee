CutieCalce<br>
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

How to Run:<br>
Because this is a pure front-end project, you don't need to install any dependencies.<br>

Clone the repository:<br>
git clone https://github.com/faisal-makercr/Cutie-Calcee.git<br>

cd Cutie-Calcee<br>
Open index.html in your favorite web browser (Chrome, Firefox, Safari, etc.).<br>
Start calculating!<br>

Project Structure:<br>
text<br>

Cutie-Calcee/<br>
├── index.html      # The skeleton of the calculator<br>
├── style.css       # Makes it look cute and organized<br>
├── script.js       # The brain and personality of the calculator<br>
└── README.md       # You are here!<br>

What I Learned<br>
Building this project helped me practice:<br>
Using document.querySelectorAll and forEach loops to add event listeners to multiple elements.<br>
Using the eval() function safely with try...catch blocks for error handling.<br>
String manipulation in JavaScript (using .trim(), .slice(), and .includes()).<br>
Creating responsive layouts with CSS Grid (grid-template-columns: repeat(4, 1fr)).<br>

Future Improvements:<br>
Ideas to make CutieCalce even better:<br>
 Add keyboard support (so you can type numbers on your physical keyboard).<br>
 Add a decimal point button (.) for floating-point math.<br>
 Add a backspace button (⌫) to delete just one character.<br>
 Dark/Light mode toggle.<br>
 
Made with Love and lots of debugging.

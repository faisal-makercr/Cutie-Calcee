// 1.Select the display and all the buttons fromthe Html
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');


// 2. Adding a click event listener to every single button
buttons.forEach(buttoon => {
    buttons.addEventListener('click',()=> {
        //Getting the text inside the button that was clicked 
        const value =buttons.textContent;

        // 3. Logic for what to do when specific buttons are clicked
        if (value==='C') {
            // Clearing the screen
            display.value='';
        }
        else if (value==='=') {
            try {
                //Eval() is a built-in JS function that does math on strings 
                display.value = eval(display.value);
            }
            catch {
                // If the user types something mathematically impossible (Like 5+/3), show "Error"
                display.value= 'Error';
            }
        }
        else {
            // If it's a number or an operator, just add it to the screen 
            display.value += value;
        }
    });
});
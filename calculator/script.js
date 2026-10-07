// 1.Select the display and all the buttons fromthe Html
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const statusMessage = document.getElementById('status-message');

// 2. Adding a click event listener to every single button
buttons.forEach(button => {
    button.addEventListener('click',() => {
        //Getting the text inside the button that was clicked 
        const value =button.textContent;

        // 3. Logic for what to do when specific buttons are clicked
        if (value === 'C') {
            // Clearing the screen
            display.value='';
            if(statusMessage) statusMessage.textContent ="Cleared! Let's try again.";
        }
        else if (value ==='=') {
            if(display.value ===''){
                if(statusMessage) statusMessage.textCOntent ="You didn't type anything!";
                return;
            }
            try {
                if(display.value.include('/0')) {
                    if(statusMessage) statusMessage.textContent ="Nice try! You can't divide by zero.";
                    display.value ='Error';
                } else {
                    let result = eval(display.value);
                    display.value = result;
                    if (statusMessage) statusMessage.textContent ="Boom! The answer is ${result}.";
                       }
                    }
            catch {
                // If the user types something mathematically impossible (Like 5+/3), show "Error"
                display.value= 'Error';
                if(statusMessage) statusMessage.textContent ="Hmm, that doesn't look like math to me.";
            }
        }
        else {
            if (display.value === 'Error') {
                display.value ='';
            }
            display.value +=value;
        }
    });
});

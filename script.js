const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const statusMessage = document.getElementById('status-message');

buttons.forEach(button => {
    button.addEventListener('click',() => {
        
        const value =button.textContent.trim();

        if (value === 'C') {
            display.value='';
            if(statusMessage) statusMessage.textContent ="Cleared! Let's try again.";
        }
        else if (value === '=') {
            if(display.value ===''){
                if(statusMessage) statusMessage.textContent ="You didn't type anything!";
                return;
            }
            try {
                let mathString = display.value.replace(/\s/g, '');

                const operators = ['+','-','*','/'];
                let lastChar = mathString.slice(-1);
                if (operators.includes(lastChar)) {
                    mathString = mathString.slice(0, -1);
                }

                if(mathString.includes('/0')) {
                    if(statusMessage) statusMessage.textContent ="Nice try! You can't divide by zero.";
                    display.value ='Error';
                } else {
                    let result = eval(mathString);
                    display.value = result;
                    if (statusMessage) statusMessage.textContent ="Boom! The answer is {result}.";
                       }
                    }
            catch (error) {
                display.value= 'Error';
                if(statusMessage) statusMessage.textContent ="Hmm, that doesn't look like math to me.";
            }
        }
        else {
            if (display.value === 'Error') {
                display.value ='';
            }
            const operators = ['+','-','*','/'];
            let lastChar = display.value.slice(-1);
            if (operators.includes(value) && operators.includes(lastChar)) {
                if(statusMessage) statusMessage.textContent="Hey! You can't put two operators in a row.";
                return;
            }
            display.value +=value;
        }
    });
});

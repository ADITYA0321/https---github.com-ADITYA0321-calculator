let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";

Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                input.value = eval(string);
                string = input.value;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML === 'AC') {
            input.value = "";
            string = "";
        } else if (e.target.innerHTML === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
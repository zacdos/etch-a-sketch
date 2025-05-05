let button = document.querySelector('#reset')
let div = document.querySelector('#box');
let number = 16;

button.addEventListener('click', () =>{
    div.innerHTML = ""
    number = prompt('Enter new square pixel length.');
    if (number > 100) {
        alert('Please input number no larger than 100.')
    } else if (isNaN(number)) {
        alert('Please enter a number.')
    } else {
        loadSquares();
    }

})

addEventListener("load", (event) => {
    loadSquares()
})

function loadSquares() {
    for (i = 0; i < number; i++) {
        let newRow = document.createElement('div');
        newRow.id = 'newRow';
        for (j = 0; j < number; j++) {
            let newDiv = document.createElement('div');
            newDiv.id = 'newDiv';
            newRow.appendChild(newDiv)
            newDiv.addEventListener('mouseover', () =>  {
                if (newDiv.style.backgroundColor === "blue") {
                    newDiv.style.backgroundColor = "indigo"
                } else if (newDiv.style.backgroundColor === "green") {
                    newDiv.style.backgroundColor = "blue" 
                } else if (newDiv.style.backgroundColor === "yellow") {
                    newDiv.style.backgroundColor = "green"
                } else if (newDiv.style.backgroundColor === "orange") {
                    newDiv.style.backgroundColor = "yellow"       
                } else if (newDiv.style.backgroundColor === "red") {
                    newDiv.style.backgroundColor = "orange"
                } else {
                    newDiv.style.backgroundColor = "red"
                }
            })
        }
        div.appendChild(newRow);
    }
}

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
            newRow.appendChild(newDiv);
            newDiv.addEventListener('mouseover', (event) =>  {
                if (newDiv.style.opacity === "0.1") {
                    newDiv.style.opacity = "0.2";
                } else if (newDiv.style.opacity === "0.2") {
                    newDiv.style.opacity = "0.3";
                } else if (newDiv.style.opacity === "0.3") {
                    newDiv.style.opacity = "0.4"; 
                } else if (newDiv.style.opacity === "0.4") {
                    newDiv.style.opacity = "0.5";
                } else if (newDiv.style.opacity === "0.5") {
                    newDiv.style.opacity = "0.6";
                } else if (newDiv.style.opacity === "0.6") {
                    newDiv.style.opacity = "0.7";
                } else if (newDiv.style.opacity === "0.7") {
                    newDiv.style.opacity = "0.8";   
                } else if (newDiv.style.opacity === "0.8") {
                    newDiv.style.opacity = "0.9"; 
                } else if (newDiv.style.opacity === "0.9") {
                    newDiv.style.opacity = "1.0";
                } else if (newDiv.style.opacity === "1.0") {
                    newDiv.style.opacity = "1.0";
                } else {
                    newDiv.style.opacity = "0.1"
                }
        })
        div.appendChild(newRow);
    }
}
}
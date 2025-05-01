let div = document.querySelector('#div')
let button = document.querySelector('#dog')

let newDiv = document.createElement('p')

function createPixel() {
    div.appendChild(newDiv)
    
}

button.addEventListener('click', () => {
    createPixel();
})


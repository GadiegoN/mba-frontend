let button = document.querySelector('button')

button.addEventListener('click', count)

function count() {
    let textCount = document.querySelector('h3')
    let value = parseInt(textCount.textContent)
    let newValue = value + 1

    let r = parseInt(Math.random() * 256)
    let g = parseInt(Math.random() * 256)
    let b = parseInt(Math.random() * 256)

    textCount.textContent = newValue
    textCount.style.color = `rgb(${r}, ${g}, ${b})`
}

// Change the text of two buttons to + and - respectively.

let button1 = document.getElementsByTagName('button')[0]
button1.innerHTML ="+"

let button2 = document.getElementsByTagName('button')[1]
button2.innerHTML ="--"

// Change the color of the decrement button to black.

button2.style.color = 'black'

// Create an h1 element and attach it to the html body.

let fragment = new DocumentFragment()

let h1 = document.createElement('h1')

fragment.appendChild(h1)

document.body.appendChild(fragment)

// Create a variable called count and attach it to the created h1 element.

let count = document.querySelector('h1')
count.innerHTML = 0

console.log(count)

// Add event listeners to + & - buttons such that when they are clicked the count increases and decreases respectively.

button1.addEventListener('click', function () {
    count.innerHTML++
})


button2.addEventListener('click', function () {
    count.innerHTML--
})


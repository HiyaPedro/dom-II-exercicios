/*exercise 1*/
//capture parent element
const container = document.getElementById("container")
//create new article item
const newElement = document.createElement("article")
//add text to new article item <article>new article</article>
newElement.textContent = "new article"
//arrow function connected to event in HTML
const adicionaItem = (event) => {
    container.appendChild(newElement)
    newElement.setAttribute('class', 'item')
    console.log(event.target)
    // document.getElementById('botao').remove()
}

const removeItem = (event) => {
    console.log(event.target)
    event.target.remove()
    
}
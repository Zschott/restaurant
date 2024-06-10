function populateHome(){
    const content = document.getElementById('content')

    const homeCard = document.createElement('div')
        homeCard.id = "homeCard"
    const title = document.createElement('div')
        title.classList.add('title')
    const h3 = document.createElement('h3')
        h3.textContent = "Buonasera!"
    const p = document.createElement('p')
        p.textContent = `Welcome to Osteria Fugazi, a totally real restaurant that toally exists! Feel free to click around a little and see what we've got to offer!`

    title.appendChild(h3)
    homeCard.appendChild(title)
    homeCard.appendChild(p)
    content.appendChild(homeCard)
}

export {populateHome};

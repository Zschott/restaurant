const menu = document.createElement('div')
    menu.id = "menuCard"

const content = document.getElementById('content')


function populateMenu(){
    // Chicken sandwhich
    chknSand()
    
    // Pasta
    pasta()

    // Pizza
   pizza()

    content.appendChild(menu)    
}

function chknSand(){
    const chknTitle = document.createElement('p')
        chknTitle.className = 'bold'
        chknTitle.textContent = 'Chicken Sammie - $5'
    const chknDes = document.createElement('ul')
        chknDes.textContent = `Grilled chicken sandwhich with whatever you want on it`
    menu.appendChild(chknTitle)
    menu.appendChild(chknDes)
}

function pasta(){
    const pastaTitle = document.createElement('p')
        pastaTitle.className = 'bold'
        pastaTitle.textContent = 'Pasta - $5'
    const pastaDes = document.createElement('ul')
        pastaDes.textContent = 'Pasta with red or white sauce'
    menu.appendChild(pastaTitle)
    menu.appendChild(pastaDes)
}

function pizza(){
    const pizzaTitle = document.createElement('p')
        pizzaTitle.className = 'bold'
        pizzaTitle.textContent = 'Pizza - $2 / slice'
    const pizzaDes = document.createElement('ul')
        pizzaDes.textContent = `It's just pizza`
    menu.appendChild(pizzaTitle)
    menu.appendChild(pizzaDes)
}

export {populateMenu}
function populateAbout(){
    const content = document.getElementById('content')

    const about = document.createElement('div')
        about.id = "aboutCard"
    
    const title = document.createElement('div')
        title.classList.add('title')
    const h3 = document.createElement('h3')
        h3.textContent = "About Us"
    const p = document.createElement('p')
        p.textContent = `Established in June 2024 as a totally real restaurant, and not just a way to practice Webpack. We're here to bring the most authentic fugazi food straight to you!`

    title.appendChild(h3)
    about.appendChild(title)
    about.appendChild(p)
    content.appendChild(about)
}

export {populateAbout}
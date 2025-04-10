const cards = document.querySelector(".cards")

const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    data.forEach(user => {
        const card = document.createElement('div')
        card.classList.add("card")
        card.innerHTML = `
            <h2>${user.name}</h2>
            <p class="avatar">👤</p>
            <p>📧${user.email}</p>
            <p>📞${user.phone}</p📞>
            <p>🏡${user.address.city} ${user.address.street}</p>
        `
        cards.appendChild(card)
    })
    return data
    
}

fetchData()

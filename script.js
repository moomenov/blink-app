const tg = window.Telegram.WebApp;
tg.expand();

// Foydalanuvchi ismini chiqarish
if (tg.initDataUnsafe?.user) {
    document.getElementById('user-name').innerText = tg.initDataUnsafe.user.first_name;
}

const venues = [
    { id: 1, name: "Blink Arena", price: "150,000", type: "sport" },
    { id: 2, name: "Central Hall", price: "250,000", type: "event" },
    { id: 3, name: "Tennis Club", price: "120,000", type: "sport" }
];

function renderVenues(filter = 'all') {
    const list = document.getElementById('venue-list');
    list.innerHTML = '';
    
    venues.forEach(v => {
        if (filter !== 'all' && v.type !== filter) return;
        
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-content">
                <h3>${v.name}</h3>
                <div class="price">${v.price} so'm / soat</div>
                <button class="book-btn" onclick="booking(${v.id})">Band qilish</button>
            </div>
        `;
        list.appendChild(card);
    });
}

function booking(id) {
    const venue = venues.find(v => v.id === id);
    
    // Botga yuboriladigan ma'lumot obyekti
    const data = {
        venue_name: venue.name,
        price: venue.price,
        action: 'booking'
    };
    
    tg.showConfirm(`${venue.name}ni band qilmoqchimisiz?`, (ok) => {
        if (ok) {
            // MA'LUMOTNI BOTGA YUBORISH
            tg.sendData(JSON.stringify(data));
            tg.close();
        }
    });
}

function filterType(type) {
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    renderVenues(type);
}

renderVenues();

const ideas = [
    {
        id: 1,
        title: "Arhitectura Scalării",
        desc: "Hint-ul suprem despre cum să structurezi operațiunile logistice ale unui eCommerce fără a distruge marginile de profit.",
        price: 190
    },
    {
        id: 2,
        title: "Lumina Conversiei",
        desc: "O perspectivă rară asupra psihologiei clientului care renunță la coșul de cumpărături. Crește rata de conversie cu 40%.",
        price: 250
    },
    {
        id: 3,
        title: "Algoritmul Viralității",
        desc: "Cum să gândești o reclamă asumată pentru publicul de nișă (Hint monetizat, testat pe 100k views).",
        price: 150
    },
    {
        id: 4,
        title: "Retenția Guru",
        desc: "Nu vinde o dată. Vinde de 10 ori. O strategie în 5 pași de email marketing implementată de experți din industrie.",
        price: 320
    }
];

let cart = [];

const ideasContainer = document.getElementById('ideas-container');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartButton = document.getElementById('cart-button');
const closeCart = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');

// Render Ideas
function renderIdeas() {
    ideas.forEach(idea => {
        const card = document.createElement('div');
        card.className = 'idea-card';
        card.innerHTML = `
            <div>
                <h3 class="idea-title">${idea.title}</h3>
                <p class="idea-desc">${idea.desc}</p>
            </div>
            <div class="idea-footer">
                <span class="price">${idea.price} RON</span>
                <button class="buy-btn" onclick="addToCart(event, ${idea.id})">Prinde Ideea</button>
            </div>
        `;
        ideasContainer.appendChild(card);
    });
}

// Add to Cart
window.addToCart = function(event, id) {
    const idea = ideas.find(i => i.id === id);
    if(idea) {
        cart.push(idea);
        updateCartUI();
        
        // Simple visual feedback
        const btn = event.target;
        const originalText = btn.innerText;
        btn.innerText = "Adăugat! ✔️";
        btn.style.background = "var(--accent)";
        btn.style.color = "var(--bg-color)";
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = "transparent";
            btn.style.color = "var(--accent)";
        }, 1500);
    }
}

function updateCartUI() {
    cartCount.innerText = cart.length;
    
    if(cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Coșul este gol. Alege niște idei!</p>';
        totalPriceEl.innerText = '0';
        return;
    }

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <span>${item.title}</span>
            <span>${item.price} RON <span style="cursor:pointer; color:red; margin-left:10px; font-weight:bold;" onclick="removeFromCart(${index})">X</span></span>
        `;
        cartItemsContainer.appendChild(itemEl);
    });

    totalPriceEl.innerText = total;
}

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Modal handling
cartButton.addEventListener('click', () => {
    cartModal.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

// Initialize on Load
renderIdeas();

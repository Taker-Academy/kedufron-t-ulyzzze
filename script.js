const dataApi = fetch('https://api.kedufront.juniortaker.com/item/');

dataApi.then(async (response_data) => {
    const response = await response_data.json();
    try {
        for (let i = 0; i < response.length; i++) {
            const name = response[i].name;
            const price = response[i].price;
            const id = response[i].image;

            const affichage_name = document.querySelector(`#name_${i}`);
            const affichage_price = document.querySelector(`#price_${i}`);
            const affichage_image = document.querySelector(`#image_0${i + 1}`);

            affichage_name.innerHTML = name;
            affichage_price.innerHTML = `${price} €`;

            const image = `<img src="https://api.kedufront.juniortaker.com/item/picture/${id}" class="image_0${i + 1}"></img>`;
            affichage_image.insertAdjacentHTML("afterbegin", image);
        }
    } catch(err){
        console.log(err);
    }
})

//Afficher le panier
let Cart = document.querySelector('.Cart');
let body = document.querySelector('body');
let Close = document.querySelector('.close');

let listProducts = [];
let cart = [];

Cart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

Close.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

//Savoir quelle produit a était cliqué
let listProductHTML = document.querySelector('.home');

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')){
        let product_id = positionClick.parentElement.dataset.id;
        addToCart(product_id);
    }
})

let carts = [];
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.Cart span');

//Ajouter un produti au panier
const addToCart = (product_id) => {
    let product_position_in_cart = carts.findIndex((value) => value.product_id == product_id);
    if (carts.length <= 0){
        carts = [{
            product_id: product_id,
            quantity: 1
        }]
    } else if (product_position_in_cart < 0){
        carts.push({
            product_id: product_id,
            quantity: 1
        })
    } else{
        carts[product_position_in_cart].quantity += 1;
    }
    console.log(carts);
    addCartToHTML();
    addCartToMemory();
}

//Ajouter l'article dans la mémoire (en cours)
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
}

//Afficher un produit au panier
const addCartToHTML = async () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if (carts.length > 0) {
        for (const cart of carts) {
            try {
                totalQuantity = totalQuantity + cart.quantity;
                // Récupérer les données du produit depuis l'API
                const response = await fetch(`https://api.kedufront.juniortaker.com/item/${cart.product_id}`);
                const productData = await response.json();

                const names = productData.name;
                const prices = productData.price;

                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.dataset.id = cart.product_id;

                newCart.innerHTML = `
                <div class="article">
                    <div id="image_${cart.product_id}"></div>
                    <h2 id="names_${cart.product_id}">${names}</h2>
                    <p id="prices_${cart.product_id}">${prices * cart.quantity} €</p>
                    <div class="quantity">
                        <span class="minus">-</span>
                        <span class="qty">${cart.quantity}</span>
                        <span class="plus">+</span>
                    </div>
                </div>
                `;
                listCartHTML.appendChild(newCart);

                const Affichage_name = document.querySelector(`#names_${cart.product_id}`);
                Affichage_name.innerHTML = names;

                // Ajouter l'image du produit
                const affichage_image = document.querySelector(`#image_${cart.product_id}`);
                const image = `<img src="https://api.kedufront.juniortaker.com/item/picture/${cart.product_id}" class="image_0${cart.product_id}"></img>`;
                affichage_image.insertAdjacentHTML("afterbegin", image);
            } catch (error) {
                console.error('Une erreur s\'est produite lors de la récupération des données du produit:', error);
            }
        }
    }
    iconCartSpan.innerText = totalQuantity;
}


//Ajouter | Enlever un ou plusieurs articles grâces aux boutons '>' et '<'
listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantity(product_id, type);
    }
})

const changeQuantity = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        // let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
                break;
        
            default:
                let valueChange = carts[positionItemInCart].quantity - 1;
                if (valueChange > 0) {
                    carts[positionItemInCart].quantity = valueChange;
                }else{
                    carts.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
}

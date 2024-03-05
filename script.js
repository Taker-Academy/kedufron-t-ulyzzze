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

Cart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

Close.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

//Ajouter un produit au panier
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
}

const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    if (carts.length > 0){
        carts.forEach(cart => {
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            let positionProduct = 
            newCart.innerHTML = `
            <div class="article">
                <div id="image_01"></div>
                <h2 id="name_${cart.product_id}" class="name_0"></h2>
                <p id="price_0"></p>
                <div class="quantity">
                    <span class="minus">-</span>
                    <span>${cart.quantity}</span>
                    <span class="plus">+</span>
                </div>
            </div>
            `;
            listCartHTML.appendChild(newCart);
        })
    }
}

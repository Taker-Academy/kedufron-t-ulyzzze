const dataApi = fetch('https://api.kedufront.juniortaker.com/item/');

dataApi.then(async (response_data) => {

    const response = await response_data.json();
    // console.log(response);

    try {
        //Capture des informations des objets
        const name_0 = response[0].name;
        const price_0 = response[0].price;
        const id_0 = response[0].image;
        const name_1 = response[1].name;
        const price_1 = response[1].price;
        const id_1 = response[1].image;
        const name_2 = response[2].name;
        const price_2 = response[2].price;
        const id_2 = response[2].image;
        const name_3 = response[3].name;
        const price_3 = response[3].price;
        const id_3 = response[3].image;
        const name_4 = response[4].name;
        const price_4 = response[4].price;
        const id_4 = response[4].image;
        const name_5 = response[5].name;
        const price_5 = response[5].price;
        const id_5 = response[5].image;

        // const copy_name_0 = response[0].name;
        // const copy_price_0 = response[0].price;
        // const copy_id_0 = response[0].image;
        // const copy_name_1 = response[1].name;
        // const copy_price_1 = response[1].price;
        // const copy_id_1 = response[1].image;

        //Affichage des textes
        const affichage_name_0 = document.querySelector("#name_0")
        const affichage_price_0 = document.querySelector("#price_0");
        const affichage_image_01 = document.querySelector("#image_01");
        const affichage_name_1 = document.querySelector("#name_1")
        const affichage_price_1 = document.querySelector("#price_1");
        const affichage_image_02 = document.querySelector("#image_02");
        const affichage_name_2 = document.querySelector("#name_2")
        const affichage_price_2 = document.querySelector("#price_2");
        const affichage_image_03 = document.querySelector("#image_03");
        const affichage_name_3 = document.querySelector("#name_3")
        const affichage_price_3 = document.querySelector("#price_3");
        const affichage_image_04 = document.querySelector("#image_04");
        const affichage_name_4 = document.querySelector("#name_4")
        const affichage_price_4 = document.querySelector("#price_4");
        const affichage_image_05 = document.querySelector("#image_05");
        const affichage_name_5 = document.querySelector("#name_5")
        const affichage_price_5 = document.querySelector("#price_5");
        const affichage_image_06 = document.querySelector("#image_06");
    
        // const copy_affichage_name_0 = document.querySelector("#copy_name_0")
        // const copy_affichage_price_0 = document.querySelector("#copy_price_0");
        // const copy_affichage_image_01 = document.querySelector("#copy_image_01");
        // const copy_affichage_name_1 = document.querySelector("#copy_name_1")
        // const copy_affichage_price_1 = document.querySelector("#copy_price_1");
        // const copy_affichage_image_02 = document.querySelector("#copy_image_02");

        //Assignation de la valeur
        affichage_name_0.innerHTML = name_0;
        affichage_price_0.innerHTML = price_0 + " €";
        affichage_name_1.innerHTML = name_1;
        affichage_price_1.innerHTML = price_1 + " €";
        affichage_name_2.innerHTML = name_2;
        affichage_price_2.innerHTML = price_2 + " €";
        affichage_name_3.innerHTML = name_3;
        affichage_price_3.innerHTML = price_3 + " €";
        affichage_name_4.innerHTML = name_4;
        affichage_price_4.innerHTML = price_4 + " €";
        affichage_name_5.innerHTML = name_5;
        affichage_price_5.innerHTML = price_5 + " €";

        // copy_affichage_name_0.innerHTML = copy_name_0;
        // copy_affichage_price_0.innerHTML = copy_price_0 + " €";
        // copy_affichage_name_1.innerHTML = copy_name_1;
        // copy_affichage_price_1.innerHTML = copy_price_1 + " €";

        //Affichage des images
        const image_01 = `<img src="https://api.kedufront.juniortaker.com/item/picture/${id_0}" class="image_01"></img>`;
        const image_02 = `<img src="https://api.kedufront.juniortaker.com/item/picture/${id_1}" class="image_02"></img>`;
        const image_03 = `<img src="https://api.kedufront.juniortaker.com/item/picture/${id_2}" class="image_03"></img>`;
        const image_04 = `<img src="https://api.kedufront.juniortaker.com/item/picture/${id_3}" class="image_04"></img>`;
        const image_05 = `<img src="https://api.kedufront.juniortaker.com/item/picture/${id_4}" class="image_05"></img>`;
        const image_06 = `<img src="https://api.kedufront.juniortaker.com/item/picture/${id_5}" class="image_06"></img>`;

        // const copy_image_01 = `<img src="https://api.kedufront.juniortaker.com/item/picture/${id_0}" class="image_01"></img>`;
        // const copy_image_02 = `<img src="https://api.kedufront.juniortaker.com/item/picture/${id_1}" class="image_02"></img>`;

        affichage_image_01.insertAdjacentHTML("afterbegin", image_01)
        affichage_image_02.insertAdjacentHTML("afterbegin", image_02)
        affichage_image_03.insertAdjacentHTML("afterbegin", image_03)
        affichage_image_04.insertAdjacentHTML("afterbegin", image_04)
        affichage_image_05.insertAdjacentHTML("afterbegin", image_05)
        affichage_image_06.insertAdjacentHTML("afterbegin", image_06)

        // copy_affichage_image_01.insertAdjacentHTML("afterbegin", copy_image_01)
        // copy_affichage_image_02.insertAdjacentHTML("afterbegin", copy_image_02)
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
                <div class="image"></div>
                <h2 class="name"></h2>
                <p class="price"></p>
                <div class="quantity">
                    <span class="minus">-</span>
                    <span>${cart.quantity}</span>
                    <span class="plus">+</span>
                </div>
            </div>
            `;
            listCartHTML.appendChild(newCart);

            const copy_name = cart.name;
            const copy_price = cart.price;
            const copy_id = cart.image;

            const copy_affichage_name = newCart.querySelector(".name");
            const copy_affichage_price = newCart.querySelector(".price");
            const copy_affichage_image = newCart.querySelector(".image");

            copy_affichage_name.innerHTML = copy_name;
            copy_affichage_price.innerHTML = copy_price + " €";
            copy_affichage_image.innerHTML = `<img src="https://api.kedufront.juniortaker.com/item/picture/${copy_id}" class="image_01"></img>`;
        })
    }
}
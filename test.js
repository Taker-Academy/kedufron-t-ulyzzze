const newPage = (productId) => {
    // Interroger l'API pour récupérer les données du produit
    fetch(`https://api.kedufront.juniortaker.com/item/${productId}`)
        .then(response => response.json())
        .then(data => {
            // Créer un élément div pour la nouvelle page
            const newPageDiv = document.createElement('div');
            newPageDiv.classList.add('oneItemPage');
            newPageDiv.dataset.id = productId;

            // Remplir les éléments avec les données du produit
            newPageDiv.innerHTML = `
                <div class="bigarticle">
                    <div id="image_${productId}"></div>
                    <h2 id="names_${productId}"></h2>
                    <p id="description_${productId}">${data.item.description}</p>
                    <p id="creation">Crée en : ${data.item.createdIn}</p>
                    <p id="prices_${productId}">${data.item.price} €</p>
                    <button class="addCart">Ajouter au panier</button>
                </div>
            `;

            // Ajouter la nouvelle page à la page principale
            document.body.innerHTML = ''; // Effacer le contenu existant
            document.body.appendChild(newPageDiv); // Ajouter la nouvelle page à la page principale
            const affichage_image = document.querySelector(`#image_${productId}`);
            const image = `<img src="https://api.kedufront.juniortaker.com/item/picture/${productId}" class="bigimage"></img>`;
            affichage_image.insertAdjacentHTML("afterbegin", image);


            const name = data.item.name;
            const affichage_name = document.querySelector(`#names_${productId}`);
            affichage_name.innerHTML = name;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données du produit :', error);
        });
}

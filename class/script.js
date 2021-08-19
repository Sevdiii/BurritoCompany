let basket = new Basket();
Basketproducts = [];


function loadtheProducts() {


    for (let i = 0; i < Products.length; i++) {

        document.getElementById('list-of-products').innerHTML += ` 
        <div class="main-container">
        <div class="buy-container">
            <div class="products">
                <div class="product-pic">
                    <img src="${Products[i].img}" alt="">
                </div>
            </div>
            <div class="product-info">
                <h3>${Products[i].name}</h3>
                
                <p>Quantity: ${Products[i].ingredients}</p>
                <div class="priceandquan">
                <input id="input-quant" type="number">
                Price: <span>${Products[i].price}</span>€
               </div>
               <button onclick="addtoBasket()" class="add-basket">Add to Basket</button>
            </div>

         
        </div>
     

        `

    }
}

function addtoBasket() {

    Basketproducts.push(Products);

    for (let i = 0; i < Basketproducts.length; i++) {


        document.getElementById('basket').innerHTML += `
    <h3>Ihr Warenkorb</h3>

    <div class="product-basket">
        <div class="product-info">
            <span>
                <p> x</p>
                <p>${Basketproducts[i].name}</p>
            </span>
        </div>
        <div class="product-price">
            <span>
                <button>-</button> <button>+</button> <p>8,00 €</p> <button>del</button>
            </span>
        </div>
    </div>
</div>`
    }


}
let basket = new Basket();



function loadtheProducts() {


    for (let i = 0; i < products.length; i++) {

        document.getElementById('list-of-products').innerHTML += ` 
        <div  class="main-container">
        <div class="buy-container">
            <div class="products">
                <div class="product-pic">
                    <img src="${products[i].img}" alt="">
                </div>
            </div>
            <div class="product-info">
                <h3 >${products[i].name}</h3>
                
                <p>Quantity: ${products[i].ingredients}</p>
                <div class="priceandquan">
                <input id="input-quant" type="number">
                Price: <span>${products[i].price}</span>€
               </div>
               <button onclick="addtoBasket(0)" class="add-basket">Add to Basket</button>
            </div>

         
        </div>
     

        `

    }
}

function addtoBasket(index) {


    basket.products.push;
    basket.render(index);




}
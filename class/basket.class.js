class Basket {

    products = []


    render(index) {

        document.getElementById('basket').innerHTML += `< h3 > Ihr Warenkorb </h3>`
        for (let i = 0; i < products.length; i++) {


            document.getElementById('basket' + index).innerHTML += `
        
    
        <div class="product-basket">
            <div class="product-info">
                <span>
                    <p> x</p>
                    <p>${products[i].name}</p>
                </span>
            </div>
            <div class="product-price">
                <span>
                    <button>-</button> <button>+</button> <p>${products[i].price} €</p> <button>del</button>
                </span>
            </div>
        </div>
    </div>`;
        }

    }
}
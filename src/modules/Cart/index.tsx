export class LocalCart {
    public totalPrice: number;


    constructor() {
        this.totalPrice = 0;
    }

    //get cart from local storage
    public getCart() {
        let cart = localStorage.getItem("cart");
        if (cart) {
            let cartArray = JSON.parse(cart);
            return cartArray;
        } else {
            localStorage.setItem("cart", JSON.stringify([]));
            return [];
        }
    }

    //get total price from local storage
    public getTotalPrice() {
        let cart = localStorage.getItem("cart");
        if (cart) {
            let cartArray = JSON.parse(cart);
            let total = 0;
            cartArray.forEach((cartItem: any) => {
                total += cartItem.price * cartItem.quantity;
            });
            return total;
        } else {
            return 0;
        }
    }

    //remove from local storage
    public removeFromCart(id: number) {
        let cart = localStorage.getItem("cart");
        if (cart) {
            let cartArray = JSON.parse(cart);
            let filteredCart = cartArray.filter((cartItem: any) => {
                return cartItem.id !== id;
            });
            localStorage.setItem("cart", JSON.stringify(filteredCart));
            return filteredCart;
        }
    }

    //add quantity
    public addQuantity(id: number) {
        let cart = localStorage.getItem("cart");
        if (cart) {
            let cartArray = JSON.parse(cart);
            cartArray.forEach((cartItem: any) => {
                if (cartItem.id === id) {
                    cartItem.quantity += 1;
                }
            });
            localStorage.setItem("cart", JSON.stringify(cartArray));
            return cartArray;
        }
    }

    //remove quantity
    public removeQuantity(id: number) {
        let cart = localStorage.getItem("cart");
        if (cart) {
            let cartArray = JSON.parse(cart);
            cartArray.forEach((cartItem: any) => {

                if (cartItem.id === id) {
                    if (cartItem.quantity > 1) {
                        cartItem.quantity -= 1;        
                    }
                }
            });
            localStorage.setItem("cart", JSON.stringify(cartArray));
            return cartArray;
        }
    }

    //clear cart
    public clearCart() {
        localStorage.setItem("cart", JSON.stringify([]));
    }

    
}
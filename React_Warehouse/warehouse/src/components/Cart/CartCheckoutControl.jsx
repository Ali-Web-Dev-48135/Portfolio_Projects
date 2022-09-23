import React from "react";


import Button from "../UIElements/Button";

const CartCheckoutControl = props => {

    return(
        <footer className={props.className['cart-checkout-controls']}>
            <span>Total :${props.price}</span>
            <Button className={props.className['cart-btn']}>Submit</Button>
        </footer>
    )


}

export default CartCheckoutControl;
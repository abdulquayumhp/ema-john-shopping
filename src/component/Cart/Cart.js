

import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h4>Order Sumary</h4>
                <p>Selecter Item : {cart.length}</p>
        </div>
    );
};

export default Cart;
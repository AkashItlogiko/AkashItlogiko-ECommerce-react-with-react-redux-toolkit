import React from 'react';

const Order = ({order}) => {
    return (
        <div>
            <h2>Thank you for your order</h2>
            <p>Your Order has been placed successfully you will recivied an email confirmation shortly </p>
            <div>
                <h3>Order Summary</h3>
                <p>Order Number:{order.orderNumber}</p>
            </div>
        </div>
    );
};

export default Order;
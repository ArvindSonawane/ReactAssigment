import React from "react";
import "./Cart.css";


const Cart=({ cartItems,handleRemoveProduct})=>{
     return(
        <div className="cart-items">
            <div className="cart-items-header">Cart items</div>
           
           
            {cartItems.length === 0 && (
            <div className="cart-items-empty">Cart Is Empty</div>
            )}
            <div>
            {cartItems.map((item)=>(
             <div key={item.id} className="cart-items-list">
                <img 
                className="cart-items-image"
                src={item.image}
                alt={item.name}
                />
            <div className="cart-items-name">{item.name}</div>
            <div className="cart-items-price"> Rs.{item.price}</div>
            <div className="cart-items-function">
            <button className="product-remove-button"
                 onClick={()=>handleRemoveProduct(item)}>
                    Remove
                    </button>
            </div>
             </div>

            ))}
        </div>
        </div>
     );
    

 };
export default Cart;

import React from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import {  Route} from 'react-router-dom';

 const Routes=({productItems,cartItems,handleAddProduct, handleRemoveProduct})=>{
    return(
    
        <div>
        
            <Route path="/" exact>
                <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
                
            </Route>
            <Route  path="/cart" exact>
                <Cart cartItems={cartItems} 
                handleAddProduct={handleAddProduct}
                 handleRemoveProduct={ handleRemoveProduct}/>
               
            </Route>
          </div>
              
    );
 };

 export default Routes;
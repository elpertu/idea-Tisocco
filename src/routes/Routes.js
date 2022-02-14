import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Cart from "../components/Cart";
import ItemDetail from "../components/ItemDetail";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";
import NotFound from "../components/NotFound";


const Routes =()=> {
  return (
    <BrowserRouter>
        <NavBar/>
        <Switch>
        <Route exact path="/" element={<ItemListContainer/>}/>        
        <Route exact path="/cart" element={<Cart/>}/>        
        <Route exact path="/category/:idCategory" element={<ItemListContainer/>}/>      
        <Route exact path="/detail/:idDetail" element={<ItemDetail/>}/>  
        <Route exact path="/*" element={<NotFound/>}/>  
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;
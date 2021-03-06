import React from 'react';
import {Nav} from "react-bootstrap";
import cartSVG from "./ShopCart.svg"

const CartWidget = () => {
	return (
		<Nav
			className="d-flex"
			navbarScroll
		>
				<Nav.Link>
				<img class="cartWidget" src={cartSVG} alt="Carrito de compras"/>
				<div class="notifCartWidget" >0</div>
				</Nav.Link>
		</Nav>
	)
};

export default CartWidget;
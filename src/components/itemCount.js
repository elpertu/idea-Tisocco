import { Card, Button } from "react-bootstrap";
import React, {useState} from 'react';

const ItemCount = ({stock}) => {
	const [orderQty, setOrderQty] = useState(0);
	
	const minusOrder = () => {
		if (orderQty <= 0) return;
		setOrderQty(orderQty-1);
	}
	
	const moreOrder = () => {
		if (orderQty >= stock) return;
		setOrderQty(orderQty+1);
	}
	
	return(
		<Card.Footer>
			<Card.Text>
				<Button variant="outline-primary" onClick={minusOrder}>-</Button>
				<span class="btn">{orderQty}</span>
				<Button variant="outline-primary" onClick={moreOrder}>+</Button>
			</Card.Text>
			<Button variant="primary">Añadir al Carrito</Button>
		</Card.Footer>
	)
};

export default ItemCount;
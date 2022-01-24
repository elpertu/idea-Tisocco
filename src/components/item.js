import { Card, Button } from "react-bootstrap";

const Item = ({item}) => {
	return(
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={item.src}/>
			<Card.Body>
			  <Card.Title>{item.nombre}</Card.Title>
			  <Button variant="primary">Añadir al Carrito</Button>
			</Card.Body>
		</Card>
	)
};

export default Item;
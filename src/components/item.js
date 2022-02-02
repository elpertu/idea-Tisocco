import { Card, Button } from "react-bootstrap";
import ItemCount from './itemCount';

const Item = ({item, setSelectedProducts}) => {
	
	const selectedProducts = () => setSelectedProducts(item);
	
	return(
		<Card style={{ width: '18rem' }}>
			<Card.Header>
				<Card.Title>{item.nombre}</Card.Title>
			</Card.Header>
			<Card.Body>
				<Card.Img variant="top" src={item.src}/>
				<Card.Subtitle className="mb-2 text-muted">
					Disponibles:{item.stock}
				</Card.Subtitle>
				<Card.Subtitle>
					{item.descripcion}
				</Card.Subtitle>
			</Card.Body>
			<ItemCount stock={item.stock}/>
		</Card>
	)
};

export default Item;
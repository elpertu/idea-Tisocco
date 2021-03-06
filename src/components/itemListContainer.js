import Item from "./item";
import {productsAPI} from "../helpers/promises";
import React, { useState, useEffect } from 'react';

const ItemListContainer = () => {
	const [items, setItems] = useState([]);
	
	 const [loading, setLoading] = useState(true);
	 
	const [errorMessage, setErrorMessage] = useState("")
	
	useEffect(() => {
		getProducts();
	},[])
	
	const getProducts = async () => {
		try{
			const result = await productsAPI;
			setItems(result);
		}catch(error){
			console.log(error)
		}finally{
			setLoading(false);
			console.log("finally")
		}
	}
	
 	if(loading){
		return (
			<div role="region" aria-label="Code Example" class="ReactPlayground-StyledExample-module--cls2--Z1-mo ReactPlayground-StyledExample-module--cls1--2oYwU bs-example ReactPlayground-StyledExample-module--show-code--rW9o2">
				<div>
					<div className="d-flex justify-content-around ">
						<h1>Espere, cargando...</h1>;
					</div>
				</div>
			</div>
		)
	} 
	 
	return(
		<div role="region" aria-label="Code Example" class="ReactPlayground-StyledExample-module--cls2--Z1-mo ReactPlayground-StyledExample-module--cls1--2oYwU bs-example ReactPlayground-StyledExample-module--show-code--rW9o2">
		<div>
		<div className="d-flex justify-content-around ">
			{items.map(item =>(
				<Item item={item} key={item.id}/>
			))}
		</div>
		</div>
		</div>
	)
};

export default ItemListContainer



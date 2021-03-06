import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";

const ItemDetail = ()=> {
  const {products} = useProducts();
  const {idDetail} = useParams()

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (products.length > 0){
      const selectedProduct = products.find((product)=> product.id === idDetail);
      setSelectedItem(selectedProduct);
    };  
    
  }, [products]);
  console.log(selectedItem)
  return (
    <div className="container contentProduct d-flex align-items-center">
      <h3>Producto seleccionado</h3>
      <div className="imagenProducto col-md-4 ">{selectedItem && selectedItem.imagen && (
        <img src={selectedItem.imagen} alt="selectedItemImage" />
      )}</div>
      <div className="col-md-8">
      <li className="itemListProducts">{selectedItem && selectedItem.name}</li>
      <li className="itemListProducts">{selectedItem && selectedItem.description}</li>     
      <li className="itemListProducts">Cantidad seleccionada:  </li>
      </div>            
    </div>
  )
  

 
  
};

export default ItemDetail;
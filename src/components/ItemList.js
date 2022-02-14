import Item from "./Item";

const ItemList = ({products}) => {
  return (
    <div>
        {products?.map(p => <Item key={p.id} p={p}/>)}
        
      
    </div>
  )
}

export default ItemList
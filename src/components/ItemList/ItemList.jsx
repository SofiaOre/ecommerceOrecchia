import Item from '../Item/Item';

const ItemList = ({products}) => {
  return (
   
    <div>
    <section 
    className="itemList"> 
      { products.map(product => <Item key={product.id} product={product}/>)}
    </section>
    
    </div>
  )
}

export default ItemList


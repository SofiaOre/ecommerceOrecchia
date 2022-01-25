import {useState, useEffect, memo} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loading from '../../assets/loading.jpg';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Prod from '../Prod/Prod';


const ItemListContainer = memo(({nameCategory, greetings}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {idCategory} = useParams();

  useEffect(() => {
    const db = getFirestore();
    if(idCategory) {
      const queryProducts = query(collection(db, 'Item'), where('category', '==', idCategory));
      getDocs(queryProducts)
      .then(resp => { setProducts( resp.docs.map(product => ({id: product.id, ...product.data()}))); 
      setLoading(false); })
    } else {
      const queryProducts = collection(db, 'Item');
      getDocs(queryProducts)
      .then(resp => { setProducts( resp.docs.map(product => ({id: product.id, ...product.data()})) ); 
      setLoading(false); })
    }
  }, [idCategory]);
  
  if (idCategory === 'Mate') {
    nameCategory = 'Mate';}
      if (idCategory === 'Accesorios') {
    nameCategory = 'Accesorios';
   
  } else if (idCategory === 'Termos') {
    nameCategory = 'Termos';
    
  }
  return (
    <main>
      
    <Prod/>
      
     
     
      {loading ? 
      <img src={Loading} alt="Cargando" className="loading"/>
      : 
      
      <ItemList 
      products={products}
      
      
      />}
      
    </main>
  )
  } )

export default ItemListContainer;


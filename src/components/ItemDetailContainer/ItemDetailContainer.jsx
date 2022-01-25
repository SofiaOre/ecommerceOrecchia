import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from '../../assets/loading.jpg';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const {idProd} = useParams();
  
  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, `Item/${idProd}`);
    getDoc(queryProduct).then(resp => {
      setProduct({id: resp.id, ...resp.data()}); 
      setLoading(false);
    })
  }, [idProd]);
  
  return (
    <section className="sectionDetail">
      {loading ? <img src={Loading} alt="loading" className="loading"/> 
      : 
      <ItemDetail product={product}/>}
    </section>
  )
}

export default ItemDetailContainer
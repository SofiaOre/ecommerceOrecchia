import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import CartContextProvider from './context/CartContext';
import Checkout from './components/Checkout/Checkout';
import History from './components/History/History';
import WhatsApp from './components/WhatsApp/WhatsApp';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header/>
        <Routes>
           <Route path="/" element={<Home greetings="Bienvenido a Endor!"/>}/>
           <Route path="/History" element={<History/>}/>
          <Route  
            path="/all" 
            element={<ItemListContainer />}/>
                      <Route  
            path="/category/:idCategory" 
            element={<ItemListContainer/>}/>
          <Route  
            path="/details/:idProd"
            element={<ItemDetailContainer/>}/>
          <Route  
            path="/cart" 
            element={<Cart/>}/>
           <Route path="/Checkout" element={<Checkout/>}/>
        </Routes>
        <WhatsApp />
        <Footer/>
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
import './App.css';
import ProductList from './components/ProductList';
import CartProductList from './components/CartProductList';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HeaderComp from './components/HeaderComp';

function App() {
  return (<BrowserRouter>
  <div className="App">
     <HeaderComp/>
  <Routes>
    <Route path='product' element={<ProductList/>}/>
    <Route path='cart' element={<CartProductList/>}/>
    <Route path='/*' element={<ProductList/>}/>
  </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

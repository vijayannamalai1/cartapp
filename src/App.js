import logo from './logo.svg';
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
    <Route path='/' element={<ProductList/>}/>
    <Route path='/cart' element={<CartProductList/>}/>
  </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function App() {

const {user} = useSelector(state=> state.user)
console.log(user)

  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/signup' element={ <Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/home' element={user? <Home />: <Navigate to='/login' />}></Route>
            <Route path='/cart' element={user? <Cart />: <Navigate to='/login' />}></Route>
            <Route path='/feed' element={user? <ProductList />: <Navigate to='/login' />}></Route>
          </Routes>
          </div>
    </ BrowserRouter>
    
  );
}

export default App;

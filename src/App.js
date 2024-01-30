import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Feed from './pages/Feed';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/signup' element={ <Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/feed' element={<Feed />}></Route>
          </Routes>
          </div>
    </ BrowserRouter>
    
  );
}

export default App;

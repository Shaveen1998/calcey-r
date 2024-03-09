import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/reducers/cartSlice';
import { setProducts } from '../redux/reducers/productSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        dispatch(setProducts(response.data));
      })
      .catch(error => {
        console.log('Error fetching products:', error);
      });
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart')
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span>{product.title} - ${product.price}</span>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

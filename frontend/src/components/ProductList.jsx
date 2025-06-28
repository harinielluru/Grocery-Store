import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products') // Make sure your backend is running on this URL
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="p-6">
      {/* <h2 className="text-2xl font-bold mb-4">Available Products</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow">
            <img
              src={`http://localhost:5000/images/${product.coverImage}`}
              alt={product.name}
              className="w-full h-52 object-contain object-center p-2 bg-white"
            />

            <h3 className="text-lg font-semibold" test-align="center">{product.name}</h3>
            <p text-align="center">Category: {product.category}</p>
            <p text-align="center">Price: ₹{product.newPrice}</p>
            {/* <p>Quantity: {product.quantity}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

import React from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data';

const Products = () => {
  return (
    <div>
      <h2>Products</h2>
      <div className="products-container">
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

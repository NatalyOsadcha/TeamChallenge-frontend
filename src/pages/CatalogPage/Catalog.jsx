import React, { useState } from 'react';
import ProductFilter from './ProductsFiltr';
import products from './catalogList';

function ContactList() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterSelect = (type) => {
    if (type === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.type === type);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <h2>Список продуктов</h2>
      <ProductFilter products={products} onSelect={handleFilterSelect} />
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Ціна: ${product.price}</p>
            <img src={product.imageUrl} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;

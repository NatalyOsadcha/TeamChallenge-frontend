import React, { useState } from 'react';

function ProductFilter({ products, onSelect }) {
  const [selectedType, setSelectedType] = useState('all');

  const handleSelectChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);
    onSelect(type);
  };

  return (
    <div>
      <label htmlFor="productType">Фильтр по типу:</label>
      <select id="productType" value={selectedType} onChange={handleSelectChange}>
        <option value="all">Все</option>
        <option value="помідори">Помидори</option>
        <option value="яблука">Яблука</option>
        <option value="черешня">Черешня</option>
      </select>
    </div>
  );
}

export default ProductFilter;

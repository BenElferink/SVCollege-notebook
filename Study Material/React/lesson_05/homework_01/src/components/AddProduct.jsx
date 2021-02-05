import React, { useState } from 'react';

function AddProduct(props) {
  const [product, setProduct] = useState('Air Conditioner');

  const handleNewProduct = () => {
    if (props.room.products.length < 5) {
      switch (product) {
        case 'Air Conditioner':
          props.addProduct({ type: product, active: false }, props.index);
          break;

        case 'Boiler':
          if (props.room.type === 'Bathroom') {
            props.addProduct({ type: product, active: false }, props.index);
          } else {
            window.alert("Boiler is restricted to bathroom's only!");
          }
          break;

        case 'Lamp':
          props.addProduct({ type: product, active: false }, props.index);
          break;

        case 'Stereo System':
          let newArray = props.room.products.filter(
            (product) => product.type === 'Stereo System'
          );
          if (newArray.length === 0) {
            props.addProduct({ type: product, active: false }, props.index);
          } else {
            window.alert('Stereo can be used only once per room!');
          }
          break;

        default:
          break;
      }
    } else {
      window.alert('You have reached the 5 products limit for this room.');
    }
  };

  return (
    <div className='add-product'>
      <label>
        Choose a product:
        <select
          value={product}
          onChange={(e) => {
            setProduct(e.target.value);
          }}>
          <option>Air Conditioner</option>
          <option>Boiler</option>
          <option>Lamp</option>
          <option>Stereo System</option>
        </select>
      </label>
      <button onClick={handleNewProduct}>Add</button>
    </div>
  );
}

export default AddProduct;

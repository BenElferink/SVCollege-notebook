import React, { useState } from 'react';
import AddProduct from './AddProduct';
import LinkBtn from './LinkBtn';

function Room(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='room'>
      <p>
        <span>Room name:</span> {props.room.name}
      </p>
      <p>
        <span>Room type:</span> {props.room.type}
      </p>

      <div className='products'>
        {props.room.products.map((product, i) => (
          <div
            className='product'
            style={{ backgroundColor: product.active ? 'lime' : 'tomato' }}
            onClick={() => {
              props.toggleProduct(props.index, i);
            }}
            key={i}>
            {product.type}
          </div>
        ))}
      </div>

      {toggle ? (
        <AddProduct
          room={props.room}
          addProduct={props.addProduct}
          index={props.index}
        />
      ) : (
        <button
          onClick={() => {
            setToggle(!toggle);
          }}>
          Add Product
        </button>
      )}

      <LinkBtn to='/' txt='Back' className='home-btn' />
    </div>
  );
}

export default Room;

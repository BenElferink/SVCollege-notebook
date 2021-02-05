import React from 'react';

function DisplayVehicle(props) {
  return (
    <div>
      {props.list.map((car, i) => (
        <div
          key={i}
          className='vehicle'
          style={{
            backgroundColor: car.color,
            color: car.color === 'black' || car.color === 'Black' ? 'white' : 'black',
          }}>
          {/* <h3>Car #{i + 1}</h3> */}
          <h2>Type: {car.type}</h2>
          <h3>Color: {car.color}</h3>
        </div>
      ))}
    </div>
  );
}

export default DisplayVehicle;

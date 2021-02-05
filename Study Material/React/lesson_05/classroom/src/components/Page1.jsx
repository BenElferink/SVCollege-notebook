import React from 'react';

function Page1(props) {
  return (
    <div className='page'>
      <p>Page 1</p>
      {props.name}
    </div>
  );
}

export default Page1;

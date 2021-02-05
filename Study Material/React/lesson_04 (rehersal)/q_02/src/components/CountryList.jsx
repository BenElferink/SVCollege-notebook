import React from 'react';
import Country from './Country';

function CountryList(props) {
  return (
    <div className='list-group'>
      <ul>
        {props.list.map((country, i) => (
          <Country key={i}>{country}</Country>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;

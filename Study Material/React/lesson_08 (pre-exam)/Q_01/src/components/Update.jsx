import React from 'react';
import { Link } from 'react-router-dom';

function Update({ internalState }) {
  const [allCurrencies, setAllCurrencies] = internalState;
  const [inpType, setInpType] = React.useState('');
  const [inpValue, setInpValue] = React.useState('');

  const clickUpdate = () => {
    let validateInpType = () => {
      let copyOfInpType = inpType;
      copyOfInpType = copyOfInpType.toLowerCase();
      for (let i = 0; i < copyOfInpType.length; i++) {
        if ((copyOfInpType.charAt(i) >= 'a' && copyOfInpType.charAt(i) <= 'z') || copyOfInpType.charAt(i) === ' ') {
          continue;
        } else {
          return false;
        }
      }
      return true;
    };

    if (validateInpType()) {
      let typeExists = false,
        existIndex;
      let copyOfInpType = inpType;
      copyOfInpType = copyOfInpType.toLowerCase();

      allCurrencies.forEach((item, i) => {
        let currentType = item.type;
        currentType = currentType.toLowerCase();
        if (copyOfInpType === currentType) {
          typeExists = true;
          existIndex = i;
        }
      });

      if (typeExists) {
        let copyOfAllCurrencies = [...allCurrencies];
        copyOfAllCurrencies[existIndex].value = inpValue;
        setAllCurrencies(copyOfAllCurrencies);
      } else {
        let copyOfAllCurrencies = [...allCurrencies];
        copyOfAllCurrencies.push({
          type: inpType,
          value: inpValue,
        });
        setAllCurrencies(copyOfAllCurrencies);
      }
    } else {
      window.alert('Type must contain English letters!');
    }
  };

  return (
    <div>
      <h1>Update</h1>

      <table>
        <thead>
          <tr>
            <td>TYPE</td>
            <td>VALUE</td>
          </tr>
        </thead>
        <tbody>
          {allCurrencies.map((item, i) => (
            <tr key={i}>
              <td>{item.type}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td>Type</td>
            <td>
              <input
                type='text'
                value={inpType}
                onChange={(e) => {
                  setInpType(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>New value</td>
            <td>
              <input
                type='number'
                value={inpValue}
                onChange={(e) => {
                  setInpValue(e.target.value);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div className='controls'>
        <Link to='/'>
          <button>Back</button>
        </Link>
        <button disabled={inpType !== '' && inpValue !== '' ? false : true} style={{ cursor: inpType !== '' && inpValue !== '' ? 'pointer' : 'not-allowed' }} onClick={clickUpdate}>
          Update
        </button>
      </div>
    </div>
  );
}

export default Update;

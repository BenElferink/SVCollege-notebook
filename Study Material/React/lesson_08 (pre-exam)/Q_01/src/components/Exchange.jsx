import React from 'react';
import { Link } from 'react-router-dom';

function Exchange({ allCurrencies, exchangeHistory, setExchangeHistory }) {
  const [inp, setInp] = React.useState(0);
  const [currencyFrom, setCurrencyFrom] = React.useState('Shekel');
  const [currencyTo, setCurrencyTo] = React.useState('US Dollar');
  const [viewExchangeList, setViewExchangeList] = React.useState(false);

  const doExchange = () => {
    if (inp !== '') {
      let valueOfCurrencyFrom, valueOfCurrencyTo;

      allCurrencies.forEach((currency) => {
        if (currency.type === currencyFrom) {
          valueOfCurrencyFrom = currency.value;
        } else if (currency.type === currencyTo) {
          valueOfCurrencyTo = currency.value;
        }
      });

      let exRate = valueOfCurrencyFrom / valueOfCurrencyTo;
      let res = inp * exRate;
      window.alert(`${inp} ${currencyFrom} = ${res} ${currencyTo}`);

      let copyOfExchangeHistory = [...exchangeHistory];
      copyOfExchangeHistory.push({
        fromType: currencyFrom,
        fromValue: inp,
        toType: currencyTo,
        toValue: res,
      });
      setExchangeHistory(copyOfExchangeHistory);
    } else {
      window.alert('Please insert a number to exchange');
    }
  };

  const removeItemFromHistory = (index) => {
    let copyOfExchangeHistory = [...exchangeHistory];
    copyOfExchangeHistory.splice(index, 1);
    setExchangeHistory(copyOfExchangeHistory);
  };

  return (
    <div>
      <h1>Exchange</h1>

      <table>
        <tbody>
          <tr>
            <td>From:</td>
            <td>
              <select
                value={currencyFrom}
                onChange={(e) => {
                  setCurrencyFrom(e.target.value);
                }}>
                {allCurrencies.map((currency, i) => (
                  <option key={i} value={currency.type}>
                    {currency.type}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <input
                type='number'
                value={inp}
                onChange={(e) => {
                  setInp(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>To:</td>
            <td>
              <select
                value={currencyTo}
                onChange={(e) => {
                  setCurrencyTo(e.target.value);
                }}>
                {allCurrencies.map((currency, i) => (
                  <option key={i} value={currency.type}>
                    {currency.type}
                  </option>
                ))}
              </select>
            </td>
            <td />
          </tr>
          <tr>
            <td />
            <td />
            <td>
              <button style={{ width: '100%' }} onClick={doExchange}>
                start
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className='controls'>
        <Link to='/update'>
          <button>Update</button>
        </Link>
        <button>
          <a href='https://www.facebook.com' target='blank'>
            Share on FACEBOOK
          </a>
        </button>
        <button
          onClick={() => {
            setViewExchangeList(!viewExchangeList);
          }}>
          View your exchange list
        </button>
      </div>

      {viewExchangeList && (
        <div className='history-parent'>
          {exchangeHistory.map((item, i) => (
            <div key={i} className='history-child'>
              <p>#{i + 1}</p>
              <p>
                from {item.fromType}, to {item.toType}
              </p>
              <p>
                {item.fromValue} = {item.toValue}
              </p>
              <span
                onClick={() => {
                  removeItemFromHistory(i);
                }}>
                &times;
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Exchange;

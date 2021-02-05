import React, { useState, useContext } from 'react';
import { UsersContext } from './../ContextAPI';

function Action({ user }) {
  const [users, setUsers] = useContext(UsersContext);
  const [amount, setAmount] = useState('');
  const [text, setText] = useState('');

  const clickPay = () => {
    let newTransaction = { amount, text }; // create transaction item
    let copyOfAllUsers = [...users];
    for (let i = 0; i < copyOfAllUsers.length; i++) {
      // loop through all users
      if (copyOfAllUsers[i].id === user.id) {
        // target current user using it's ID (usually unique to an individual, this test doesn't require that verification!)
        copyOfAllUsers[i].transactions.push(newTransaction); // add new transaction to selected user

        // then deduct the amount from
        let previousAmountInAccount = Number(copyOfAllUsers[i].money); // copy previous data
        previousAmountInAccount -= Number(amount); // deduct amount from data
        previousAmountInAccount = `${previousAmountInAccount}`; // stringify the changes
        copyOfAllUsers[i].money = previousAmountInAccount; // update changes
        break;
      }
    }
    setUsers(copyOfAllUsers); // save all manipulations
    window.alert('Transaction made!');
  };

  return (
    <div>
      <input
        type='number'
        placeholder='Amount of $'
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <input
        type='text'
        placeholder='Name this transaction'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={clickPay}>Pay</button>
    </div>
  );
}

export default Action;

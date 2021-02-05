import React, { useState } from 'react';

function ManageUser({ user, users, setUsers }) {
  const [showMore, setShowMore] = useState(false);

  const deleteTransaction = (index) => {
    let copyOfAllUsers = [...users];
    for (let i = 0; i < copyOfAllUsers.length; i++) {
      // loop through all users
      if (copyOfAllUsers[i].id === user.id) {
        // locate user by ID
        // when found, manipulate it's transactions
        copyOfAllUsers[i].transactions.splice(index, 1);
        break;
      }
    }
    setUsers(copyOfAllUsers);
  };

  const deleteUser = () => {
    let copyOfAllUsers = [...users];
    for (let i = 0; i < copyOfAllUsers.length; i++) {
      // loop through all users
      if (copyOfAllUsers[i].id === user.id) {
        // locate user by ID
        // when found, delete it
        copyOfAllUsers.splice(i, 1);
        break;
      }
    }
    setUsers(copyOfAllUsers);
  };

  return (
    <>
      <li>
        {user.id} {user.username}{' '}
        <button
          onClick={() => {
            setShowMore(!showMore);
          }}>
          More
        </button>
      </li>
      <ul>
        {showMore && (
          <>
            {user.transactions.map((transaction, i) => (
              <li key={i} className='manage-transaction'>
                {transaction.text} {transaction.amount}{' '}
                <button
                  className='delete-transaction'
                  onClick={() => {
                    deleteTransaction(i);
                  }}>
                  &times;
                </button>
              </li>
            ))}
            <button className='delete-user' onClick={deleteUser}>
              Delete User
            </button>
          </>
        )}
      </ul>
    </>
  );
}

export default ManageUser;

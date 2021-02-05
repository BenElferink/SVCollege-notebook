import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login({ employees, setEmployees, setLoggedEmployee }) {
  const history = useHistory();
  const [id, setId] = useState('');

  const clickEnter = () => {
    if (id === '99999') {
      history.push('/manager');
    } else {
      let employeeExists, indexOfExistance;

      employees.forEach((employee, i) => {
        if (employee.id === id) {
          employeeExists = true;
          indexOfExistance = i;
        }
      });

      if (employeeExists) {
        let copyOfAllEmployees = [...employees];
        copyOfAllEmployees[indexOfExistance].visits++;
        setEmployees(copyOfAllEmployees);
        setLoggedEmployee(copyOfAllEmployees[indexOfExistance]);
        history.push('/welcome');
      } else {
        window.alert(`Error: cannot find employee with id ${id}`);
      }
    }
  };

  return (
    <div className='login'>
      <h2>Login</h2>

      <div className='inp-group'>
        <label>#ID</label>
        <input
          type='number'
          maxLength='5'
          value={id}
          onChange={(e) => {
            let { value, maxLength } = e.target;
            setId(value.slice(0, maxLength));
          }}
        />
      </div>

      <button onClick={clickEnter}>Enter</button>
    </div>
  );
}

export default Login;

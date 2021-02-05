import React from 'react';
import LogoutBtn from './LogoutBtn';

function Manager({ employees, setLoggedEmployee }) {
  return (
    <div className='manager'>
      <h2>Manager</h2>

      <table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Full Name</th>
            <th>Logged in</th>
            <th>Products placed</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(
            (employee) =>
              employee.visits !== 0 && (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.visits}</td>
                  <td>{employee.productsPlaced}</td>
                </tr>
              )
          )}
        </tbody>
      </table>

      <LogoutBtn setLoggedEmployee={setLoggedEmployee} />
    </div>
  );
}

export default Manager;

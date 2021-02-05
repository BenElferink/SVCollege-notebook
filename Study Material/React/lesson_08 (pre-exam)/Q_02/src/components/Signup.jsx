import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Signup({ employees, setEmployees }) {
  const history = useHistory();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [license, setLicense] = useState(false);

  const verifyId = (shouldAnnounce) => {
    let isValid;

    if (id.length === 5) {
      isValid = true;
      if (id === '99999') {
        isValid = false;
        shouldAnnounce && window.alert('That ID is reserved.');
      } else {
        employees.forEach((employee) => {
          if (employee.id === id) {
            isValid = false;
            shouldAnnounce && window.alert('An employee already exists with that ID.');
          }
        });
      }
    } else {
      isValid = false;
    }

    return isValid;
  };

  const verifyName = () => {
    let isValid;
    let spacingExists;

    if (name.length > 4) {
      isValid = true;
      for (let i = 0; i < name.length; i++) {
        if ((name.charAt(i) >= 'a' && name.charAt(i) <= 'z') || (name.charAt(i) >= 'A' && name.charAt(i) <= 'Z') || name.charAt(i) === ' ') {
          if (name.charAt(i) === ' ') {
            spacingExists = true;
          }
          continue;
        } else {
          isValid = false;
          break;
        }
      }
      if (!spacingExists) {
        isValid = false;
      }
    } else {
      isValid = false;
    }

    return isValid;
  };

  const clickCreate = () => {
    let validityId = verifyId(true);
    let validityName = verifyName();

    if (validityId && validityName) {
      let newEmployee = {
        id,
        name,
        license,
        visits: 0,
        productsPlaced: 0,
      };

      let copyOfAllEmployees = [...employees];
      copyOfAllEmployees.push(newEmployee);
      setEmployees(copyOfAllEmployees);

      window.alert('Employee was successfully registered!');
      history.push('/');
    } else {
      window.alert('Failed to register employee!');
    }
  };

  return (
    <div className='signup'>
      <h2>Sign up</h2>

      <table>
        <tbody>
          <tr>
            <td>#ID</td>
            <td>
              <input
                type='number'
                maxLength='5'
                value={id}
                onChange={(e) => {
                  let { value, maxLength } = e.target;
                  setId(value.slice(0, maxLength));
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan='2' className='error'>
              {id.length !== 5 && id !== '' ? 'ID must have 5 digits!' : ''}
            </td>
          </tr>

          <tr>
            <td>Full name:</td>
            <td>
              <input
                type='text'
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan='2' className='error'>
              {!verifyName() && name !== '' ? 'Name must be at least 4 English-alphabetical characters, not including the spacing between first/middle/last name! (spacing is a must)' : ''}
            </td>
          </tr>

          <tr>
            <td>Forklift license?</td>
            <td className='radio-group-parent'>
              <div className='radio-group'>
                <input
                  type='radio'
                  name='forklift'
                  id='forklift-yes'
                  value={true}
                  onChange={() => {
                    setLicense(true);
                  }}
                  checked={license}
                />
                <label htmlFor='forklift-yes'>Yes</label>
              </div>
              <div className='radio-group'>
                <input
                  type='radio'
                  name='forklift'
                  id='forklift-no'
                  value={false}
                  onChange={() => {
                    setLicense(false);
                  }}
                  checked={!license}
                />
                <label htmlFor='forklift-no'>No</label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <button onClick={clickCreate}>Create</button>
    </div>
  );
}

export default Signup;

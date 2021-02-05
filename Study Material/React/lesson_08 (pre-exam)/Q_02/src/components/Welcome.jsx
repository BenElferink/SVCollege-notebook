import React from 'react';
import LogoutBtn from './LogoutBtn';

function Welcome({ employees, setEmployees, loggedEmployee, setLoggedEmployee, products, setProducts }) {
  const clickUpdate = (product, i) => {
    let updateProduct = () => {
      let copyOfAllEmployees = [...employees];
      for (let index = 0; index < copyOfAllEmployees.length; index++) {
        if (copyOfAllEmployees[index].id === loggedEmployee.id) {
          copyOfAllEmployees[index].productsPlaced++;
          break;
        }
      }

      let copyOfProducts = [...products];
      copyOfProducts[i].placed = true;

      setEmployees(copyOfAllEmployees);
      setProducts(copyOfProducts);
    };

    if (product.forklift) {
      if (loggedEmployee.license) {
        updateProduct();
      } else {
        window.alert('A forklift license is required.');
      }
    } else {
      updateProduct();
    }
  };

  return loggedEmployee !== false ? (
    <div className='welcome'>
      <h2>Welcome {loggedEmployee.name}</h2>

      <p>
        <u>Details:</u>
        <br />
        Name: {loggedEmployee.name}
        <br />
        #ID: {loggedEmployee.id}
        <br />
        Forklift license: {loggedEmployee.license ? 'yes' : 'no'}
        <br />
      </p>

      <div className='prod-list'>
        <h4>List of products</h4>
        {products.map(
          (product, i) =>
            !product.placed && (
              <div key={product.id} className='product'>
                <p>
                  NO. {product.id}
                  <br />
                  Name: {product.name}
                  <br />
                  Forklift required: {product.forklift ? 'yes' : 'no'}
                </p>
                <button
                  onClick={() => {
                    clickUpdate(product, i);
                  }}>
                  Update
                </button>
              </div>
            )
        )}
      </div>

      <LogoutBtn setLoggedEmployee={setLoggedEmployee} />
    </div>
  ) : (
    <div style={{ textAlign: 'center', color: '#ff0000' }}>
      <h2>Permission denied!</h2>
      <p>Login to view this page!</p>
    </div>
  );
}

export default Welcome;

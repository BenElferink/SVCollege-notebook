import React, { Component } from 'react';
import FoodList from './components/FoodList';

class App extends Component {
  state = {
    meat: ['Chicken', 'Steak', 'Meatballs'],
    dairy: ['Cheese', 'Cream'],
    vegetables: ['Cucumbers', 'Tomatoes', 'Carrots'],
  };

  removeMeat = (index) => {
    let newArray = this.state.meat.slice();
    newArray.splice(index, 1);
    this.setState({ meat: newArray });
  };

  addMeat = (food) => {
    let newArray = this.state.meat.slice();
    newArray.push(food);
    this.setState({ meat: newArray });
  };

  removeDairy = (index) => {
    let newArray = this.state.dairy.slice();
    newArray.splice(index, 1);
    this.setState({ dairy: newArray });
  };

  addDairy = (food) => {
    let newArray = this.state.dairy.slice();
    newArray.push(food);
    this.setState({ dairy: newArray });
  };

  removeVegetables = (index) => {
    let newArray = this.state.vegetables.slice();
    newArray.splice(index, 1);
    this.setState({ vegetables: newArray });
  };

  addVegetables = (food) => {
    let newArray = this.state.vegetables.slice();
    newArray.push(food);
    this.setState({ vegetables: newArray });
  };

  render() {
    return (
      <div className='app'>
        <h1>
          <u>Shopping List</u>
        </h1>
        <FoodList
          title='Meat products'
          list={this.state.meat}
          removeItem={this.removeMeat}
          addItem={this.addMeat}
        />
        <FoodList
          title='Dairy products'
          list={this.state.dairy}
          removeItem={this.removeDairy}
          addItem={this.addDairy}
        />
        <FoodList
          title='Vegetable products'
          list={this.state.vegetables}
          removeItem={this.removeVegetables}
          addItem={this.addVegetables}
        />
      </div>
    );
  }
}

export default App;

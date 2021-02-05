import { Component } from 'react';
import AddPost from './components/AddPost';
import Post from './components/Post';
import './style/style.css';

export default class App extends Component {
  state = {
    postList: [
      { name: 'Hotdog', price: '1.99', info: 'buns, sausage, mustard, ketchup' },
      { name: 'Burger', price: '9.99', info: 'buns, meat, cheese, pickles, bbq sause' },
      { name: 'Beer', price: 'FREE', info: 'beer' },
    ],
  };

  add = (pName, pPrice, pInfo) => {
    this.setState({
      postList: [...this.state.postList, { name: pName, price: pPrice, info: pInfo }],
    });
  };

  remove = (index) => {
    let newArray = this.state.postList.splice(index, 1);
    this.setState(newArray);
  };

  render() {
    return (
      <div className='app'>
        <AddPost add={this.add} />
        <div className='post-list'>
          {this.state.postList.map((post, i) => (
            <Post
              name={post.name}
              price={post.price}
              info={post.info}
              index={i}
              key={i}
              remove={this.remove}
            />
          ))}
        </div>
      </div>
    );
  }
}

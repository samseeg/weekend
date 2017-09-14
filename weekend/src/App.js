import React, { Component } from 'react';
import img from './books.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main_wrapper">
        <img className="main_background" src={img} alt="Books" />
        <div className='cover'>
        </div>
        <div className="add_book">
          Hello
          </div>


        
      </div>
    );
  }
}

export default App;

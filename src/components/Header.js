import React, { Component } from 'react'
import CounterButton from './CounterButton';
import CounterButton2 from './CounterButton2';

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render(){
    console.log('Header render');
    return (
      <div>
        <h1 className='f1'>RoboFriends</h1>
        <CounterButton color={'red'} />
        <CounterButton2 color={'red'} />
      </div>
    );
  }

};

export default Header;

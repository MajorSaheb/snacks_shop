import React, { Component } from 'react';
import './mainView.css';
import ItemGrid from '../itemGrid/itemGrid';
import SideBar from '../sideBar/sideBar';

class MainView extends Component {
  constructor(){
    super();
    this.state={
      item: {},
      list:[]
    }
  }

  onClickAddToCart(newItem) {
    this.setState({
      item: this.state.list.push(newItem)
    })
  }

  render(){
    return (
      <div className="mainView">
          <div className='itemGrid'>
            <ItemGrid addToCart={this.onClickAddToCart.bind(this)} />
          </div>
          <div className='sideBar' >
            <SideBar itemToAdd={this.state.list}/>
          </div>
      </div>
    );
  }
}

export default MainView;
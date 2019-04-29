import React, { Component } from 'react';
import './mainView.css';
import ItemGrid from '../itemGrid/itemGrid';
import SideBar from '../sideBar/sideBar';

class MainView extends Component {
  constructor(){
    super();
    this.state={
      item: {},
      list:[],
      cartTotal: 0
    }
  }

  onClickAddToCart(newItem) {
    let temp = this.state.cartTotal + Number(newItem.price)
    this.setState({
      item: this.state.list.push(newItem),
      cartTotal: temp
    })
    
  }

  render(){
    return (
      <div className="mainView">
          <div className='itemGrid'>
            <ItemGrid addToCart={this.onClickAddToCart.bind(this)} />
          </div>
          <div className='sideBar' >
            <SideBar itemToAdd={this.state.list} cartTotal={this.state.cartTotal}/>
          </div>
      </div>
    );
  }
}

export default MainView;
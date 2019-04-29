import React, { Component } from 'react';
import './header.css';
// import Button from '@material-ui/core/Button';
// import Modal from '@material-ui/core/Modal';

class Header extends Component{

  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
  };

  getModalStyle() {
      return{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'ghostwhite',
          color: 'grey'
      }
  }
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render(){
  return (
    <div className="headerMain">
      <div className="headerTitle">My Infeedo Snack Store</div>
      {/* <Button onClick={this.handleOpen} size="small" aria-label="localStorage" variant="contained" color="primary">Order History</Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.open}
        onClose={this.handleClose}
        > 
          <div style={this.getModalStyle()} ><h3>Your Order History</h3></div>
          <div>{this.localStorage.lastOrder ? that.localStorage.lastOrder : "No Last order"}</div>
      </Modal> */}
    </div>
  )};
}

export default Header;
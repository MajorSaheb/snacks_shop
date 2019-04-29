import React, { Component } from 'react';
import './sideBar.css'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';


class SideBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            cartList: [],
            open: false,
        };
    };

    getModalStyle() {
        return{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'ghostwhite',
            color: 'grey'
        }
    }

    // saveToLocalStorage = () => {
    //     if (typeof(Storage) !== "undefined") {
    //         // Store
    //         localStorage.setItem("lastOrder", "Completed");
    //     } else {
    //         console.log("Browser does not support Web Storage.");
    //     }
    // }

    handleOpen = () => {
        this.setState({ open: true });
        
        setTimeout(() => {
            this.handleClose()
          }, 3000);
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };


    render() {
        const list = this.props.itemToAdd.map(function(value, key){ 
            return (
            
                <li key={value.id*2}>
                {value.name} <b className='priceLabel'>{value.price}</b>
                <hr />
                </li>
                
            
            );
        });
        
        return (
            <React.Fragment>
                <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
                >
                    <div style={this.getModalStyle()} >
                        <h3>Your Order has been Placed</h3>
                        <p>Will be delivered in {(this.props.itemToAdd.length * 10) + 5} mins</p>
                    </div>
                </Modal>
                <Paper className='sideBarMain'>
                    <h1>Cart</h1>
                    <hr />
                    <ul>
                    {list.length ? list : "Your Cart is Empty"}
                    </ul>
                    {this.props.cartTotal ?  <b>Total Amount: {this.props.cartTotal} </b> : ""}
                    <br />
                    {this.props.cartTotal ? <Button onClick={this.handleOpen} size="small" aria-label="Add" variant="contained" color="primary">Place Your Order</Button> : ""}
                </Paper>
            </React.Fragment>
        )
    }
}

export default SideBar;
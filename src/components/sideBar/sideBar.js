import React, { Component } from 'react';
import './sideBar.css'
import Paper from '@material-ui/core/Paper';


class SideBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            cartList: []
        };
    };

// componentWillReceiveProps(){
//     let joined = this.state.cartList.concat(this.props.itemToAdd);
//     this.setState({ cartList: joined });
// }

    render() {
        // const list = 
        // <ul>
        //     <li>
        //     {this.props.itemToAdd.name? this.props.itemToAdd.name : "Your Cart is Empty"}
        //     </li>
        // </ul>
        const list = this.props.itemToAdd.map(function(value, key){ 
            return (
            
                <li key={value.id*2}>
                {value.name} <b>{value.price}</b>
                </li>
            
            );
        });
        return (
            <React.Fragment>
                <Paper className='sideBarMain'>
                    <h1>Cart</h1>
                    <hr />
                    <ul>
                    {list ? list : "Yurk"}
                    </ul>
                </Paper>
            </React.Fragment>
        )
    }
}

export default SideBar;
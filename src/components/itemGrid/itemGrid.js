import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import { makeRequest } from '../../utiles/apiHelper';
import './itemGrid.css';
import Button from '@material-ui/core/Button';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import SearchIcon from '@material-ui/icons/Search'

class ItemGrid extends Component {
constructor(props){
    super(props);
    this.state = {
        data: [],
        renderData: [],
        newCartItem: {}
    };
};

search(e) {
    let updatedList = [...this.state.data],
        searchText = e.target.value.toLowerCase();
    updatedList = updatedList.filter(function (item) {
        return item.name.toLowerCase().search(searchText) !== -1;
    });
    console.log(updatedList);
        this.setState({
            renderData: updatedList,
    });
}

componentDidMount(){
    makeRequest('GET', 'http://demo1367127.mockable.io/')
    .then(
        (rawData) => this.setState({data: rawData.data, renderData: rawData.data})
        )
        
    .catch(function (err) {
        console.error('Augh, there was an error!', err.statusText);
    });
};


onClickAddToCart(e){
    this.setState({newCartItem: this.state.data[e.currentTarget.value]}, function(){
        console.log(this.state);
        this.props.addToCart(this.state.newCartItem);
    });
}


  render() {
    const that = this;
    const item = this.state.renderData.map(function(value, key){ 
        return (
        <Grid key={key} item xs={12} md={4} >
            <div className='itemGrid'>
                <img src={value.imgurl} alt={value.name}/>
                <h4>{value.name}</h4>
                <hr />
                <div className='content'>
                    <div className='ingredientsLabel'>
                        <i>{value.ingredients}</i>
                    </div>
                    <Button size="small" aria-label="Add" variant="contained" color="secondary" value={key} onClick={(e) => that.onClickAddToCart(e)}>
                        <AddShoppingCart />
                    </Button>
                </div>
            </div>
        </Grid>);
    });
    return (
        <React.Fragment>
            <div className='CategoryBar'>
                <input type='text' placeholder='Search' className='searchBox' onChange = {(e) => this.search(e)}/>
                <SearchIcon style={{position:'relative',padding:'10px'}}/>
            </div>
            <Grid container spacing={16}> 
                
                    {item}
                
            </Grid>
        </React.Fragment>
    );
  }
}

export default ItemGrid;
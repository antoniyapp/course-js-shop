import React, { Component } from 'react';

import ProductForm from './productForm';

class ProductFormContainer extends Component {
   constructor(props){
     super(props)
    this.state = {
    title: '',
    imageUrl:'',
    description:'',
    price:''
  };
     this.handleInputChange=this.handleInputChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);

   }
   handleInputChange(e){
     this.setState({[e.target.name]: e.target.value});
   }
   handleSubmit(e){
     e.preventDefault();
     this.props.history.push('/');
     let product={
         title:this.state.title,
         imageUrl:this.state.imageUrl,
         description:this.state.description,
         price:this.state.price
     };
     this.props.handleProductSubmit(product);

   }
  render(){
      console.log(this.state);
        return (
        <ProductForm
        handleInputChange={this.handleInputChange}
        formState={this.state}
        title="Add product"
        handleSubmit={this.handleSubmit}
        actionText="Add"
      />    
        )
      }

}

export default ProductFormContainer;
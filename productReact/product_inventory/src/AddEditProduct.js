import React from 'react';
import axios from 'axios';
class AddEditProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "id": 0,
            "image": "",
            "name": "",
            "companyName": "",
            "offer": false,
            "price": "",
            "regDate": "",
            "category": "",
            "stock": 0,
            "rating": 0,
            "description": ""
        }
    }
    addproduct = () => {
        let productrequestbody={
            "id": this.state.id,
            "image": this.state.image,
            "name": this.state.name,
            "companyName": this.state.companyName,
            "offer": this.state.offer,
            "price": this.state.price,
            "regDate": this.state.regDate,
            "category": this.state.category,
            "stock": this.state.stock,
            "rating": this.state.rating,
            "description": this.state.description
        }
        console.log(this.state)
        console.log(productrequestbody)
        axios.post('http://localhost:3000/products',productrequestbody)
        .then(response=>{
            this.props.history.push('/product')
        })
    }
    getName=(event)=>{
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }
    getCompanyName=(event)=>{
        console.log(event.target.value)
        this.setState({companyName:event.target.value})
    }
    getImage=(event)=>{
        console.log(event.target.value)
        this.setState({image:event.target.value})
    }
    getPrice=(event)=>{
        console.log(event.target.value)
        this.setState({price:event.target.value})
    }
    getStock=(event)=>{
        console.log(event.target.value)
        this.setState({stock:event.target.value})
    }
    getCategory=(event)=>{
        console.log(event.target.value)
        this.setState({category:event.target.value})
    }
    getDescription=(event)=>{
        console.log(event.target.value)
        this.setState({description:event.target.value})
    }
    getDate=(event)=>{
        console.log(event.target.value)
        this.setState({regDate:event.target.value})
    }
    getOffer=(event)=>{
        console.log(event.target.value)
        this.setState({offer:event.target.value})
    }
    render() {
        return (
            <div className="section">
                <div className="container">
                    <span className="loginarea">
                        <h1>Product Details</h1>
                        <form className="addpdtform" onSubmit={this.addproduct}>
                            <div className="formalign">
                                <span className="left"><label htmlFor='name'>Name</label>
                                    <input type="text" id='name' name="name" value={this.state.name} onChange={this.getName}></input></span>
                                <span className="right"><label htmlFor='Manufacturename'>Company Name</label>
                                    <input type="text" id='Manufacturename' name="Manufacturename" value={this.state.companytName} onChange={this.getCompanyName}></input></span>
                            </div>
                            <div className="formalign">
                                <span className="left"><label htmlFor="price">Price</label>
                                    <input type="number" id='price' value={this.state.price} onChange={this.getPrice}></input></span>
                                <span className="right"><label htmlFor='stock'>Stock</label>
                                    <input type="number" id="stock" value={this.state.stock} onChange={this.getStock}></input></span>
                            </div>
                            <div className="formalign">
                                <span className="left"><label htmlFor="category">Category</label>
                                    <select className="right" id="category" name="category" onChange={this.getCategory}>
                                        <option value="machinery">Machinery</option>
                                        <option value="seed/sapling">Seed/Sapling</option>
                                        <option value="tools">Tools</option>
                                    </select></span>
                            </div>
                            <div className="formalign">
                                <span className="left"><label htmlFor="imageurl">Imageurl</label>
                                    <input type="text" id="imageurl" value={this.state.image} onChange={this.getImage}></input></span>
                                <span className="right"><label htmlFor="">Today's Offer</label>
                                    <input type="radio" id="yes" name="Inoffer" onClick={this.getOffer} value='true'></input>
                                    <label htmlFor="yes">Yes</label>
                                    <input type="radio" id="no" name="Inoffer" onClick={this.getOffer} value='false'></input>
                                    <label htmlFor="no">No</label></span>
                            </div>
                            <div className="formalign"><span className="left"><label htmlFor="description">Description</label>
                                <input type="text" id="description" value={this.state.description} onChange={this.getDescription}></input></span>
                                <span className="right">
                                    <label htmlFor="dateofpdt">Date of Registration</label>
                                    <input type="date" value={this.state.regDate} onChange={this.getDate}></input>
                                </span>
                            </div>
                            <br></br><br></br>
                            <input type="submit" value="Addproduct"></input>
                        </form>
                    </span>
                </div>
            </div>
        );
    }
}

export default AddEditProduct;
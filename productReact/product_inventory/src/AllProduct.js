import React from 'react';
import Search from './Search'
import ProductDisplay from './ProductDisplay'
import { Link } from 'react-router-dom'
import axios from 'axios'
class AllProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productList: [],
            deletestatus:false
        }
    }
    componentWillMount() {
        this.getAllProducts()
    }
    getAllProducts() {
        axios.get(' http://localhost:3000/products')
            .then(response => {
                console.log(response.data)
                this.setState({ productList: response.data })
            }, error => {
                console.error(error)
            })
    }
    productdisplay = () => {
        return this.state.productList.map(product => {
            return (
                <ProductDisplay
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    stock={product.stock}
                    rating={product.rating}
                    description={product.description}
                    editproduct={this.editproduct}
                    deleteproduct={this.deleteproduct}>
                </ProductDisplay>
            )
        })
    }
    editproduct = (id) => {

    }
    deleteproduct = (id) => {
        console.log('Id: '+id)
        axios.delete('http://localhost:3000/products/'+id)
        .then(response=>{
            console.log('Deleted '+ id)
            this.getAllProducts()
            this.setState({deletestatus:true})
            setTimeout(()=>{
                this.setState({deletestatus:false})
            },2000)
        },error=>{
            console.log(error)
        })
    }
    render() {
        return (
            <div className="productdisplayarea">
                <div>
                    <Link to='/addeditproduct'><button className="addproductbutton">Add Product</button></Link>
                </div>
                <Search />
                {this.state.deletestatus && <div >
                    <h3>Product Deleted Successfully !!!</h3>
                </div>}
                {this.productdisplay()}
            </div>
        );
    }
}

export default AllProduct;
import React from 'react';
import StockTableContent from './StockTableContent';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
class StockTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productList: [],
            id: 0,
            stock: 0
        }
    }
    componentWillMount() {
        this.getproducts()
    }
    getproducts() {
        axios.get('http://localhost:3000/products')
            .then(response => {
                var unorderproductList = []
                unorderproductList = response.data
                unorderproductList.sort(function (a, b) { return a.stock - b.stock })
                console.log(unorderproductList)
                this.setState({ productList: unorderproductList })
                console.log(response.data)
            }, Error => {
                console.log(Error.error)
            })
    }
    
    incStock = (productId) => {
        console.log('Id: ' + productId)
        axios.get('http://localhost:3000/products/' + productId)
            .then(response => {
                console.log(parseInt(response.data.stock) + 1)
                // this.setState({stock:response.data.stock+1})
                axios.patch('http://localhost:3000/products/' + productId, { 'stock': parseInt(response.data.stock) + 1 })
                this.getproducts()
            }, error => {
                console.log(error.error)
            })
    }
    decStock = (productId) => {
        console.log('Id: ' + productId)
        axios.get('http://localhost:3000/products/' + productId)
            .then(response => {
                console.log(parseInt(response.data.stock) - 1)
                // this.setState({stock:response.data.stock-1})
                axios.patch('http://localhost:3000/products/' + productId, { 'stock': parseInt(response.data.stock) - 1 })
                this.getproducts()
            }, error => {
                console.log(error.error)
            })
    }
    updatepdt = (productId) => {
        console.log('Id: ' + productId)
        this.setState({id: productId})
        this.props.history.push({ pathname: '/addeditproduct', state: { id: productId } })
    }
    deletepdt = (productId) => {
        console.log('Id: ' + productId)
        axios.delete('http://localhost:3000/products/' + productId)
            .then(response => {
                console.log('Deleted ' + productId)
                this.getproducts()
            }, error => {
                console.log(error)
            })
    }
    stocktablecontent = () => {
        return this.state.productList.map(product => {
            return (
                <StockTableContent
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    stock={product.stock}
                    incrementStock={this.incStock}
                    decrementStock={this.decStock}
                    detetepdt={this.deletepdt}
                    updatepdt={this.updatepdt}
                ></StockTableContent>
            )
        })
    }
    render() {
        return (<table className="stocktable">
            <caption><b>List of Product</b></caption>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Stock</th>
                    <th colSpan='2'>Manage Stock</th>
                    <th>Update</th>
                    <th>Required</th>
                </tr>
            </thead>
            <tbody>
                {this.stocktablecontent()}
            </tbody>
        </table>);
    }
}

export default withRouter(StockTable);
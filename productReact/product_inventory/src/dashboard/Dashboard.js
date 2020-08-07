import React from 'react';
import StockTable from './StockTable';
import Search from './Search';
import ProductDisplay from './ProductDisplay'
import OverallSaleGraph from './OverallSaleGraph';
import ProductSaleGraph from './ProductSaleGraph';
import axios from 'axios'
class DashBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            permanentproductList: [],
            productList: [],
            deletestatus: false,
        }
    }
    componentWillMount() {
        if (this.state.permanentproductList == 0)
            this.getAllProducts()
    }
    getAllProducts() {
        axios.get(' http://localhost:3000/products')
            .then(response => {
                console.log(response.data)
                this.setState({ productList: response.data })
                this.setState({ permanentproductList: response.data })
            }, error => {
                console.error(error)
            })
    }
    search = (word) => {
        if (word === '') {
            this.setState({ productList: this.state.permanentproductList })
        } else {
            var searchproductList = this.state.permanentproductList.filter(product => product.name.toLowerCase().startsWith(word.toLowerCase()))
            console.log(searchproductList)
            this.setState({ productList: searchproductList })
        }
    }
    productdisplay = () => {
        if (this.state.productList.length === 0) {
            return (<h3 className='error'>  No Product Found !!! , Alter your Search</h3>)
        } else {
            return this.state.productList.map(product => {
                return (
                    <div key={product.id}>
                        <ProductDisplay
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
                        <ProductSaleGraph 
                            id={product.id} />
                    </div>
                )
            })
        }
    }
    editproduct = (productId) => {
        console.log('Id: ' + productId)
        this.setState({ id: productId })
        this.props.history.push({ pathname: '/addeditproduct', state: { id: productId } })
    }
    deleteproduct = (id) => {
        console.log('Id: ' + id)
        axios.delete('http://localhost:3000/products/' + id)
            .then(response => {
                console.log('Deleted ' + id)
                this.getAllProducts()
                this.setState({ deletestatus: true })
                setTimeout(() => {
                    this.setState({ deletestatus: false })
                }, 2000)
            }, error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div>
                <div className="dashboard">
                    <StockTable />
                    <OverallSaleGraph />
                </div>

                {/* <Search search={this.search} /> */}
                <div className="dashboardperproduct">
                    <Search search={this.search} />
                    {this.state.deletestatus && <div >
                        <h3>Product Deleted Successfully !!!</h3>
                    </div>}
                    {this.productdisplay()}
                    {/* <ProductDisplay dashboard='true' productdetail={this.productdetail}/> */}
                    {/* <ProductSaleGraph/> */}
                </div>
            </div>
        );
    }
}

export default DashBoard;
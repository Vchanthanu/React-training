import React from 'react';
import NewArrival from './NewArrival';
import Offers from './Offers'
import AllProduct from './AllProduct';
class Product extends React.Component {
    render() {
        return (
            <div>
                <div className="displayarea">
                    <NewArrival />
                    <Offers />
                </div>
                <AllProduct/>
            </div>
        );
    }
}

export default Product;
import React from 'react';
import StockTable from './StockTable';
import Search from './Search';
import ProductDisplay from './ProductDisplay'
import OverallSaleGraph from './OverallSaleGraph';
import ProductSaleGraph from './ProductSaleGraph';
class DashBoard extends React.Component {
    
    render() {
        return (
            <div>
                <div className="dashboard">
                    <StockTable />
                    <OverallSaleGraph/>
                </div>
                <Search />
                <div className="dashboardperproduct">
                <ProductDisplay productdetail={this.productdetail}/>
                    <ProductSaleGraph/>
                </div>
            </div>
        );
    }
}

export default DashBoard;
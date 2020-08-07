import React from 'react';
class ProductDisplay extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    deleteproduct = () => {
        this.props.deleteproduct(this.props.id)
    }
    editproduct = () => {
        this.props.editproduct(this.props.id)
    }
    render() {
        return (
            <div className="card">
                <span className=" subcard left">
                    <img className="cardimg"
                        src={this.props.image}
                        alt="productImage"></img>
                </span>
                <span className="subcard right">
                    <br></br><h3 className="cardtitle">{this.props.name}</h3><br></br>
                    <h4 className="carditem"><span className="left">Rs: {this.props.price}</span><span className="right">{this.props.category}</span></h4><br></br>
                    <h4 className="carditem"><span className="left">Stock: {this.props.stock}</span><span className="right">Rating: {this.props.rating}</span></h4><br></br>
                    <h4 className="carditem">Description</h4>
                    <p className="carditem">{this.props.description}</p><br></br>
                    <h4 className="carditem"><button className="left" onClick={this.editproduct}>Edit</button>
                    <button className="right" onClick={this.deleteproduct}>Delete</button></h4>
                </span>
            </div>
        );
    }
}

export default ProductDisplay;
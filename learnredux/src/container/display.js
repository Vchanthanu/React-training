import React from 'react';
import { connect } from 'react-redux'
class Display extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.firstname} {this.props.lastname}@{this.props.score}</h2>
            </div>
        );
    }
}
function storeToProps(store) {
    return {
        firstname: store.addfirstname,
        lastname: store.addlastname,
        score: store.addscore
    }
}
export default connect(storeToProps)(Display);
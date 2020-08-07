import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <Link className="logotitle" to="/product">
                    <img className="logo" src="./AppLogo.png" alt="Logo of Farming Product App"></img>
                    <h2 className="appname">Farming Products</h2>
                </Link>
                <h4 className="menu">
                    <Link className="menulist" to="/product">Product</Link>
                    <Link className="menulist" to="/dashboard">Dashboard</Link>
                    <Link className="menulist" to="/">Login</Link>
                    <Link className="menulist" to="/signup">SignUp</Link>
                    <Link className="menulist" to="/">Logout</Link>
                    <span className="menulist">Jhon</span>
                </h4>
            </div>
        );
    }
}

export default Header;
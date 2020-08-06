import React from 'react'
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    login = (event) => {
        this.setState({ email: event.target.email.value })
        this.setState({ password: event.target.password.value })
        event.preventDefault();
        console.log(this.state.email + ' ' + this.state.password)
    }
    render() {
        return (
            <div className="section">
                <div className="container">
                    <span className="image">
                        <h1 className="quote">Farming protects Future</h1>
                        <h4 className="option"><Link to='/'><button className="login button">
                            <h3>LOGIN</h3>
                        </button></Link>
                        </h4>
                        <h4 className="option"><Link to='/signup'><button className="signup button">
                            <h3>SIGNUP</h3>
                        </button></Link>
                        </h4>
                    </span>
                    <span className="loginarea">
                        <h1>Login Here</h1>
                        <form className="form" onSubmit={this.login}>
                            <label htmlFor='email'>E-mail:</label>
                            <input type="email" id='email' name='email'></input><br></br>
                            <br></br>
                            <label htmlFor='password' >Password:</label>
                            <input type="password" id='password' name='password'></input><br></br><br></br>
                            <a href="/Forgot password">Forgot Password.?</a>&nbsp;
                            <input type="submit" value="Login"></input>
                            <br></br>
                        </form>
                    </span>
                </div>
            </div>
        )
    }
}
export default Login
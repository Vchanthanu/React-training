import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            username: '',
            email: '',
            password: '',
            wrongPassword: false,
            wrongEmail: false,
            invalidEmail: true,
            invalidPassword: true
        }
    }
    login = () => {
        axios.get('http://localhost:3000/users')
            .then(response => {
                this.setState({ users: response.data })
                console.log(this.state.users)
                var loguser = this.state.users.find(user => user.email === this.state.email)
                console.log(loguser)
                if (loguser === undefined) {
                    this.setState({ wrongEmail: true })
                } else {
                    if (loguser.password === this.state.password) {
                        this.setState({ username: loguser.firstname })
                        this.props.history.push('/product')
                    } else {
                        this.setState({ wrongPassword: true })
                    }
                }
            }, error => { console.error(error); })

    }
    getEmail = (event) => {
        console.log(event.target.value)
        this.setState({ wrongEmail: false })
        if (event.target.value.includes('@')) {
            this.setState({invalidEmail : false})
            this.setState({ email: event.target.value })
        }else{
            this.setState({invalidEmail : true})
        }
    }
    getPassword = (event) => {
        console.log(event.target.value)
        this.setState({ wrongPassword: false })
        if(event.target.value === ''){
            this.setState({invalidPassword : true})
        }else{
            this.setState({invalidPassword:false})
        this.setState({ password: event.target.value })
        }
    }
    render() {
        return (
            <div className="section">
                <div className="container">
                    <span className="image" >
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
                        {this.state.wrongEmail && <h3 className='error'>Invalid Email Id</h3>}
                        {this.state.wrongPassword && <h3 className='error'>Invalid Password</h3>}
                        <form className="form" >
                            <label htmlFor='email'>E-mail:</label>
                            <input type="email" id='email' onChange={this.getEmail} name='email'></input><br></br>
                            {this.state.invalidEmail && <span className='error'>Email Id, must contain '@'</span>}
                            <br></br>
                            <br></br>
                            <label htmlFor='password' >Password:</label>
                            <input type="password" id='password' onChange={this.getPassword} name='password'></input><br></br>
                            {this.state.invalidPassword && <span className='error'>Password is required</span>}
                            <br></br><br></br>
                            <a href="/Forgot password">Forgot Password.?</a>&nbsp;
                            <input type="button" onClick={this.login} disabled={this.state.invalidEmail || this.state.invalidPassword} value="Login"></input>
                            <br></br>
                        </form>
                    </span>
                </div>
            </div>
        )
    }
}
export default Login
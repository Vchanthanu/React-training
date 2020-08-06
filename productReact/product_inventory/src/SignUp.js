import React from 'react';
import { Link } from 'react-router-dom'
class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmpassword: '',
            sequrityquestion: '',
            answer: '',
            gender: '',
        }
    }
    signUp = (event) => {
        event.preventDefault();
        this.setState({ firstname: event.target.firstname.value })
        this.setState({ lastname: event.target.lastname.value })
        this.setState({ email: event.target.email.value })
        this.setState({ password: event.target.password.value })
        this.setState({ confirmpassword:event.target.confirmpassword.value})
        this.setState({ sequrityquestion: event.target.sequrityquestion.value })
        this.setState({ answer: event.target.answer.value })
        this.setState({ gender: event.target.gender.value })
        console.log(this.state)
    }
    render() {
        return (
            <div className="section">
                <div className="container">
                    <span className="image">
                        <h1 className="quote">Farming protects Future</h1>
                        <h4 className="option"><Link to='/'><button className="login button" >
                            <h3>LOGIN</h3>
                        </button></Link>
                        </h4>
                        <h4 className="option"><Link to='/signup'><button className="signup button" >
                            <h3>SIGNUP</h3>
                        </button></Link>
                        </h4>
                    </span>
                    <span className="loginarea">
                        <h1>SignUp Here</h1>
                        <form className="form" onSubmit={this.signUp}>
                            <label htmlFor='firstname'>First Name</label>
                            <input type="text" id='firstname' name="firstname"></input><br></br><br></br>
                            <label htmlFor='lastname'>Last Name</label>
                            <input type="text" id='lastname' name="lastname"></input><br></br><br></br>
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id='email'></input><br></br><br></br>
                            <label htmlFor='password'>Password:</label>
                            <input type="password" id="password"></input><br></br><br></br>
                            <label htmlFor="confirmpassword">Confirmpassword</label>
                            <input type="password" id='confirmpassword'></input><br></br><br></br>
                            <label htmlFor="sequrityquestion">Sequrity Question</label>
                            <select id="sequrityquestion" name="sequrityquestion">
                                <option value="what is your first school?">what is your first school?</option>
                                <option value="who is your best friend?">who is your best friend?</option>
                                <option value="what is tour favourite color?">what is tour favourite color?</option>
                            </select><br></br><br></br>
                            <label htmlFor="answer">Sequrity Answer?</label>
                            <input type="text" id="answer" name='answer'></input><br></br><br></br>
                            <input type="radio" id="male" name="gender" value="male"></input>
                            <label htmlFor="male">Male</label>
                            <input type="radio" id="female" name="gender" value="female"></input>
                            <label htmlFor="female">Female</label>&nbsp;&nbsp;
                            <input type="submit" value="SignUp"></input>
                            <br></br>&nbsp;<br></br>
                        </form>
                    </span>
                </div>
            </div>
        )
    }
}
export default SignUp
import React from 'react'
import "./Login.css";

class Login extends React.Component {
    state={
        email:'',
        pwd:''
    }

    handleChange = (e) =>{
        const{name,value} = e.target
        this.setState({[name]:value})
    }
    handleSubmit = (e) =>{
        e.preventDefault()
    }
    render(){
        return (
            <div className="Login">
                <div className="logo"><h4>VR House Tours</h4><h3>Login</h3></div>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input type='email' name='email' placeholder='example@email.com' required onChange={this.handleChange}/>
                        <input type='password' name='password' placeholder='password' required onChange={this.handleChange}/>
                        <button onSubmit={this.handleSubmit}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login

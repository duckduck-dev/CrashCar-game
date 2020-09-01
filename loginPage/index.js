import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      show: true
     };
  }
  mySubmitHandler = (e) => {
    e.preventDefault();
    document.getElementById('box1').value= '';
    document.getElementById('box2').value= '';
    document.getElementById('mainContainer');
    alert("Login successfull!!! ");
  }

  validatePassword = (e) => {
    let val = e.target.value;
    if (!Number(val)) {
      alert(' Invalid mobile number');
    }
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <main id="container">
      <div id="mainContainer">
      <p>Welcome Back!!!</p>
      <input id="box1" type='text' placeholder='Username' name="username" required/><br />
      <input id="box2" type='password' placeholder="Password" required/><br />
      <input id="signUp" type="submit" value="Login"/>
      <a href="#">forgot password?</a>
      </div>
      </main>
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
//test

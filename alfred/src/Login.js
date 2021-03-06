import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      username: '',
      password: '',
    }
  }
  //Takes user inputs in the form and updates the state with the input so it can be sent to the server once submitted.
  handleChange(event){
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  submitForm(event){
    //Stops page from reloading on submit.
    event.preventDefault();
    //Variable holding the FetchURL
    const fetchURL = `https://alfr3d-db.herokuapp.com/users?username=${this.state.username}&password=${this.state.password}`;
    // const fetchURL = `http://localhost:4000/users?username=${this.state.username}&password=${this.state.password}`;
    //Function that will send the POST request to the server.
    const logInToAccount = (url = '' , data = {})=>{
      return fetch(url, {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(data),
      }).then(response => response.json());
    }
    //Calling above function
    logInToAccount(fetchURL, {username: this.state.username, password: this.state.password})
      .then(data => {
        let passwordResponse = JSON.stringify(data);
        console.log(passwordResponse);
        if (passwordResponse === "\"passwords match\"") {
          console.log('password correct, state updated');
          console.log(this.state.username, 'username state on login page')
          this.props.logIn(this.state.username);
        } else {
          console.log('username or password incorrect');
        }

      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="landing-page">
        <img src="./img/Monocle-Transparent-Image.png" className="alfred" alt="Alfr3d Logo"></img>
        <h1 className="title">Log In</h1>
        <form onSubmit={(event)=>{this.submitForm(event); this.props.changePage('showLoginPage', 'showLandingPage')}}>
          <label>Username:</label><br/>
          <input onChange={this.handleChange} id='username' type="text" value={this.state.username}></input><br/>
          <label>Password:</label><br/>
          <input onChange={this.handleChange} id='password' type="password" value={this.state.password}></input><br/>
          <input type="submit" value="Submit"></input>
        </form>
        <button onClick={()=>{this.props.changePage('showLoginPage', 'showLandingPage')}}>Go Back</button>
        <br/>
        <p>Don't have an account?</p>
        <a className="collision" href="#" onClick={()=>{this.props.changePage('showLoginPage', 'showCAPage');}}>
            Create Account
        </a>
      </div>
    );
  }
}

export default Login;

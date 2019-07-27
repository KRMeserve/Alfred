import React from 'react';

class CreateAccount extends React.Component {
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
    console.log(event.target.value);
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  submitForm(event){
    //Stops page from reloading on submit.
    event.preventDefault();
    //Variable holding the FetchURL
    const fetchURL = `https://alfr3d-db.herokuapp.com/users/new?username=${this.state.username}&password=${this.state.password}`;
    // const fetchURL = `https://alfr3d-db.herokuapp.com/users/new?username=${this.state.username}&password=${this.state.password}`;
    //Function that will send the POST request to the server.
    const createAccount = (url = '' , data = {})=>{
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
    createAccount(fetchURL, {username: this.state.username, password: this.state.password})
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="landing-page">
        <img src="./img/Monocle-Transparent-Image.png" className="alfred" alt="Alfr3d Logo"></img>
        <h1 className="title">Create An Account</h1>
        <form onSubmit={(event)=>{this.submitForm(event); this.props.changePage('showCAPage', 'showLandingPage')}}>
          <label>Username:</label><br/>
          <input onChange={this.handleChange} id='username' type="text" value={this.state.username}></input><br/>
          <label>Password:</label><br/>
          <input onChange={this.handleChange} id='password' type="password" value={this.state.password}></input><br/>
          <input type="submit" value="Submit"></input>
        </form>
        <button onClick={()=>{this.props.changePage('showCAPage', 'showLandingPage')}}>Go Back</button>
      </div>
    );
  }
}

export default CreateAccount;

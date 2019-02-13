import React from 'react';

class CreateAccount extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: '',
      password: '',
    }
  }
  handleChange(event){
    console.log(event.target.value);
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  render() {
    return (
      <div className="landing-page">
        <img src="./img/Monocle-Transparent-Image.png" className="alfred" alt="Alfr3d Logo"></img>
        <h1 className="title">Create An Account</h1>
        <form>
          <label>Username:</label><br/>
          <input onChange={this.handleChange} id='username' type="text" value={this.state.username}></input><br/>
          <label>Password:</label><br/>
          <input onChange={this.handleChange} id='password' type="password" value={this.state.password}></input><br/>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default CreateAccount;

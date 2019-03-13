import React from 'react';
import LandingPage from './LandingPage'
import TradingPage from './TradingPage'
import CreateAccount from './CreateAccount'
import Login from './Login'

class App extends React.Component {
  constructor(props){
    super(props);
    this.changePage = this.changePage.bind(this);
    this.logIn = this.logIn.bind(this);
    this.state = {
      showLandingPage: true,
      showTradingPage: false,
      showCAPage: false,
      userLoggedIn: false,
      username: '',
    }
  }
  //saves username after login
  logIn = (username)=>{
    this.setState({
      username: username
    })
  }
  //change page functionality to allow site to change views without pagination
  changePage = (page1, page2)=>{
    this.setState({
      [page1]: !this.state[page1],
      [page2]: !this.state[page2]
    })
  }
  render() {
    return (
        <div>
            {this.state.showLandingPage
              ?
              <LandingPage changePage={this.changePage}></LandingPage>
              :
              ''
            }
            {this.state.showTradingPage
              ?
              <TradingPage changePage={this.changePage}></TradingPage>
              :
              ''
            }
            {this.state.showCAPage
              ?
              <CreateAccount changePage={this.changePage}></CreateAccount>
              :
              ''
            }
            {this.state.showLoginPage
              ?
              <Login changePage={this.changePage} logIn={this.logIn}></Login>
              :
              ''
            }
        </div>

    );
  }
}

export default App;

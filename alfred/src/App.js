import React from 'react';
import LandingPage from './LandingPage'
import TradingPage from './TradingPage'
import CreateAccount from './CreateAccount'

class App extends React.Component {
  constructor(props){
    super(props);
    this.changePage = this.changePage.bind(this);
    this.state = {
      showLandingPage: true,
      showTradingPage: false,
      showCAPage: false,
      userLoggedIn: false,
      username: '',
    }
  }
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
        </div>

    );
  }
}

export default App;

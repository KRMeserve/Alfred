import React from 'react';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <img src="./img/Monocle-Transparent-Image.png" className="alfred" alt="Alfr3d Logo"></img>
        <h1 className="title">I'm Alfr3d, Your Trading Bot</h1>
         <a className="collision" href="#" onClick={()=>{this.props.changePage('showLandingPage', 'showTradingPage');}}>
            Let's Trade
        </a>
        <a className="collision" href="#" onClick={()=>{this.props.changePage('showLandingPage', 'showLoginPage');}}>
            Log In
        </a>
      </div>
    );
  }
}

export default LandingPage;

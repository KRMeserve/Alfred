import React from 'react';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <img src="./img/Monocle-Transparent-Image.png" className="alfred"></img>
        <h1 className="title">I'm Alfr3d, Your Trading Bot</h1>
         <a className="collision" onClick={()=>{this.props.changePage('showLandingPage', 'showTradingPage');}}>
            Let's Trade
        </a>
      </div>
    );
  }
}

export default LandingPage;

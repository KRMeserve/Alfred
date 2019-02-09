import React from 'react';

class TradingPage extends React.Component {
  render() {
    return (
      <div className="trading-page">
        <img
          src="./img/Monocle-Transparent-Image.png"
          className="alfred"
          onClick={()=>{this.props.changePage('showLandingPage', 'showTradingPage');}}>
        </img>
        <h1 className="title">These are your saved cryptocurrencies.</h1>
        <div className="stocks">
            <p>Placeholder Stock</p>
            <p>Placeholder Stock</p>
            <p>Placeholder Stock</p>
        </div>
      </div>
    );
  }
}

export default TradingPage;

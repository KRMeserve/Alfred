import React from 'react';

class TradingPage extends React.Component {
  constructor(props){
    super(props);
    this.getCrypto = this.getCrypto.bind(this);
    this.state = {
      cryptoToShow: [],
    }
  }
  componentDidMount(){
    this.getCrypto('btcusdt');
  }
  getCrypto(symbol) {
    fetch('https://alfr3d-db.herokuapp.com/' + symbol).then(response => response.json()).then(crypto =>{
      this.setState({
        cryptoToShow: crypto
      })
    })
  }
  render() {
    return (
      <div className="trading-page">
        <img
          src="./img/Monocle-Transparent-Image.png"
          className="alfred"
          onClick={()=>{this.props.changePage('showLandingPage', 'showTradingPage');}}>
        </img>
        <h1 className="title">These are your saved cryptocurrencies.</h1>
        <p className="instructions">Click on the Symbol to Update the Price</p>
        <div className="stocks">
          {/* <p>{this.state.cryptoToShow[0].symbol}</p> */}
            {this.state.cryptoToShow.map((crypto)=>{
              return(
                <div className="stock">
                  <h3 onClick={()=>{this.getCrypto(crypto.symbol)}}>{crypto.symbol}</h3>
                  <p>Price: {crypto.price}</p>
                </div>
              )
            })}
        </div>
      </div>
    );
  }
}

export default TradingPage;

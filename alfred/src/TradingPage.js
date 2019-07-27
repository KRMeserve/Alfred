import React from 'react';
import TradingPageList from './TradingPageList'

class TradingPage extends React.Component {
  constructor(props){
    super(props);
    this.getCrypto = this.getCrypto.bind(this);
    this.getCryptoInformation = this.getCryptoInformation.bind(this);
    this.getSavedCrypto = this.getSavedCrypto.bind(this);
    this.state = {
      cryptoToShow: [],
    }
  }
  getCryptoInformation(array){
    for (let i = 0; i < array.length; i++) {
      this.getCrypto(this.state.cryptoToShow[i], i);
    }
  };

  getSavedCrypto(username){
    const fetchURL = `https://alfr3d-db.herokuapp.com/user?username=${username}`;

    const findSavedCrypto = (url = '', data = {})=>{
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
    };
    findSavedCrypto(fetchURL, {username: username})
      .then(data => {
        let cryptoList = [];
        for (let i = 0; i < data.length; i++) {
          cryptoList.push(data[i]);
        }
        this.setState({
          cryptoToShow: cryptoList
        });
        this.getCryptoInformation(this.state.cryptoToShow)
      })
      .catch(error => console.log(error));
  }

  //Runs as soon as the component finishes loading
  componentDidMount(){
    this.getSavedCrypto(this.props.username);
    // this.getCrypto('btcusdt');
  }
  //Query the server for information regarding whatever crypto symbol is requested in the argument.
  getCrypto(symbol, i) {
    fetch('https://alfr3d-db.herokuapp.com/' + symbol).then(response => response.json()).then(crypto =>{
      let cryptoToPrint = this.state.cryptoToShow;
      cryptoToPrint[i] = crypto;
      this.setState({
        cryptoToShow: cryptoToPrint
      })
    })
  }
  render() {
    return (
      <div className="trading-page">
        <img
          src="./img/Monocle-Transparent-Image.png"
          className="alfred" alt="Alfr3d Logo"
          onClick={()=>{this.props.changePage('showLandingPage', 'showTradingPage');}}>
        </img>
        <h1 className="title">These are your saved cryptocurrencies.</h1>
        <p className="instructions">Click on the Symbol to Update the Price</p>
        <div className="stocks">
          {/* <p>{this.state.cryptoToShow[0].symbol}</p> */}
          {this.state.cryptoToShow.map((crypto)=>{
            return <TradingPageList crypto={crypto} />
          })}
        </div>
      </div>
    );
  }
}

export default TradingPage;

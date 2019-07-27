import React from 'react';

class TradingPageList extends React.Component {
  render() {
    return (
      <div>
        <div className="stock">
          <h3>{this.props.crypto[0].symbol}</h3>
          <p>Price: {this.props.crypto[0].price}</p>
        </div>
      </div>
    )
  }
}

export default TradingPageList;

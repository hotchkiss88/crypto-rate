import React from "react";
import "./CryptoList.css";

function CryptoList(props) {
  let cryptoList = props.cryptoList;
  let liElements = cryptoList.map((cryptoObject) => {
    return (
      <li key={cryptoObject.currency}>
        <span className="CryptoLabel">Last rate:</span>
        <span className={`CryptoRate ${cryptoObject.cssClass}`}>
          {cryptoObject.lastRate} {cryptoObject.htmlArray}
        </span>
        <span className="CurrencyTicker">{cryptoObject.currency}</span>
        <span className="CurrencySymbol">[{cryptoObject.symbol}]</span>
      </li>
    );
  });

  return (
    <div className="CryptoList">
      <ul className="TheList">{liElements}</ul>
    </div>
  );
}

export default CryptoList;

import React, { useEffect, useState } from "react";
import axios from "axios";

/**
 * @author
 * @function section
 **/

const Section = (props) => {
  const [data, SetData] = useState(null);
  const [sellBtc, setSellBtc] = useState(null);
  const [sellEther, setSellEther] = useState(null);
  const [sellLit, setSellLit] = useState(null);
  const [sellDoge, setSellDoge] = useState(null);
  const [sellBtcCash, setSellBtcCash] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("https://api.alternative.me/v2/ticker/")
        .then((res) => {
          let myMap = new Map(Object.entries(res.data.data));
          console.log(myMap);
          let data = [];
          for (const value of myMap.values()) {
            data.push(value);
          }
          SetData(data);
          console.log("fetching");
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetch();
  }, []);
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("https://api.alternative.me/v2/ticker/")
        .then((res) => {
          let myMap = new Map(Object.entries(res.data.data));
          console.log(myMap);
          let data = [];
          for (const value of myMap.values()) {
            data.push(value);
          }
          SetData(data);
          console.log("fetching");
        })
        .catch((e) => {
          console.log(e);
        });
    };

    const timer = setInterval(() => {
      fetch();
    }, 1000000);
  }, []);
  const handleChangeSell = (amount) => {
    setSellBtc(amount / data[0].quotes.USD.price);
    setSellEther(amount / data[11].quotes.USD.price);
    setSellDoge(amount / data[3].quotes.USD.price);
    setSellLit(amount / data[2].quotes.USD.price);
    setSellBtcCash(amount / data[32].quotes.USD.price);
  };
  return (
    <div className="section">
      <div className="title">Key Stocks</div>
      <div className="cards">
        <div className="card">
          <div className="head">
            <h3>
              If you sell{" "}
              <input
                onChange={(e) => handleChangeSell(e.target.value)}
                type="number"
              />{" "}
              {""}$
            </h3>
          </div>

          <div className="rates">
            {data ? (
              <>
                <h4>BTC : {sellBtc ? sellBtc : data[0].quotes.USD.price}</h4>
                <h4>
                  ETH :{sellEther ? sellEther : data[11].quotes.USD.price}
                </h4>
                <h4>DOGE : {sellDoge ? sellDoge : data[3].quotes.USD.price}</h4>
                <h4>LTC : {sellLit ? sellLit : data[2].quotes.USD.price}</h4>
                <h4>
                  BCHA:{sellBtcCash ? sellBtcCash : data[32].quotes.USD.price}
                </h4>
              </>
            ) : null}
          </div>
          <button>How to sell</button>
        </div>
        <div className="card">
          <div className="head">
            <h3>Crypto withdrawal fees</h3>
          </div>

          <div className="rates">
            <h4>BTC : 0.0551110000000000</h4>
            <h4>ETH : 0.0551110000000000</h4>
            <h4>DOGE : 0.0551110000000000</h4>
            <h4>ADA : 0.0551110000000000</h4>
            <h4>DOT : 0.0551110000000000</h4>
          </div>
          <button>How to withdrawal</button>
        </div>
        <div className="card">
          <div className="head">
            <h3>
              If you buy 1 $ <input type="number" />
            </h3>
          </div>

          <div className="rates">
            <h4>BTC : 0.0551110000000000</h4>
            <h4>ETH : 0.0551110000000000</h4>
            <h4>DOGE : 0.0551110000000000</h4>
            <h4>ADA : 0.0551110000000000</h4>
            <h4>DOT : 0.0551110000000000</h4>
          </div>
          <button>How to buy</button>
        </div>
      </div>
    </div>
  );
};

export default Section;

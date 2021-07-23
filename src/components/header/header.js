import React from "react";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <div className="header">
      <div className="image"></div>
      <div className="details">
        <h1>HachiBot</h1>
        <p>
          Buy/sell <b>TF keys</b> with <b>Bitcoin</b>, <b>Ethereum</b>,{" "}
          <b>Litcoin</b>, <b>Dogecoin</b>, <b>Bitcoin cash</b>, <b>Cardano</b>,{" "}
          <b>Polkadot</b>, <b>USD</b>, it is easy, safe and reliable !
        </p>
        <button>Add friends</button>
      </div>
    </div>
  );
};

export default Header;

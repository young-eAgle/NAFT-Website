import React from 'react';
import logo1 from './assets/images/single-create-sell-item-1.png';
import logo2 from './assets/images/single-create-sell-item-2.png';
import logo3 from './assets/images/single-create-sell-item-3.png';
import logo4 from './assets/images/single-create-sell-item-4.png';

const Sell = () => {
  return (
    <div>
      <section className="sell-section" id="create">
        <h1 className="sell-head newest">Create and Sell your NFTs</h1>
        <div className="sell-center">
          <div className="wallet">
            <div className="number">1</div>
            <div className="wallet-icon">
              <img src={logo1} alt="" />
            </div>
            <h2 className="heading">Set up Your Wallet</h2>
            <p className="info-text">
              There are many variations of passagi ipsum available but the
              majority have eration in some form by injected
            </p>
          </div>

          {/* <!-- end of item --> */}

          <div className="wallet">
            <div className="number">2</div>
            <div className="wallet-icon">
              <img src={logo2} alt="" className="wallet-2" />
            </div>
            <h2 className="heading">Create your Collection</h2>
            <p className="info-text">
              There are many variations of passagi ipsum available but the
              majority have eration in some form by injected
            </p>
          </div>
          {/* <!-- end of item --> */}

          <div className="wallet">
            <div className="number">3</div>
            <div className="wallet-icon">
              <img src={logo3} alt="" />
            </div>
            <h2 className="heading">
              <br />
              Add your NFT's
            </h2>
            <p className="info-text">
              There are many variations of passagi ipsum available but the
              majority have eration in some form by injected
            </p>
          </div>
          {/* <!-- start of Item --> */}
          <div className="wallet">
            <div className="number">4</div>
            <div className="wallet-icon">
              <img src={logo4} alt="" />
            </div>
            <h2 className="heading">
              <br />
              Sell your NFT's
            </h2>
            <p className="info-text">
              There are many variations of passagi ipsum available but the
              majority have eration in some form by injected
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sell;

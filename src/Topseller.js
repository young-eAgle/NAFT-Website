import React from 'react';
import seller1 from './assets/images/seller-01.png';
import seller2 from './assets/images/seller-02.png';
import seller3 from './assets/images/seller-03.png';
import seller4 from './assets/images/seller-04.png';
import seller5 from './assets/images/seller-05.png';
import seller6 from './assets/images/seller-06.png';
import seller7 from './assets/images/seller-07.png';
import seller8 from './assets/images/seller-08.png';
import seller9 from './assets/images/seller-03.png';
import seller10 from './assets/images/seller-04.png';

const Topseller = () => {
  return (
    <div>
      <section className="topseller-section newItems-section">
        <h1 className="newest">Top seller in 1 Day</h1>
        <div className="topseller-center">
          <div className="user">
            <div className="number-div">
              <p>1</p>
            </div>
            <div className="avatar">
              <img src={seller1} alt="" className="avatar-img" />
            </div>
            <div className="balance">
              <h5>Will Smith</h5>
              <p>$250000</p>
            </div>
          </div>

          {/* <!-- items ends now --> */}
          <div className="user">
            <div className="number-div">
              <p>2</p>
            </div>
            <div className="avatar">
              <img src={seller2} alt="" className="avatar-img" />
            </div>
            <div className="balance">
              <h5>Joseph Aspadin</h5>
              <p>$430000</p>
            </div>
          </div>

          {/* <!-- item ends now --> */}

          <div className="user">
            <div className="number-div">
              <p>3</p>
            </div>
            <div className="avatar">
              <img src={seller3} alt="" className="avatar-img" />
            </div>
            <div className="balance">
              <h5>Jack Reacher</h5>
              <p>$290000</p>
            </div>
          </div>

          {/* <!-- item ends now --> */}

          <div className="user">
            <div className="number-div">
              <p>4</p>
            </div>
            <div className="avatar">
              <img src={seller4} alt="" className="avatar-img" />
            </div>
            <div className="balance">
              <h5>Harry Pink</h5>
              <p>$510000</p>
            </div>
          </div>

          {/* <!-- item ends now --> */}

          <div className="user">
            <div className="number-div">
              <p>5</p>
            </div>
            <div className="avatar">
              <img src={seller5} alt="" className="avatar-img" />
            </div>
            <div className="balance">
              <h5>David Kim</h5>
              <p>$177000</p>
            </div>
          </div>

          {/* <!-- item ends now --> */}

          <div className="user">
            <div className="number-div">
              <p>6</p>
            </div>
            <div className="avatar">
              <img src={seller7} alt="" className="avatar-img" />
            </div>
            <div className="balance">
              <h5>Back Bencher</h5>
              <p>$50000</p>
            </div>
          </div>

          {/* <!-- item ends now --> */}

          <div className="user">
            <div className="number-div">
              <p>7</p>
            </div>
            <div className="avatar">
              <img src={seller8} alt="" className="avatar-img" />
            </div>
            <div className="balance">
              <h5>Back Bencher</h5>
              <p>$430000</p>
            </div>
          </div>

          {/* <!-- item ends now --> */}

          <div className="user">
            <div className="number-div">
              <p>8</p>
            </div>
            <div className="avatar">
              <img src={seller6} alt="" className="avatar-img" />
            </div>
            <div className="balance">
              <h5>Peter Parker</h5>
              <p>$450000</p>
            </div>
          </div>

          {/* <!-- item ends now --> */}

          <div className="user">
            <div className="number-div">
              <p>9</p>
            </div>
            <div className="avatar">
              <img src={seller9} alt="" className="avatar-img" />
            </div>
            <div className="balance">
              <h5>Daywane Rock</h5>
              <p>$930000</p>
            </div>
          </div>

          {/* <!-- item ends now --> */}

          <div className="user">
            <div className="number-div">
              <p>10</p>
            </div>
            <div className="avatar">
              <img src={seller10} alt="" className="avatar-img" />
            </div>
            <div className="balance">
              <h5>Bad Boys</h5>
              <p>$90000</p>
            </div>
          </div>

          {/* <!-- item ends now --> */}
        </div>
      </section>
    </div>
  );
};

export default Topseller;

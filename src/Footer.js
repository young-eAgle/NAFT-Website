import React from 'react';
import img from './assets/images/logo.png';
const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <section className="footer-section" id="about">
          <div className="footer-center">
            <div className="community">
              <div className="join-community">
                <img src={img} alt="logo" />
                <p className="footer-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. eos
                  tempora hic veniam omnis sit nisi vel sunt cum.
                </p>

                <h4>Join th Community</h4>
                <div className="link">
                  <ul>
                    <li>
                      <a href="https://www.github.com ">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com ">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com ">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="marketplace">
              <h3>MarketPlace</h3>
              <ul className="list">
                <li>Gaming</li>
                <li>Products</li>
                <li>All NFTs</li>
                <li>Social Network</li>
                <li>Domains Name</li>
                <li>collections</li>
              </ul>
            </div>
            <div className="explore">
              <h3>Explore</h3>
              <ul className="list">
                <li>Featured Drops</li>

                <li>Live Auctions</li>

                <li>All NFTs</li>

                <li>Top seller</li>

                <li>item Details</li>
              </ul>
            </div>
            <div className="support">
              <h3>Support</h3>
              <ul className="list">
                <li>Setting & Privacy</li>
                <li>Help and Support</li>
                <li>Live Auctions</li>
                <li>item Details</li>
                <li>24/7 Support</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </section>
      </footer>
      <nav className="footer-nav">
        <div className="nav-container">
          <div className="copy-right">
            <p>
              Copyright &copy;2022{' '}
              <span className="coder-gang">Coder's gang</span>
            </p>
          </div>
          <div className="code">
            <p>
              Created by <span className="coder-gang">Coder's gang</span>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;

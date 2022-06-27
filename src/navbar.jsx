import React, { useEffect, useState } from 'react';
import img from './assets/images/logo.png';
import logo from './assets/images/hero-banner.jpg';

const Navbar = () => {
  const [links, setLinks] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <div>
      <section className="container">
        <header>
          <nav className="navbar">
            <img src={img} alt="logo" className="logo" />
            {/*  */}
            <div className="links-container">
              <ul className={`${links ? 'show-links links' : 'links'}`}>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>

                <li>
                  <a href="#explore">Explore</a>
                </li>

                <li>
                  <a href="#create">Create</a>
                </li>
                <li>
                  <a href="#collection">Collections</a>
                </li>

                <li>
                  <a href="#create">Blog</a>
                </li>

                <li>
                  <a href="#about">Contact</a>
                </li>
                <div className="close-btn" onClick={() => setLinks(false)}>
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </ul>
            </div>
            <div className="signIn">
              <input type="text" placeholder="search" className="search" />
              <button className="signIn-btn" onClick={() => setSignIn(true)}>
                SIGN IN
              </button>
            </div>
            <div className="bar-btn" onClick={() => setLinks(true)}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </nav>
          <hr />
          <section className="singIn-section">
            <div
              className={`${
                signIn ? 'section-overlay show-form' : 'section-overlay'
              }`}
            >
              <div className="signIn-container">
                <form action="">
                  <div className="name-section">
                    <label htmlFor="name" className="label">
                      Name
                    </label>
                    <br />
                    <input type="text" id="name" placeholder="name" />
                  </div>

                  <div className="email-section">
                    <label htmlFor="name" className="label">
                      Email
                    </label>
                    <br />
                    <input type="text" id="name" placeholder="email" />
                  </div>

                  <div className="password-section">
                    <label htmlFor="password" className="label">
                      Password
                    </label>
                    <br />
                    <input type="text" id="name" placeholder="password" />
                  </div>
                  <button
                    className="btn form-btn"
                    onClick={() => setSignIn(false)}
                  >
                    sign in
                  </button>
                  <button className="hide-btn" onClick={() => setSignIn(false)}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </form>
              </div>
            </div>
          </section>
        </header>

        <section className="home-section" id="home">
          <div className="home-1">
            <h1>
              Discover Digital Art Sell Your Specific{' '}
              <span className="nft">NFT</span>
            </h1>

            <p>
              Partner with one of the world's largest retailer to showcase your
              brand and products
            </p>
            <div className="buttons">
              <a href="#explore">
                {' '}
                <button>Explore More</button>
              </a>
              <a href="#create">
                <button>Create Now</button>
              </a>
            </div>
          </div>
          <div className="images">
            <img src={logo} alt="" />
          </div>
        </section>
        <div className={`${scroll ? 'backtoTop-show backtoTop' : 'backtoTop'}`}>
          <a href="#home">
            <button>
              <i className="fa-solid fa-circle-arrow-up"></i>
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Navbar;

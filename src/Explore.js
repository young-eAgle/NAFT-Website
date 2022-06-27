import React from 'react';
import explore1 from './assets/images/explore-product-1.jpg';
import explore2 from './assets/images/explore-product-2.jpg';
import explore3 from './assets/images/explore-product-3.jpg';
import explore4 from './assets/images/explore-product-4.jpg';
import explore5 from './assets/images/explore-product-5.jpg';
import explore6 from './assets/images/explore-product-6.jpg';
import explore7 from './assets/images/explore-product-7.jpg';
import explore8 from './assets/images/explore-product-8.jpg';

import bid1 from './assets/images/bidding-user.png';

const Explore = () => {
  return (
    <div>
      <section className="explore-section newItems-section" id="explore">
        <div className="newest">
          <h1>Explore Product</h1>
          <button className="btn">Explore</button>
        </div>

        <div className="items-center">
          {/* <!-- itemm start --> */}
          <ul className="single-item">
            <li>
              <div className="product-card">
                <img src={explore1} alt="img" className="item-img" />
                <div className="img-actions">
                  <div className="action-1">
                    <button className="menu">
                      <i className="fa-solid fa-ellipsis"></i>
                    </button>
                    <button className="wish-list-btn">
                      <i className="fa-solid fa-heart"></i>
                    </button>
                  </div>
                  <button className="bid-btn">Place Bid</button>
                </div>
                <div className="product-content">
                  <h3 className="item-name">Man Riding on the Diamond Bull</h3>
                  <div className="product-author">
                    <div className="author-container">
                      <img src={bid1} alt="" className="bid-user" />
                      <div className="author-content">
                        <h5 className="author-Name">Jack sparrow</h5>
                        <h6 className="userName">@jackSparrow</h6>
                      </div>

                      <div className="product-price">
                        <p className="price">0.587ETH</p>
                        <p className="label">current Bid</p>
                      </div>
                    </div>
                    <div className="product-footer">
                      <p>12+ Place Bid</p>
                      <button className="newBid-btn">New</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          {/* <!-- item ends --> */}

          <ul className="single-item">
            <li>
              <div className="product-card">
                <img src={explore2} alt="img" className="item-img img-2" />
                <div className="img-actions">
                  <div className="action-1">
                    <button className="menu">
                      <i className="fa-solid fa-ellipsis"></i>
                    </button>
                    <button className="wish-list-btn">
                      <i className="fa-solid fa-heart"></i>
                    </button>
                  </div>
                  <button className="bid-btn">Place Bid</button>
                </div>
                <div className="product-content">
                  <h3 className="item-name">Man Riding on the Diamond Bull</h3>
                  <div className="product-author">
                    <div className="author-container">
                      <img src={bid1} alt="" className="bid-user" />
                      <div className="author-content">
                        <h5 className="author-Name">Jack sparrow</h5>
                        <h6 className="userName">@jackSparrow</h6>
                      </div>

                      <div className="product-price">
                        <p className="price">0.587ETH</p>
                        <p className="label">current Bid</p>
                      </div>
                    </div>
                    <div className="product-footer">
                      <p>12+ Place Bid</p>
                      <button className="newBid-btn">New</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          {/* <!-- item ends --> */}

          <ul className="single-item">
            <li>
              <div className="product-card">
                <img src={explore3} alt="img" className="item-img" />
                <div className="img-actions">
                  <div className="action-1">
                    <button className="menu">
                      <i className="fa-solid fa-ellipsis"></i>
                    </button>
                    <button className="wish-list-btn">
                      <i className="fa-solid fa-heart"></i>
                    </button>
                  </div>
                  <button className="bid-btn">Place Bid</button>
                </div>
                <div className="product-content">
                  <h3 className="item-name">Man Riding on the Diamond Bull</h3>
                  <div className="product-author">
                    <div className="author-container">
                      <img src={bid1} alt="" className="bid-user" />
                      <div className="author-content">
                        <h5 className="author-Name">Jack sparrow</h5>
                        <h6 className="userName">@jackSparrow</h6>
                      </div>

                      <div className="product-price">
                        <p className="price">0.587ETH</p>
                        <p className="label">current Bid</p>
                      </div>
                    </div>
                    <div className="product-footer">
                      <p>12+ Place Bid</p>
                      <button className="newBid-btn">New</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          {/* <!-- item ends --> */}

          <ul className="single-item">
            <li>
              <div className="product-card">
                <img src={explore4} alt="img" className="item-img" />
                <div className="img-actions">
                  <div className="action-1">
                    <button className="menu">
                      <i className="fa-solid fa-ellipsis"></i>
                    </button>
                    <button className="wish-list-btn">
                      <i className="fa-solid fa-heart"></i>
                    </button>
                  </div>
                  <button className="bid-btn">Place Bid</button>
                </div>
                <div className="product-content">
                  <h3 className="item-name">Man Riding on the Diamond Bull</h3>
                  <div className="product-author">
                    <div className="author-container">
                      <img src={bid1} alt="" className="bid-user" />
                      <div className="author-content">
                        <h5 className="author-Name">Jack sparrow</h5>
                        <h6 className="userName">@jackSparrow</h6>
                      </div>

                      <div className="product-price">
                        <p className="price">0.587ETH</p>
                        <p className="label">current Bid</p>
                      </div>
                    </div>
                    <div className="product-footer">
                      <p>12+ Place Bid</p>
                      <button className="newBid-btn">New</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          {/* <!-- item ends --> */}

          <ul className="single-item">
            <li>
              <div className="product-card">
                <img src={explore5} alt="img" className="item-img" />
                <div className="img-actions">
                  <div className="action-1">
                    <button className="menu">
                      <i className="fa-solid fa-ellipsis"></i>
                    </button>
                    <button className="wish-list-btn">
                      <i className="fa-solid fa-heart"></i>
                    </button>
                  </div>
                  <button className="bid-btn">Place Bid</button>
                </div>
                <div className="product-content">
                  <h3 className="item-name">Man Riding on the Diamond Bull</h3>
                  <div className="product-author">
                    <div className="author-container">
                      <img src={bid1} alt="" className="bid-user" />
                      <div className="author-content">
                        <h5 className="author-Name">Jack sparrow</h5>
                        <h6 className="userName">@jackSparrow</h6>
                      </div>

                      <div className="product-price">
                        <p className="price">0.587ETH</p>
                        <p className="label">current Bid</p>
                      </div>
                    </div>
                    <div className="product-footer">
                      <p>12+ Place Bid</p>
                      <button className="newBid-btn">New</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          {/* <!-- item ends --> */}

          <ul className="single-item">
            <li>
              <div className="product-card">
                <img src={explore6} alt="img" className="item-img" />
                <div className="img-actions">
                  <div className="action-1">
                    <button className="menu">
                      <i className="fa-solid fa-ellipsis"></i>
                    </button>
                    <button className="wish-list-btn">
                      <i className="fa-solid fa-heart"></i>
                    </button>
                  </div>
                  <button className="bid-btn">Place Bid</button>
                </div>
                <div className="product-content">
                  <h3 className="item-name">Man Riding on the Diamond Bull</h3>
                  <div className="product-author">
                    <div className="author-container">
                      <img src={bid1} alt="" className="bid-user" />
                      <div className="author-content">
                        <h5 className="author-Name">Jack sparrow</h5>
                        <h6 className="userName">@jackSparrow</h6>
                      </div>

                      <div className="product-price">
                        <p className="price">0.587ETH</p>
                        <p className="label">current Bid</p>
                      </div>
                    </div>
                    <div className="product-footer">
                      <p>12+ Place Bid</p>
                      <button className="newBid-btn">New</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          {/* <!-- item ends --> */}

          <ul className="single-item">
            <li>
              <div className="product-card">
                <img src={explore7} alt="img" className="item-img" />
                <div className="img-actions">
                  <div className="action-1">
                    <button className="menu">
                      <i className="fa-solid fa-ellipsis"></i>
                    </button>
                    <button className="wish-list-btn">
                      <i className="fa-solid fa-heart"></i>
                    </button>
                  </div>
                  <button className="bid-btn">Place Bid</button>
                </div>
                <div className="product-content">
                  <h3 className="item-name">Man Riding on the Diamond Bull</h3>
                  <div className="product-author">
                    <div className="author-container">
                      <img src={bid1} alt="" className="bid-user" />
                      <div className="author-content">
                        <h5 className="author-Name">Jack sparrow</h5>
                        <h6 className="userName">@jackSparrow</h6>
                      </div>

                      <div className="product-price">
                        <p className="price">0.587ETH</p>
                        <p className="label">current Bid</p>
                      </div>
                    </div>
                    <div className="product-footer">
                      <p>12+ Place Bid</p>
                      <button className="newBid-btn">New</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          {/* <!-- item ends --> */}

          <ul className="single-item">
            <li>
              <div className="product-card">
                <img src={explore8} alt="img" className="item-img" />
                <div className="img-actions">
                  <div className="action-1">
                    <button className="menu">
                      <i className="fa-solid fa-ellipsis"></i>
                    </button>
                    <button className="wish-list-btn">
                      <i className="fa-solid fa-heart"></i>
                    </button>
                  </div>
                  <button className="bid-btn">Place Bid</button>
                </div>
                <div className="product-content">
                  <h3 className="item-name">Man Riding on the Diamond Bull</h3>
                  <div className="product-author">
                    <div className="author-container">
                      <img src={bid1} alt="" className="bid-user" />
                      <div className="author-content">
                        <h5 className="author-Name">Jack sparrow</h5>
                        <h6 className="userName">@jackSparrow</h6>
                      </div>

                      <div className="product-price">
                        <p className="price">0.587ETH</p>
                        <p className="label">current Bid</p>
                      </div>
                    </div>
                    <div className="product-footer">
                      <p>12+ Place Bid</p>
                      <button className="newBid-btn">New</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          {/* <!-- item ends --> */}
        </div>
      </section>
    </div>
  );
};

export default Explore;

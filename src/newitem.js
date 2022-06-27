import img1 from './assets/images/new-item-1.jpg';
import img2 from './assets/images/new-item-2.jpg';
import img3 from './assets/images/new-item-3.jpg';
import img4 from './assets/images/new-item-4.jpg';

import bidUser from './assets/images/bidding-user.png';

const Newitem = () => {
  const heart = document.querySelectorAll('.wish-list-btn');
  for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener('click', (e) => {
      e.target.classList.add('red');
    });
  }

  return (
    <div>
      <section className="newItems-section " id="collection">
        <div className="newest">
          <h1>Newest Items</h1>
          <button className="btn">Veiw All</button>
        </div>
        {/* <!-- itemm start --> */}
        <div className="items-center">
          <ul className="single-item">
            <li>
              <div className="product-card">
                <img src={img1} alt="img" className="item-img" />
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
                      <img src={bidUser} alt="" className="bid-user" />
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

          {/* <!-- item ends -->
          <!-- item start  --> */}

          <ul className="single-item">
            <li>
              <div className="product-card">
                <img src={img2} alt="img" className="item-img" />
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
                      <img src={bidUser} alt="" className="bid-user" />
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

          {/* <!--item ends  -->
          <!-- item start --> */}

          <ul className="single-item">
            <li>
              <div className="product-card">
                <img src={img3} alt="img" className="item-img" />
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
                      <img src={bidUser} alt="" className="bid-user" />
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

          {/* <!-- item ends  -->
          <!-- item start --> */}

          <ul className="single-item">
            <li>
              <div className="product-card">
                <img src={img4} alt="img" className="item-img" />
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
                      <img src={bidUser} alt="" className="bid-user" />
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

          {/* <!-- items ends --> */}
        </div>
      </section>
    </div>
  );
};

export default Newitem;

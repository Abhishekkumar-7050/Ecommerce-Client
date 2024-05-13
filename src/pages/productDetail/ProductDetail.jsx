import React from "react";
import dummyImg  from '../../assets/ProductDetail.jpg';
import './ProductDetail.scss';
function ProductDetail() {
  const currValue = 1;
  return (
    <div className="ProductDetail container">
      <div className="productDetailLeft">
        <div className="imageContainer">
          <div className="imageContent">
            <img src={dummyImg} alt="Product Detail Image" />
          </div>
        </div>
      </div>
      <div className="productDetailRight">
        <div className="top">
          <div className="heading">
            <h2>
              {" "}
              SINCE 7 STORE Lionel Messi Legendary Career Framed Poster For
              Gifting/For Room Decor/For Football Fans (A4, BLACK)
            </h2>
          </div>
          <h2>₹ 499</h2>
          <div className="description">
            <p>
              Lionel Messi & Cristiano Ronaldo Motivational Quotes Wall
              Posters,(Football, Sports Poster), Pack of 04 Paper Print (18 inch
              X 12 inch, Each), Rolled .
            </p>
          </div>
          <div className="priceChanger">
                  <div className="decrement commen">
                    -
                  </div>
                  <div className="currValue commen">{currValue}</div>
                  <div className="increment commen">
                    +
                  </div>
              </div>
          <div className="addToCartButton">
            <button className="primary-btn"> ADD TO CART</button>
          </div>
        </div>

        <hr />
        <div className="bootom">
          <div className="policies">
            <ul>
              <li>
                <h4>
                  Product is eligible for replacement within 7 days of delivery
                  if it's damaged/defective/different product delivered to you.
                </h4>
              </li>
              <li>
                <h4>
                  Physical Damage, Wrong, Missing Items: Flipkart may contact
                  you to ascertain the damaged/missing product prior to issuing
                  the replacement.
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

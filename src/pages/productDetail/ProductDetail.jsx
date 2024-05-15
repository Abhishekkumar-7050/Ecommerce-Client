import React, { useEffect, useState } from "react";
import dummyImg  from '../../assets/ProductDetail.jpg';
import './ProductDetail.scss';
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import Loader from "../../components/loader/Loader";
function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState();
  const productKey = params.productId;
  console.log("param is product key on product detail page-> ", params.productId);
  const currValue = 1;




  async function fetchData(){
     const productDetailRespons = await axiosClient.get(`/products?filters[Key][$eq]=${productKey}&populate=*`);
     if(productDetailRespons?.data?.data.length >0){
     setProduct(productDetailRespons?.data?.data[0]);
      
     }
     console.log("Api respons for Product Detail Page",productDetailRespons?.data?.data[0]);
  }

  useEffect(()=>{
    setProduct(null);
    fetchData();
  },[params]);

  if(!product){
    return <Loader/>;
  }


  return (
    <div className="ProductDetail container">
      <div className="productDetailLeft">
        <div className="imageContainer">
          <div className="imageContent">
            {/* <img src={dummyImg} alt="Product Detail Image" /> */}
            <img src={product?.attributes?.Image?.data?.attributes?.url} alt="Product Detail Image" />

          </div>
        </div>
      </div>
      <div className="productDetailRight">
        <div className="top">
          <div className="heading">
            <h2>
              {" "}
          {product?.attributes?.Title}
            </h2>
          </div>
          {}
          <h2>₹ {product?.attributes?.Price}</h2>
          <div className="description">
            <p>
              {product?.attributes?.Description
}
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
                  Physical Damage, Wrong, Missing Items: Posterkart may contact
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

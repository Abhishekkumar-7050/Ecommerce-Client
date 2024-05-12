import React from "react";
import "./Home.scss";
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import Products from "../../components/product/Products";

function Home() {
  return (
    <div className="Home">
      <Hero />
      <section className="collection container">
        <div className="info">
          <h2 className="heading"> Shope by Categories</h2>
          <p className="subheading">
            {" "}
            Shope from the best , our File and TV Posters Collections.
          </p>
        </div>

        <div className="content">
          <Category />
          <Category />
          <Category />
        </div>
      </section>

      <section className="collection container">
        <div className="info">
          <h2 className="heading"> Our top picks</h2>
          <p className="subheading">All new design , same old details</p>
        </div>

        <div className="content">
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
        </div>
      </section>
      

    </div>
  );
}

export default Home;

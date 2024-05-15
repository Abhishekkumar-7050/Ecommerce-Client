import React, { useEffect, useState } from "react";
import './Categories.scss'
import Products from "../../components/product/Products";
import { useNavigate, useParams } from "react-router-dom";

function Categories() {
const navigate = useNavigate();
const params = useParams();
const [catagoryId,setCategoryId] = useState();

console.log("params is", params);

  const catagoryList = [
    {
      id: "comics",
      value: "Comics",
    },
    {
      id: "tv-shows",
      value: "TV-Shows",
    },
    {
      id: "sports",
      value: "sports",
    },
  ];

  useEffect(()=> {
    setCategoryId(params.catagoryId)
  },[params]) ;

  

  function updateCategory(e) {
    navigate(`/category/${e.target.value}`)

  }

  return (
    <div className="Categories container ">
      <div className="categoriesTop">
        <div className="categoriesTopleft">
          <h1 className="categoriesHeading">Explore All Print And Art Work</h1>
          <p className="categorisTitle">
            India's largest collection of wall poster for your bedroom , living
            room , kids room , kitchen and posters & art prints at high quality
            and low price gauranteed
          </p>
        </div>
        <div className="CategoriesTopRight">
          <div className="sort">
          <div className="sortHeading">Sort By</div>
          <div className="sortCheckBox">
            <select className="selectSortBy" name="sortBy" id="sortBy">
              <option value="relevance">Relevance</option>
              <option value="newestFirst">Newest First</option>
              <option value="lowToHigh">price - Low To High</option>
            </select>
          </div>
          </div>
        </div>
      </div>
      <div className="categoriesBottom">
        <div className="categoriesBottomLeft">
          <div className="categoriesFilterBox">
            <h3>Catagory</h3>
            {catagoryList.map((item) => {
              return (
                <div id={item.id}>
                  <input
                    name="categoyy"
                    type="radio"
                    value={item.id}
                    checked={item.id === catagoryId}
                    onChange={updateCategory}
                  />
                  <label htmlFor={item.id}>{item.value}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="categoriesBottomRight">
          <div className="categoriesProduct ">
          <Products/>
          <Products/>
          <Products/>
          <Products/>
          <Products/>
          <Products/>
          <Products/>
          <Products/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;

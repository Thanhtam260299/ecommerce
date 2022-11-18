import React, { useEffect, useState } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("all");
  let componentMouted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div className="row">
        <div className="col-md-3 ">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3 ">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3 ">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3 ">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3 ">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3 ">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3 ">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3 ">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3 ">
          <Skeleton height={350} />
        </div>
      </div>
    );
  };

  const filterProduct = (cate, e) => {
    const updatedList = data.filter((x) => x.category === cate);
    e.target.style.backgroundColor = "red";
    setActive(cate);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark  me-2"
            onClick={() => {
              setFilter(data);
              setActive("all");
            }}
            style={
              active === "all"
                ? { backgroundColor: "#212529", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={(e) => filterProduct("men's clothing", e)}
            style={
              active === "men's clothing"
                ? { backgroundColor: "#212529", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={(e) => filterProduct("women's clothing", e)}
            style={
              active === "women's clothing"
                ? { backgroundColor: "#212529", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={(e) => filterProduct("jewelery", e)}
            style={
              active === "jewelery"
                ? { backgroundColor: "#212529", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={(e) => filterProduct("electronics", e)}
            style={
              active === "electronics"
                ? { backgroundColor: "#212529", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
          >
            Electronic
          </button>
        </div>
        <div className="row">
          {filter.map((product, index) => {
            return (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card h-100 text-center p-4">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5
                      className="card-title mb-0"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {product.title}
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy now
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="container mb-5 pb-3 mt-8" style={{ marginTop: "102px" }}>
      <div className="row">
        <div className="col-12 mb-5">
          <h2 className="display-6 fw-bolder text-center">Latest products</h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </div>
  );
}

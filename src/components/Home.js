import React from "react";
import Products from "./Products";

function Home() {
  return (
    <>
      <div
        className="hero"
        style={{ marginTop: "77px", marginBottom: "-50px" }}
      >
        <div className="card text-bg-dark border-0 ">
          <img
            src="http://www.tashop.vn/templates/pictures/galleries/1480923460_slide-2-tashop.vn.jpg"
            className="card-img"
            alt="..."
            height="550px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">
                NEW SEASON ARRIVALS
              </h5>
              <p className="card-text lead fs-2">CHECK OUL ALL THE TRENDS</p>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
}

export default Home;

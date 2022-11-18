import React from "react";

export default function Contact() {
  return (
    <div className="container py-5 " style={{ marginTop: "77px" }}>
      <div className="py-4">
        <h4 className="text-center">Contact us</h4>
        <h2 className="text-center">WHERE YOU CAN FIND US</h2>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <div className="col-md-4">
          <div className="text-center py-4">
            <i class="fa fa-phone fs-2" aria-hidden="true"></i>
          </div>
          <div>
            <p className="text-center mb-1 fs-6 fw-bold"> Telephone</p>
            <p className="text-center">
              loremloremlor emloremloremlore mloremloremlo remloremloreml
              oremloremlorem
            </p>
          </div>
        </div>
        <hr />
        <div className="col-md-4">
          <div className="text-center py-4">
            <i class="fa fa-commenting-o fs-2"></i>
          </div>
          <p className="text-center mb-1 fs-6 fw-bold"> Chat</p>
          <p className="text-center">
            loremloremlor emloremloremlore emloremloremlore mloremloremlo
            remloremloreml
          </p>
        </div>
        <div className="col-md-4">
          <div className="text-center py-4">
            <i class="fa fa-envelope-o fs-2"></i>
          </div>
          <p className="text-center mb-1 fs-6 fw-bold"> Email</p>
          <p className="text-center">
            oremloremlorem emloremloremlore emloremloremlore emloremloremlore
            emloremloremlore
          </p>
        </div>
      </div>
    </div>
  );
}

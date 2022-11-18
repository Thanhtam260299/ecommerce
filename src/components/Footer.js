import React from "react";

import "./Navbar/navbar.scss";

export default function Footer() {
  return (
    <div className="px-4 shadow py-4">
      <div className="row">
        <div className="col-md-8 d-flex">
          <ul className="col-md-4">
            <li className="mb-3 fw-bold fs-6">CONTACT</li>
            <li className="mb-2">
              <a href="#">
                <i class="fa fa-map-marker"></i> 66/26 Trần Văn Kỷ, Phường 14,
                Q.Bình Thạnh, Tphcm
              </a>
            </li>
            <li className="mb-2">
              <a href="#">
                <i class="fa fa-phone"></i> 077.961.3333
              </a>
            </li>
            <li className="mb-2">
              <a href="#">
                <i class="fa fa-envelope-o"></i> tashop01@gmail.com
              </a>
            </li>
            <li className="mb-2">
              <a href="#">
                <i class="fa fa-mobile"></i> 077.961.3333 - 0902.89.83.85
              </a>
            </li>
          </ul>
          <ul className="col-md-4">
            <li className="mb-3 fw-bold fs-6">ABOUT US & MORE</li>
            <li className="mb-2">
              <a href="#">Size Guide</a>
            </li>
            <li className="mb-2">
              <a href="#">Student Discount</a>
            </li>
            <li className="mb-2">
              <a href="#">Discount & Promo Codes</a>
            </li>
            <li className="mb-2">
              <a href="#">Get Exclusive Offers & Updates</a>
            </li>
          </ul>

          <ul className="col-md-4">
            <li className="mb-3 fw-bold fs-6">INFORMATION</li>
            <li className="mb-2">
              <a href="#">Sustainability</a>
            </li>
            <li className="mb-2">
              <a href="#">Clearpay</a>
            </li>
            <li className="mb-2">
              <a href="#">PayPal</a>
            </li>
            <li className="mb-2">
              <a href="#">About Cookies</a>
            </li>
          </ul>
        </div>

        <ul className="col-md-4">
          <li className="mb-3 fw-bold fs-6">SUBSCRIBE! GET AN EXTRA 10% OFF</li>
          <li className="mb-2">
            *Extra 10% discount sent via email to new subscribers only. By
            subscribing, communications from boohoo by email.
          </li>
          <li className="mb-2">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter your mail"
              />
              <button class="btn btn-outline-secondary">
                <i class="fa fa-paper-plane"></i>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

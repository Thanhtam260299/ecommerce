import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart } from "../redux/action";

export default function Cart() {
  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addCart(product));
  };
  const handleDel = (product) => {
    dispatch(delCart(product));
  };
  return (
    <div style={{ marginTop: "77px", minHeight: "60vh" }}>
      {state.length === 0 && (
        <div
          className="py-3 px-5 fs-5 text-center"
          style={{ color: "rgba(0, 0, 0, 0.55)" }}
        >
          Please add your cart!!!
        </div>
      )}
      {state &&
        state.map((product, index) => (
          <div className="container py-5" key={index}>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>

              <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                  {product.qyt} X {product.price} = ${" "}
                  {product.price * product.qyt}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleDel(product)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleAdd(product)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Cart = () => {

    return(
        <>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-md-4">
                    <img src="product.image" alt="product.title" height="200px" width="180px"/>
                </div>
            </div>
            <div className="col-md-4">
                <h3>{}</h3>
                <p className="lead fw-bold">
                     
                </p>
                <button className="btn btn-outline-dark me-4" ><i className="fa fa-minus"></i></button>
                <button className="btn btn-outline-dark" ><i className="fa fa-plus"></i></button>
            </div>
        </div>
        </>
    )
}
export default Cart ;
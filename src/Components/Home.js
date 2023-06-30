import React from "react";
import "./style.css";
import About from "./About.js";
import Books from "./Books.js";
import Donation from "./Donation.js";
import Contact from "./Contact.js";

export default function Home() {
  return (
    <>
      <div className="texture ">
        <div className="container ">
          <div className="row">
            <div className="col">
              <h1 className="main-heading">SRI SRI RADHA GOVIND TEMPLE</h1>
              <button className="connect-us btn btn-danger text-center">
                Connect with Us
              </button>
            </div>
            <div className="col">
              <img
                className="radhagovind center"
                src={require("./Images/iskcon-nvcc.png")}
                alt="null"
              />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Books />
      <Donation />
      <Contact />
    </>
  );
}

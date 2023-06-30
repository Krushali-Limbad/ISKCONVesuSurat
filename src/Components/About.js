import React from "react";
import "./style.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="container">
        <h2 className="secondary-heading text-center">About Us</h2>
        <div className="row">
          <div className="col">
            <img
              src={require("./Images/srila-prabhupada-square.jpg")}
              alt="null"
            />
          </div>
          <div className="col">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              quisquam suscipit et ratione sapiente cumque repellat minima quae
              corrupti ab. Reprehenderit qui aut consequuntur minima nesciunt
              commodi, dignissimos placeat illum? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ipsam quisquam suscipit et ratione
              sapiente cumque repellat minima quae corrupti ab. Reprehenderit
              qui aut consequuntur minima nesciunt commodi, dignissimos placeat
              qui aut consequuntur minima nesciunt commodi, dignissimos placeat
              qui aut consequuntur minima nesciunt commodi, dignissimos placeat
              qui aut consequuntur minima nesciunt commodi, dignissimos placeat
              qui aut consequuntur minima nesciunt commodi, dignissimos placeat
              illum? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ipsam quisquam suscipit et ratione sapiente cumque repellat minima
              quae corrupti ab. Reprehenderit qui aut consequuntur minima
              nesciunt commodi, dignissimos placeat illum...
            </p>
            <button className="read-more btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

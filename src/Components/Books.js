import React from "react";
import "./style.css";
import Card from "./Card";

export default function Books() {
  return (
    <div className="texture">
      <h2 className="secondary-heading text-center">ISKCON Books</h2>
      <div className="row">
        <div className="col">
          <Card src={require("./Images/Beyond birth and death.jpg")} />
        </div>
        <div className="col">
          <Card src={require("./Images/Message of godhead.jpg")} />
        </div>
        <div className="col">
          <Card src={require("./Images/Rajavidya.jpg")} />
        </div>
        <div className="col">
          <Card
            src={require("./Images/Transcendental-teachings-of-prahlad-maharaj.jpg")}
          />
        </div>
      </div>
    </div>
  );
}

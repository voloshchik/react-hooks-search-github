import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card">
      <img className="card-img-top" src={""} alt={""} />
      <div className="card-body">
        <div className="card-title">
          <h5>React Js</h5>
          <Link className="btn btn-primary" to={"/profile/"}>
            Открыть
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

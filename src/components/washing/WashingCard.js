import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RentalContext } from "../../context/RentalContext";

export const WashingCard = ({ id, name, description, price_hour, image }) => {
  const { dispatch } = useContext(RentalContext);

  const handleDelete = () => {
    dispatch({
      type: "Delete",
      payload: { id },
    });
  };

  return (
    <div className="card  border-primary mb-3 ">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={image} className="card-img" alt="{name}"></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text ">{description}</p>
            <p className="card-text">
              <small className="text-muted"> {price_hour} por hora</small>
            </p>
            <Link to={`/washing/${id}`}>
              <button className="btn btn-outline-primary ml-5">Editar</button>
            </Link>
            <button
              className="btn btn-outline-danger ml-5"
              onClick={handleDelete}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

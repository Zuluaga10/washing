import React, { useContext, useEffect } from "react";
import { RentalContext } from "../../context/RentalContext";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";

export const EditMachine = () => {
  const { id } = useParams(); //Desestructurar del useParams
  const { state, dispatch } = useContext(RentalContext);
  const navigate = useNavigate();

  useEffect(() => {
    //Validate if exist id
    const washingInit = state.find((rent) => rent.id === +id);
    console.log(state)
    if (!washingInit) {
      navigate("/machineRental", {
        replace: true,
      });
    }
  }, [id, navigate, state]);

  const handleReturn = () => {
    navigate(-1);
  };

  const [values, handleInputChange] = useForm(
    state.find((rent) => rent.id === +id)
  );

  const { description, name, price_hour, image } = values;

  const handleEdit = (e) => {
    e.preventDefault();

    dispatch({
      type: "Modify",
      payload: {
        id,
        description,
        name,
        price_hour,
        image,
      },
    });

    navigate("/machineRental", {
      replace: true,
    });
  };

  return (
    <div>
      <h2>Editar Lavadora</h2>
      <hr />
      <form onSubmit={handleEdit}>
        <div className="row form-group mx-sm-12 mb-2">
          <div className="col-md-4">
            <label>Descripción</label>
            <textarea
              type="text"
              className="form-control"
              required="required"
              value={description}
              onChange={handleInputChange}
              name="description"
            />
          </div>
        </div>
        <div className="row form-group mx-sm-12 mb-2">
          <div className="col-md-4">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              required="required"
              value={name}
              onChange={handleInputChange}
              name="name"
            />
          </div>
          <div className="col-md-4">
            <label>Precio</label>
            <input
              type="number"
              className="form-control"
              required="required"
              value={price_hour}
              onChange={handleInputChange}
              name="price_hour"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-outline-success ml-5">
          Editar lavadora
        </button>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Atrás
        </button>
      </form>
    </div>
  );
};

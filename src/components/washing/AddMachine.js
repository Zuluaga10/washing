import React, { useContext, useState } from "react";
import { RentalContext } from "../../context/RentalContext";
import ImageW from '../../assets/Whirlpool.jpg';

export const AddMachine = () => {
  const { dispatch } = useContext(RentalContext);
  const [values, setValues] = useState({
    id: Date.now(),
    description: "",
    name: "",
    price_hour: "",
    image:ImageW,
  });

  const { id, description, name, price_hour, image } = values;

  const handleInputChange = ({ target }) => {
    //Targetname como llave para obtener el valor
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    dispatch({
      type: "Add",
      payload: {
        id,
        description,
        name,
        price_hour,
        image,
      },
    });
  };

  return (
    <div>
      <h2>Añadir Lavadora</h2>
      <hr />
      <form onSubmit={handleAdd}>
        <div className="row form-group mx-sm-12 mb-2">
          <div className="col-md-4">
            <label>Descripción</label>
            <input
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
        <button type="submit" className="btn btn-outline-primary ml-5">
          Añadir lavadora
        </button>
      </form>
    </div>
  );
};

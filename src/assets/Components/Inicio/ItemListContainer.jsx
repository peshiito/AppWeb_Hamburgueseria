import React, { useEffect, useState } from "react";
import { pedirDatos } from "../Helpers/pedirDatos";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  console.log(productos);
  useEffect(() => {
    pedirDatos().then((res) => {
      setProductos(res);
    });
  }, []);

  return (
    <div>
      <h2>Aca va a estar el listado de productos</h2>
    </div>
  );
};

export default ItemListContainer;

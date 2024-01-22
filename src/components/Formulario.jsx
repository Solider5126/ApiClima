import { useState } from "react";
import useClima from "../hook/useClima";

const Formulario = () => {
  const { busqueda, datosBusqueda,consultarClima } = useClima();
  const [alerta, setAlerta] = useState(false);
  const { ciudad, pais } = busqueda


  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes("")) {
      setAlerta(true);
      setTimeout(() => {
        setAlerta(false);
      }, 2000);
      return
    }
    consultarClima(busqueda)
      
  };

  return (
    <form
      className="p-5 bg-white md:w-96 h-80 rounded-lg shadow-md font-semibold"
      action=""
      onSubmit={handleSubmit}
    >
      {alerta && (
        <p className="text-white bg-red-500 text-center p-2 rounded-lg">
          Todos los campos son Necesarios
        </p>
      )}
      <div className="space-y-3 my-5">
        <label htmlFor="ciudad" className="block">
          Ciudad
        </label>
        <input
          id="ciudad"
          type="text"
          name="ciudad"
          className="w-full p-2 border rounded-lg"
          onChange={datosBusqueda}
          value={ciudad}
        />
      </div>
      <div className="space-y-3 my-5">
        <label htmlFor="pais" className="block">
          País
        </label>
        <select
          name="pais"
          id="pais"
          onChange={datosBusqueda}
          value={pais}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">-- Seleccione País --</option>
          <option value="US">Estados Unidos</option>
          <option value="PE">Perú</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="ES">España</option>
        </select>
      </div>
      <input
        type="submit"
        value={"Consultar Clima"}
        className="p-3 cursor-pointer bg-blue-700 w-full rounded-lg hover:bg-blue-600 text-white font-semibold"
      />
    </form>
  );
};

export default Formulario;

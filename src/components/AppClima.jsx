import React from "react";
import useClima from "../hook/useClima";

const AppClima = () => {
  const { resultado } = useClima();

  // Grados Kelvin
  const kelvin = 273.15;
  console.log(resultado)

  return (
    <div className="p-5 bg-white md:w-[400px] rounded-lg shadow-md ">
      <div className="p-5    font-semibold">
        <h2 className="text-xl md:text-2xl">
          El Clima de {resultado.name} es{" "}
        </h2>
        <div className="mb-4">
        <p className="text-xl md:text-3xl pb-4">Temperatura Actual : </p>
        <p className="font-semibold text-5xl text-center ">
          {parseInt(resultado.main.temp - kelvin)} &#x2103;
        </p>
        </div>
        <div className="mb-4">
        <p className="text-xl md:text-3xl pb-4">Temperatura Maxima : </p>
        <p className="font-semibold text-5xl text-center ">
          {parseInt(resultado.main.temp_max - kelvin)} &#x2103;
        </p>
        </div>
        <div className="mb-4">
        <p className="text-xl md:text-3xl pb-4">Temperatura Minima : </p>
        <p className="font-semibold text-5xl text-center ">
          {parseInt(resultado.main.temp_min - kelvin)} &#x2103;
        </p>
        </div>
        
      </div>
    </div>
  );
};

export default AppClima;

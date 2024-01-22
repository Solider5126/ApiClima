import { useState } from "react";

import "./App.css";
import AppClima from "./components/AppClima";
import Formulario from "./components/Formulario";
import useClima from "./hook/useClima";
import Skeleton from "./components/Skeleton";

function App() {
  const { resultado, cargando, noResultado } = useClima();
  return (
    <>
      <header>
        <h1 className="text-center text-5xl bg-sky-500 py-5 font-semibold text-white shadow-md mb-14">
          Buscador de Clima
        </h1>
      </header>
      <main className="grid grid-cols-1  mb-8 lg:grid-cols-2 container space-y-5 lg:space-y-0 mx-auto justify-items-center">
        <Formulario />

        {cargando ? (
          <Skeleton />
        ) : (
          Object.keys(resultado).length > 0 && <AppClima />
        )}
      </main>
    </>
  );
}

export default App;

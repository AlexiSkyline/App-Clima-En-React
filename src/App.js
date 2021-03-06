import React, { useEffect, useState } from 'react';
import { Clima } from './components/Clima';
import { Error } from './components/Error';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';


function App() {

  const [ busqueda, setBusqueda ] = useState({
    ciudad: '',
    pais: ''
  });
  
  const [ consulta, setConsulta ] = useState(false);
  const [ resultado, setResultado ] = useState({});
  const [ error, setError ] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect( () => {
     const consultarAPI = async () => {

      if( consulta ) {
        const appId = 'tu api key donde conseguí la mía: https://openweathermap.org/ ';
        const link = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch( link );
        const resultadoAPI = await respuesta.json();

        setResultado( resultadoAPI );
        setConsulta( false );

        //TODO Detecta si hubo resultados correctos en la consulta.
        if( resultadoAPI.cod === "404") {
          setError( true );
        } else {
          setError( false );
        }

      }

    }
    consultarAPI();

    // eslint-disable-next-line
  }, [consulta]);

  let componente; 
  if( error ) {
    componente = <Error mensaje="No hay resultados"/>
  } else {
    componente = <Clima resultado={ resultado } />
  }
 
  return (
    <>
      <Header 
        titulo="Clima React App"
      />

      <div className="contenedor-form">
          <div className="container">
              <div className="row">
                  <div className="col m6 s12">
                    <Formulario 
                      busqueda={ busqueda }
                      setBusqueda={ setBusqueda }
                      setConsulta={ setConsulta }
                    />
                  </div>
                  <div className="col m6 s12">
                    { componente }
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default App;

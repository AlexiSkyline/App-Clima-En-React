import React from 'react';
import { Header } from './components/Header';


function App() {
  return (
    <>
      <Header 
        titulo="Clima React App"
      />

      <div className="contenedor-form">
          <div className="container">
              <div className="row">
                  <div className="col m6 s12">
                    1
                  </div>
                  <div className="col m6 s12">
                    2
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default App;

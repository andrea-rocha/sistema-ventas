import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


 const login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    
    <div>

      <div className="fondo_div">
      <h1 className="titulo_h">Iniciar sesión</h1>
      <form>
        <div className="contenedor_boton_acceso">
          <button onClick={() => loginWithRedirect()} className="elemento_input_boton fuente">Ingresar</button>
        </div>
      </form>
      </div>
     
    </div>
  );
};

export default login;


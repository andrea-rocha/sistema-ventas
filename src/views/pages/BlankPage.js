import React from 'react';
import "../";

const BlankPage = () => {
  return (
    <div>
        <div className="fondo_div">
    <h1 className="titulo_h">Iniciar sesión</h1>
    <form>
      <div className="tamaño_letra_label">
        <label htmlFor="usuario" className="color_letra">Correo electrónico</label> <br />
        <input className="elemento_input fuente" type="email" id="usuario" name="usuario" placeholder="Escribe tu correo electrónico" required="true" />
      </div>
      <div className="tamaño_letra_label">
        <label htmlFor="contraseña" className="color_letra">Contraseña</label> <br />
        <input className="elemento_input fuente" type="password" id="contraseña" name="contraseña" placeholder="Escribe tu contraseña" required="true" />
      </div>
      <div className="contenedor_boton_acceso">
        <input className="elemento_input_boton fuente" type="submit" defaultValue="Ingresar" />
      </div>
      <div className="contenedor_google">
        <img className="foto_google " src="/media/google.png" alt="Google" />
        <span>Continuar con Google</span>
      </div>
      <div className="contenedor_pregistro color_letra">
        <span>¿No tienes cuenta?</span>
        <a className="configuracion_enlaces" href="/registro.html">Regístrate</a>
      </div>
      <div className="contenedor_pcontraseña fuente">
        <a className="configuracion_enlaces" href="/recuperar contraseña.html">¿Olvidaste tu contraseña?</a>
      </div>
    </form>
  </div>
    </div>
  );
};

export default BlankPage;

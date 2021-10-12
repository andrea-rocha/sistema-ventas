import React from 'react';
import "../";
import { useEffect, useState } from 'react';

const googleClientId = '781779611884-qf3ht8on9lttbv1uttg7sjcnhbpql1di.apps.googleusercontent.com';

const loadGoogleScript = () => {
  
  //loads the Google JavaScript Library
  (function () {
      const id = 'google-js';
      const src = 'https://apis.google.com/js/platform.js';
      
      //we have at least one script (React)
      const firstJs = document.getElementsByTagName('script')[0];
      
      //prevent script from loading twice
      if (document.getElementById(id)) { return; }
      const js = document.createElement('script'); 
      js.id = id;
      js.src = src;
      js.onload = window.onGoogleScriptLoad; 
      firstJs.parentNode.insertBefore(js, firstJs);
  }());    
  
}

const BlankPage = () => {

  const [gapi, setGapi] = useState();
  const [googleAuth, setGoogleAuth] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState();
  
  const onSuccess = (googleUser) => {
    debugger;
    console.log('result from google', googleUser);
    setIsLoggedIn(true);
    const profile = googleUser.getBasicProfile();
    setName(profile.getName());
    setEmail(profile.getEmail());
    setImageUrl(profile.getImageUrl());
  };
  
  const onFailure = () => {
    setIsLoggedIn(false);
  }
  
  const logOut = () => {
    (async() => {
      await googleAuth.signOut();
      setIsLoggedIn(false);
      renderSigninButton(gapi);
    })();
  };
  
  const renderSigninButton = (_gapi) => {
    _gapi.signin2.render('google-signin', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure 
    });
  }
  
  
  useEffect(() => {
    
    //window.gapi is available at this point
    window.onGoogleScriptLoad = () => {
     
      const _gapi = window.gapi;
      setGapi(_gapi);
      
      _gapi.load('auth2', () => {
        (async () => { 
          const _googleAuth = await _gapi.auth2.init({
           client_id: googleClientId
          });
          setGoogleAuth(_googleAuth);
          renderSigninButton(_gapi);
        })();
      });
    }
    
    //ensure everything is set before loading the script
    loadGoogleScript();
    
  }, []);

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
        <div>
        {!isLoggedIn &&
          <div id="google-signin"></div>
        }
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
     
        
        {isLoggedIn &&
          <div>
            <div>
              <img src={imageUrl} />
            </div>
            <div>{name}</div>
            <div>{email}</div>
            <button className='btn-primary' onClick={logOut}>Log Out</button>
          </div>
        }
    </div>
  );
};

export default BlankPage;

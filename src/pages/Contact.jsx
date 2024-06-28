import React from "react";
import "./Contact.style.css";

const Contact = () => {
  return (
    <>
      <div className="body">
      <h1>Informacion de contacto</h1>
      <div className="contanier">
        <div className="information">
          
          <div style={{ height: 100 }}>
            <img src="/Facebook.png" alt="" />
            <img style={{ padding: 10 }} src="/Instagram.png" alt="" />
            <img src="/Twitter.png" alt="" />
            <p>@granierVzla</p>
          </div>

          <div style={{ height: 100 }}>
            <img src="/Correo.png" alt="" />
            <p>contacto@graniervzla.com</p>
          </div>

          <div style={{ height: 100 }}>
            <p>+58 424 568 9898</p>
          </div>

        </div>
        <div className="message">
          <p>
            Podras contactarnos a traves de cualquiera de los siguientes medios
            de comunicacion, te atenderemos a la brevedad
          </p>
        </div>
      </div>
      
      </div>
    </>
  );
};

export default Contact;

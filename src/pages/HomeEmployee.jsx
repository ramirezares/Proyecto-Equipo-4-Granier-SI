import React from "react";
import "./HomeEmployee.style.css";

const HomeEmployee = () => {
  return (
    <>
      <div>
        <div className="imageBar">
          <img src="/Bakeryproducts.png" alt="First Image" class="topImage" />
          <img
            src="/Granieradministradorlogo-remove.png"
            alt="Second Image"
            class="bottomImage"
          />
          <div class="overlayText">Pan de Verdad,Cada día</div>
        </div>

        <div className="interactionBar">
          <div className="interactionBar_buttons">
            <ChangingButton
              text="Ir al Menú"
              link=""
              style="customStyleButtons2"
            ></ChangingButton>
            <ChangingButton
              text="Agregar producto o promoción"
              link=""
              style="customStyleButtons2"
            ></ChangingButton>
            <ChangingButton
              text="Gestionar pedidos"
              link=""
              style="customStyleButtons2"
            ></ChangingButton>
            <ChangingButton
              text="Ver Reseña"
              link=""
              style="customStyleButtons2"
            ></ChangingButton>
          </div>
          <div className="interactionBar_img">
            <img src="/Chicacafe.jpg" />
          </div>
        </div>

        <div className="rightsBar">
          <p className="prove">
            <a href="http://graniervenezuela.com/">
              <u>@ GRANIER VENEZUELA</u>
            </a>{" "}
            | Derechos reservados
          </p>
        </div>

        <ChangingFooter className="unimet" footerstate="unimet" />
      </div>
    </>
  );
};

export default HomeEmployee;

//import React from "react";
import "./Contact.style.css";

const Contact = () => {
  return (
    <>
    <div className="body mx-20">
      <h1 style={{ color: '#34394B' }} className="text-4xl font-bold mb-4">Información de contacto</h1>
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center mb-4">
            <div className="information w-1/2 pr-4">
              
              <div className="flex justify-left mb-4">
                <div id="facebook-logo" className="mr-4 mb-4">
                  <img src="/Facebook.png" alt="facebook-logo" />
                </div>
                <div id="instagram-logo" className="mr-4 mb-4">
                  <img src="/Instagram.png" alt="instagram-logo" />
                </div>
                <div id="twitter-logo" className="mr-4 mb-4">
                  <img src="/Twitter.png" alt="twitter-logo" />
                </div>
                <div className="mb-4">
                  <p style={{ color: '#34394B' }} className="text-2xl leading-relaxed text-gray-600 font-semibold">@granierVzla</p>
                </div>
              </div>
              
              <div className="flex justify-left mb-4">
                    <div className="flex items-center mb-2">
                      <img src="/Correo.png" alt="" className="mr-2"/>
                      <p style={{ color: '#34394B' }} className="text-2xl leading-relaxed text-gray-600 font-semibold">contacto@graniervzla.com</p>
                    </div>
              </div>
              
              <div className="flex justify-left mb-4">
                <div className="flex items-left mb-2">
                  <img src="/Chat.png" alt="" className="mr-2"/>
                  <p style={{ color: '#34394B' }} className="text-2xl leading-relaxed text-gray-600 font-semibold">+58 424 568 9898</p>
                </div>
              </div>
              
            </div>

            <div className="message w-1/2 pl-4">
              <p style={{ color: '#34394B' }} className="text-2xl leading-relaxed text-gray-600 font-semibold">
                Podrás contactarnos a través de cualquiera de los siguientes medios
                de comunicación, te atenderemos a la brevedad
              </p>
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
/*
      <div className="body">
      <h1 className="text-3xl font-bold mb-4">Informacion de contacto</h1>
      <div className="container mx-auto p-4">
        <div className="information flex flex-wrap justify-center mb-4">
          
          <div className="flex justify-left mb-4">
            <div id="facebook-logo" className="mr-4 mb-4">
              <img src="/Facebook.png" alt="facebook-logo" />
            </div>
            <div id="instagram-logo" className="mr-4 mb-4">
              <img src="/Instagram.png" alt="instagram-logo" />
            </div>
            <div id="twitter-logo" className="mr-4 mb-4">
              <img src="/Twitter.png" alt="twitter-logo" />
            </div>
            <div className="mb-4">
              <p>@granierVzla</p>
            </div>
          </div>

          <div className="contact-info mb-4">
            <div className="flex items-center mb-2">
              <img src="/Correo.png" alt="" />
              <p className="ml-2">contacto@graniervzla.com</p>
            </div>
            <div className="flex items-center mb-2">
              <p>+58 424 568 9898</p>
            </div>
          </div>

        <div className="message">
          <p>
            Podrás contactarnos a través de cualquiera de los siguientes medios
            de comunicación, te atenderemos a la brevedad
          </p>
        </div>

      </div>
    </div>
    </div>*/
import { useState } from "react";
import {
    uploadImagen,
    getImageUrl,
    deletePhoto,
} from "../controllers/files.js";

function Prueba() {
    const [image, setImage] = useState("imagenes/user.png"); //imagen de perfil estandar (cuando no hay foto)
    const [imageUrl, setImageUrl] = useState("/user.png");//url de imagen perfil estandar
    const [is, setIs] = useState(true);/*Es una verificacion para saber si hay una foto donde va la foto, 
    en este caso es true porque cuando se registra al usuario, si no tiene imagen se le coloca como defaultla foto
    estandar*/


    /**Funcion Manejo de la foto */
    async function handlePhoto(file) {
    if (file != undefined) {//Primero hace una verificacion si es que se inserto un file en el input
        //de no haber ningun file seleccionado no se hace nada
        if (image != "imagenes/user.png") { //si hay una file seleccionado hay que chequear que no sea la foto estandar
        deletePhoto(image);//si es la foto estandar esta se elimina con una funcion que proviene de un controllador
        }
        setIs(false);//setIs es falsa 
        const result = await uploadImagen(file);// imagen seleccionada
        const url = await getImageUrl(result);// url imagen seleccionada  
        setImageUrl(url);//funcion en controller que setea el url de la imagen al objeto del usuario
        setImage(result);//funcion en controller que setea la imagen al objeto del usuario
        setIs(true);//ahora si estala imagen colocada 
    }
    }

    return(

        <div>
            <div>
                <div>
                    {is == false ? (//si no hay una imagen colocada...
                    <img 
                        alt="control"
                        src="/user.png"//se coloca la imagen en el sitio
                    />
                    ) : (
                    <img
                        alt="control" 
                        src={imageUrl} //se coloca la url de la imagen
                    />
                    )}
                    <input  //input de seleccion de imagen 
                        type="file" 
                        onChange={(e) => {
                        handlePhoto(e.target.files[0]);
                        }}
                    />
                </div>
            </div>
        </div>
)
}


export default Prueba






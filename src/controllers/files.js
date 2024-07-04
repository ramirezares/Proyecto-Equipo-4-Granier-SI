import {ref, uploadBytes, getDownloadURL, deleteObject} from "firebase/storage";
import {storage} from "../firebase";
import {nanoid} from "nanoid";


/**Funciones para el control de imagen  de usuario */
 //Subir imagen a Firebase Storage y obtener su URL
 //Esta función recibe un Blob o un ArrayBuffer que representa la imagen y devuelve el URL de la imagen subida
 //Ejemplo: const imageUrl = await uploadImagen(imageBlob);
 //
 //Para obtener el URL de una imagen, se puede usar la función getImageUrl(path)
 //Esta función recibe el path de la imagen en Firebase Storage y devuelve el URL de la imagen
export async function uploadImagen(data){
    const carpeta = ref(storage, `imagenes/${nanoid()}`);
    const result = await uploadBytes(carpeta, data);
    return result.metadata.fullPath
}

/**Agarar url de imagen del storage */
export async function getImageUrl(path){
    const url = await getDownloadURL(ref(storage, path));
    return url;
}


/**Eliminala imagen del storage */
export async function deletePhoto(path){
    const imageRef = ref(storage, path);
    deleteObject(imageRef);
}

/**Sube la imagen */
export async function uploadImages(data, id){
    const carpeta = ref(storage, `agrupaciones/${id}/${nanoid()}`);
    const result = await uploadBytes(carpeta, data);
    return result.metadata.fullPath
}
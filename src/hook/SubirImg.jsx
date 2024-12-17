import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/Firebase';

/**
 * Sube un archivo al Firebase Storage y retorna la URL del archivo.
 * @param {File} archivo - El archivo que se subirá.
 * @returns {Promise<string>} - URL de descarga del archivo subido.
 */
export const subirImagen = async (archivo) => {
  if (!archivo || !(archivo instanceof File)) {
    throw new Error('Debe proporcionarse un archivo válido.');
  }

  try {
    const storageRef = ref(storage, `img/${archivo.name}`);
    const snapshot = await uploadBytes(storageRef, archivo);
    const archivoUrl = await getDownloadURL(snapshot.ref);
    return archivoUrl; // Retorna la URL del archivo
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    throw error;
  }
};
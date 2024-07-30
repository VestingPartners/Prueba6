// Importamos las bibliotecas 'next-connect' y 'cors'
import nc from "next-connect";
import cors from "cors";

// Creamos un objeto manejador de eventos de 'next-connect'
const handler = nc()
  // Agregamos el middleware de 'cors' al manejador de eventos
  .use(cors())
  // Establecemos el método HTTP GET y enviamos una respuesta con el texto "Hola Medellín JS"
  .get((req, res) => {
    res.send("Hola Medellín JS");
  })
  // Establecemos el método HTTP POST y enviamos una respuesta con un objeto JSON que contiene la propiedad 'hola' con el valor 'MedellinJS'
  .post((req, res) => {
    res.json({ hola: "MedellinJS" });
  })
  // Establecemos el método HTTP PUT y enviamos una respuesta con el texto "Hola Amigos"
  .put(async (req, res) => {
    res.end("Hola Amigos");
  });

// Exportamos el objeto manejador de eventos como el valor predeterminado del archivo
export default handler;
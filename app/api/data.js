// Creamos un archivo llamado 'data.js' dentro de la carpeta 'api' en la carpeta 'pages'
// Este archivo exporta una función anónima que maneja la solicitud HTTP GET para la ruta '/api/data'
export default (req, res) => {
    // Establecemos el código de estado de la respuesta HTTP en 200
    res.statusCode = 200;
    // Establecemos el tipo de contenido de la respuesta HTTP en 'application/json'
    res.setHeader("Content-Type", "application/json");
    // Enviamos como respuesta HTTP un objeto JSON que contiene la propiedad 'estamosEn' con el valor 'Medellín JS'
    res.end(JSON.stringify({ estamosEn: "Medellín JS" }));
  };
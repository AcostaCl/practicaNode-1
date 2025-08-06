const fs = require("fs");
//import fs from "fs" todo lo que sea nativo o instalado solo el nombre entre comillas, si es archivo nuestro entonces asi ./

fs.readFile("./ListaPersonajes.txt", "utf8", (err, data) => {
  if (err) {
    console.error("ocurrió un error al intentar abrir el archivo");
    return;
  }
  console.log("Datos leidos:");
  console.log(data);
});

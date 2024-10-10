import Cl_profesor from "./Cl_profesor.js";
import Cl_fijo from "./Cl_fijo.js";
import Cl_contratado from "./Cl_contratado.js";

export default class Cl_main {

    constructor() {

 let profesor = new Cl_profesor("Rafael", 30);
 let p1 = new Cl_contratado("Rafael",30, 15);

let salida = document.getElementById("salida");
salida.innerHTML = `Nombre del profesor contratado: ${profesor.nombre} <br> 
Monto del bono: $${profesor.bono} <br> 
Cantidad de horas: ${p1.horas} <br> 
Ingreso total del profesor ${profesor.nombre}: $${p1.ingresoContratado()}`;}
}
import Cl_profesor from "./Cl_profesor.js";

export default class Cl_fijo extends Cl_profesor {
    constructor(nombre, bono, horas){
        super(nombre, bono);
        this.horas = horas;
    }
set horas(h){
    this._horas = h;
}
get horas(){
    return this._horas;
}
ingresoContratado(){
    return super.bono + (this.horas * 10);}
}
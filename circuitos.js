class Circuitos{

    constructor(nombre,ciudad,vueltas,kilometrosvuelta,rectas,curvas){
        this.nombre=nombre;
        this.ciudad=ciudad;
        this.vueltas=vueltas;
        this.kilometrosvuelta=kilometrosvuelta;
        this.rectas=rectas;
        this.curvas=curvas;
    }

    getnombre(){
        return this.nombre;
    }
    getciudad(){
        return this.ciudad;
    }
    getvueltas(){
        return this.vueltas;
    }
    getkilometrosvuelta(){
        return this.kilometrosvuelta;
    }
    gettotalkilometros(){
        return this.kilometrosvuelta*this.vueltas;
    }
    
   
}
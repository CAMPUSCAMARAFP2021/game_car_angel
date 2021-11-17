class Circuitos{

    constructor(nombre,ciudad,vueltas,kilometrosvuelta,dificultad){
        this.nombre=nombre;
        this.ciudad=ciudad;
        this.vueltas=vueltas;
        this.kilometrosvuelta=kilometrosvuelta;
        this.dificultad=dificultad;
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
    getdificultad(){
        return this.dificultad;
    }
    
}
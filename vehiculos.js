class Vehiculos{
    velocidad=0;
    constructor(marca,ruedas,gasolina,peso,color,combustion=5,acelerar,frenar,velomax,capacidad) {
        this.marca=marca;
        this.ruedas=ruedas;
        this.gasolina=gasolina;
        this.peso=peso;
        this.color=color;
        this.combustion=combustion;
        this.acelerar=acelerar;
        this.frenar=frenar;
        this.velomax=velomax;
        this.capacidad=capacidad;
    }
    getmarca(){
        return this.marca;
    }
    getruedas(){
        return this.ruedas;
    }
    getgasolina(){
        return this.gasolina;
    }
    getpeso(){
        return this.peso;
    }
    getcolor(){
        return this.color;
    }
    getcombustion(){
        return this.combustion;
    }
    acelerando(){
        this.velocidad +=this.acelerar
        if(this.velocidad>=this.velomax){
            this.velocidad=this.velomax;
        }
    }
    frenando(){
        this.velocidad-=this.frenar;
        if(this.velocidad<=0){
            return "he parado"
        }
    }
    repostar(){
        if (this.gasolina<30){
            this.gasolina=this.capacidad;
        }
    }
    info(){
        return `los datos de tu coche es:marca ${this.marca},ruedas ${this.ruedas},capacidad de gasolina ${this.gasolina}, peso ${this.peso}, color${this.color}, consume ${this.combustion}/l`
    }
}
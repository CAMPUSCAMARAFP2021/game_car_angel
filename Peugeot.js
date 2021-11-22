class Peugeot extends Vehiculos{

    constructor(marca,gasolina,combustion,acelerar,frenar,velomax,capacidad){
        super(marca);
    
        this.acelerar=15;
        this.frenar=10;
        this.velomax=150;
        this.capacidad=170;
        }
}


class Coche {
    vmax;
    acc;
    v = 0;
    dr = 0;

    constructor(vmax, acc){
        this.vmax = vmax;
        this.acc = acc;
    }
    acelerar(){
            this.v = this.v + this.acc;
            this.v >= this.vmax ? this.v = this.vmax : this.v;
            this.dr = this.dr + this.v;

    }
}

class Carrera {

    coches =  [new Coche(200,4), new Coche(230, 3)];
    resultados = [];
    distancia = 100;
    instante = 0;
    
constructor(distance){
    this.distancia=distance;
}
    start(){
        while (this.coches.length=== this.resultados.length) {
            this.instante++;
            this.coche.map((coche)=>{
                coche.acelerar();
                coche.dr < this.distancia || this.resultados.push({instante:this.instante,coche})
            })
            
        }

    }
}
class Carrera {
    circuito= new Circuitos('marsella',3,['r','r','r','c','c','r','c','r','r'])
    coches =  [new Coches(1,200,4,true), new Coches(2,230, 3,true)];
    resultados = [];
    instante = 0;


    start(){
        
        while (this.coches.length !== this.resultados.length) {
        console.log(this.resultados.length)
            this.coches.map((coche)=>{
                console.log(coche.jugabilidad)
                console.log(`${coche.id }->${coche.dr}`)
                if(coche.dr<this.circuito.distancia && coche.jugabilidad==true ){
                this.juego(coche,this.circuito.pista[parseInt(coche.dr/100)]);
                }else{
                    coche.jugabilidad=false;
                    this.resultados.push({instante:this.instante,coche})
                }
               
            })
            
        }

    }

    juego(coche,posicion) {
        switch(posicion) {
            case 'r':
               coche.acelerar();
               
                break;
            case 'c':
                coche.frenar();
                
                break;
        }
    }
}
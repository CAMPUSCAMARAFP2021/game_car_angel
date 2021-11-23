class Carrera {
    circuito= new Circuitos('marsella',3,['r','r','r','c','c','r','c','r','r'])
    coches =  [new Coches('peugeot',200,4,true), new Coches('tesla',230, 3,true),new Coches('ferrari',300,6,true),new Coches('moto',250,4,true)];
    resultados = [];
    instante = 0;
    corriendo=true;

    start(){
        
        while (this.corriendo) {
            this.instante++;
        console.log(this.resultados.length)
            this.coches.map((coche)=>{
                if(coche.ingame==true){
                console.log(coche.jugabilidad)
                console.log(`${coche.id }->${coche.dr}; v:${coche.vel}`)
                if(coche.dr<this.circuito.distancia ){
                this.juego(coche,this.circuito.pista[parseInt(coche.dr/100)]);
                }else{
                    coche.ingame=false;
                    this.resultados.push({instante:this.instante,coche})
                    if(this.resultados.length == this.coches.length){
                        this.corriendo=false;
                    }
                }
            }
           
            
            })
            
        }
        console.log(this.resultados)
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
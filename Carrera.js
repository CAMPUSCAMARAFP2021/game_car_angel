class Carrera {
    circuito= new Circuitos('marsella',3,['r','r','r','c','c','r','c','r','r'])
    coches =  [new Coche(200,4), new Coche(230, 3)];
    resultados = [];
    instante = 0;


    start(){
        while (this.coches.length=== this.resultados.length) {
            this.instante++;
            this.coche.map((coche)=>{
                if(coche.dr<circuito.distancia){
                juego(this.circuito.pista[coche.dr/100]);
                }else{
                    this.resultados.push({instante:this.instante,coche})
                }
                
            })
            
        }

    }

    juego(posicion) {
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
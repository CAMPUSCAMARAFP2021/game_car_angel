class Coches{
    vmax;
    acc;
    deacc;
    gas;
    vel = 0;
    dr = 0;
    constructor(vmax, acc,deacc,ingame,tank){
        this.vmax = vmax;
        this.acc = acc;
        this.deacc=deacc;
       this.ingame=ingame;
       this.tank=tank;
        this.gas=tank;
    }
    acelerar(){
            this.vel = this.vel + this.acc;
            this.vel >= this.vmax ? this.vel = this.vmax : this.vel;
            this.dr = this.dr + this.vel;

    }
    frenar(){
        if(this.vel >= 20){
        this.vel=this.vel-this.deacc;
        this.dr = this.dr + this.vel;
        }else{
        this.acelerar();
        }

    }
    
    refuel(){
    
    }
}
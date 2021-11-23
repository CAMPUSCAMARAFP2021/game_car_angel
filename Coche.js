class Coches{
    vmax;
    acc;
    vel = 0;
    dr = 0;
    deacc ;
    constructor(name,vmax, acc,deacc,ingame){
        this.name=name;
        this.vmax = vmax;
        this.acc = acc;
        this.deacc=deacc;
       this.ingame=ingame;
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
}
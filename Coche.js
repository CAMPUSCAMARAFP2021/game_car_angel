class Coches{
    vmax;
    acc;
    vel = 0;
    dr = 0;

    constructor(name,vmax, acc,ingame){
        this.name=name;
        this.vmax = vmax;
        this.acc = acc;
       this.ingame=ingame;
    }
    acelerar(){
            this.vel = this.vel + this.acc;
            this.vel >= this.vmax ? this.vel = this.vmax : this.vel;
            this.dr = this.dr + this.vel;
    }
    frenar(){
        this.vel=this.vel-this.acc;
        this.vel <= 0 ? this.vel=0 : this.vel;
        this.dr = this.dr + this.vel;
    }
}
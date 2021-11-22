class Coches{
    vmax;
    acc;
    vel = 0;
    dr = 0;

    constructor(vmax, acc){
        this.vmax = vmax;
        this.acc = acc;
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
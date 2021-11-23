class Coches{
    vmax;
    acc;
    deacc;
    fuel;
    vel = 0;
    dr = 0;
    constructor(vmax, acc,deacc,ingame,tank){
        this.vmax = vmax;
        this.acc = acc;
        this.deacc=deacc;
       this.ingame=ingame;
       this.tank=tank;
        this.fuel=tank;
    }

    acelerar(){
            this.vel = this.vel + this.acc;
            this.vel >= this.vmax ? this.vel = this.vmax : this.vel;
            this.dr = this.dr + this.vel;
            this.fuel-=this.vel/100;
    }

    frenar(){
        if(this.vel >= 20){
        this.vel=this.vel-this.deacc;
        this.dr = this.dr + this.vel;
        this.fuel-=this.vel/100;
        }else{
        this.acelerar();
        }

    }
    
    refuel(){
        this.fuel+=15;
        this.fuel>this.tank ? this.gas=this.tank : this.fuel;
    }

}
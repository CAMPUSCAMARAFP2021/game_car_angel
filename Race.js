class Race {
    circuit = new Circuit('marsella', 3, ['r', 'r', 'r', 'c', 'c', 'c', 'c', 'r', 'r', 'r', 'r', 'c', 'r', 'r'])
    car = [new Car('ferrari',200, 4, 2, true), new Car('tesla',230, 3, 1, true)];
    result = [];
    instant = 0;
    running = true;
    constructor(onFinish,onLapFinish) {
        this.onFinish = onFinish;
        this.onLapFinish = onLapFinish;
    }

    start() {
        while (this.running) {
            this.instant++;
            //console.log(this.result.length)
            this.car.map((car) => {
                if (car.ingame == true) {
                    if (car.laps <= this.circuit.vueltas) {
                        console.log(`${car.name}->${car.dr}; v:${car.vel}`)
                        if (car.dr < this.circuit.distancia) {
                            this.juego(car, this.circuit.pista[parseInt(car.dr / 100)]);
                        } else {
                            car.laps += 1;
                            car.dr -= this.circuit.distancia;
                            this.onLapFinish(car);
                        }
                    } else {
                        car.ingame = false;
                        this.result.push({ instant: this.instant, car })
                        if (this.result.length == this.car.length) {
                            this.running = false;
                        }
                    }
                }
            })
        }
        this.onFinish(this.result);
    }

    juego(car, position) {
        switch (position) {
            case 'r':
                car.accelerate();

                break;
            case 'c':
                car.brake();
                break;
        }
    }
}
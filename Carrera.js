class Carrera {
    circuito = new Circuitos('marsella', 3, ['r', 'r', 'r', 'c', 'c', 'c', 'c', 'r', 'r', 'r', 'r', 'c', 'r', 'r'])
    coches = [new Ferrari(200, 4, 2, true), new Tesla(230, 3, 1, true)];
    resultados = [];
    instante = 0;
    corriendo = true;

    start() {
        while (this.corriendo) {
            this.instante++;
            console.log(this.resultados.length)
            this.coches.map((coche) => {
                if (coche.ingame == true) {
                    if (coche.laps <= this.circuito.vueltas) {
                        console.log(`${coche.name}->${coche.dr}; v:${coche.vel}`)
                        if (coche.dr < this.circuito.distancia) {
                            this.juego(coche, this.circuito.pista[parseInt(coche.dr / 100)]);
                        } else {
                            coche.laps += 1;
                            coche.dr -= this.circuito.distancia;
                        }
                    } else {
                        coche.ingame = false;
                        this.resultados.push({ instante: this.instante, coche })
                        if (this.resultados.length == this.coches.length) {
                            this.corriendo = false;
                        }
                    }
                }
            })
        }
        console.log(this.resultados)
    }

    juego(coche, posicion) {
        switch (posicion) {
            case 'r':
                coche.acelerar();

                break;
            case 'c':
                coche.frenar();
                break;
        }
    }
}
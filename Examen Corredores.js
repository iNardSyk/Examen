var botonInicio = document.getElementById('botonIniciar');
botonInicio.addEventListener("click", iniciarCarrera);

function iniciarCarrera(){
    var carrera1 = new Carrera()
    carrera1.iniciarCarrera()
}


class Carrera{
    constructor(){
        this._corredores = [];
        this._avance = new Avance();
        this._pista = new Pista;
        this._ganador = false;
    }

    iniciarCarrera(){
        this.prepararCarrera();
        do {
            this.ronda()
        } while (this._ganador == false);
                
    }

    prepararCarrera(){
        var corredor1 = new Corredor("Corredor1")
        var corredor2 = new Corredor("Corredor2");
        this._corredores.push(corredor1);
        this._corredores.push(corredor2);
        this._pista.construir();
    }
    
    moverCorredor(index){
        let avance = this._corredores[index].posicion + this._avance.getAvance();
        return avance;
    }

    ronda(){
        for (let index = 0; index < this._corredores.length; index++) {
            let avance = this.moverCorredor(index)
            if (avance >= 100) {
                this._ganador = true;
                console.log("El jugador " + this._corredores[index].nombre + " ha ganado");
                return;
            } else {
                this._corredores[index].posicion = avance;
                console.log("El jugador " + this._corredores[index].nombre + " está en el metro " + this._pista.metros[avance]);
            }
        }
    }
}

class Corredor{
    constructor(nombre){
        this._nombre = nombre;
        this._posicion = 0;
    }

    get nombre(){
        return this._nombre
    }

    get posicion(){
        return this._posicion;
    }

    set posicion(posicion){
        this._posicion = posicion;
    }
}

class Avance{
    constructor(){
        this._probabilidad = null;
    }

    getAvance(){
        let avance = Math.floor(Math.random() * (6 - 1)) + 1;
        if (avance == 1) {
            this._probabilidad = 1;
        } else if(avance == 2){
            this._probabilidad = -1;
        } else if (avance == 3 || avance == 4) {
            this._probabilidad = 2;
        } else {
            this._probabilidad = 3
        }
        return this._probabilidad;
    }
}

class Pista{
    constructor(){
        this._metros = [];
    }

    construir(){
        for (let index = 0; index < 100; index++) {
            this._metros[index] = index + 1;
        }
    }

    get metros(){
        return this._metros;
    }
}
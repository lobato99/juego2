class Ajedrez {
    tablero; ganaBlancas; ganaNegras;
    constructor() {
        this.tablero = new Array(8);
        for (let i = 0; i < this.tablero.length; i++)
            this.tablero[i] = new Array(8);
        for (let i = 0; i < this.tablero.length; i++) {
            this.tablero[1][i] = "pb";
            this.tablero[6][i] = "pn";
        }
        this.tablero[0][0] = 'tb'; this.tablero[0][7] = 'tb';
        this.tablero[7][0] = 'tn'; this.tablero[7][7] = 'tn';
        this.tablero[0][1] = 'cb'; this.tablero[0][6] = 'cb';
        this.tablero[7][1] = 'cn'; this.tablero[7][6] = 'cn';
        this.tablero[0][2] = 'ab'; this.tablero[0][5] = 'ab';
        this.tablero[7][2] = 'an'; this.tablero[7][5] = 'an';
        this.tablero[0][3] = 'rb'; this.tablero[0][4] = 'rab';
        this.tablero[7][3] = 'rn'; this.tablero[7][4] = 'ran';
        this.ganaBlancas = new Array();
        this.ganaNegras = new Array();
        for (let i = 0; i < this.tablero.length; i++) {
            for (let j = 0; j < this.tablero.length; j++)
                document.write(this.tablero[i][j] + " ");
            document.write("<br/>");
        }
    }

    moverPeonBlanco(pieza, posAct, nuePos) {
        nuePos == [(posAct[0] + 2), posAct[1]] && posAct == [1,
            posAct[1]]
            ? this.tablero[nuePos[0]][nuePos[1]] == null
                && this.talbero[(posAct[0]++), posAct[1]] == null
                ? moverVacio(posAct, nuePos)
                : console.log("Movimiento no válido")
            : nuePos == [(posAct[0]++), posAct[1]]
                ? this.tablero[nuePos[0]][nuePos[1]] == null
                    ? moverVacio(posAct, nuePos)
                    : console.log("Movimiento no válido")
                : nuePos == [(posAct[0] + 1), (posAct[1] + 1
                    || posAct[1] - 1)]
        this.tablero[nuePos[0]][nuePos[1]] != null
            ? moverLleno(pieza, posAct, nuePos)
            : console.log("Movimiento no válido")
    }

    moverPeonNegro(pieza, posAct, nuePos) {
        nuePos == [(posAct[0] - 2), posAct[1]] && posAct == [7,
            posAct[1]]
            ? this.tablero[nuePos[0]][nuePos[1]] == null
                && this.talbero[posAct[0]-- , posAct[1]] == null
                ? moverVacio(posAct, nuePos)
                : console.log("Movimiento no válido")
            : nuePos == [posAct[0]--, posAct[1]]
                ? this.tablero[nuePos[0]][nuePos[1]] == null
                    ? moverVacio(posAct, nuePos)
                    : console.log("Movimiento no válido")
                : nuePos == [posAct[0]--, (posAct[1]++ || posAct[1]--)]
        this.tablero[nuePos[0]][nuePos[1]] != null
            ? moverLleno(pieza, posAct, nuePos)
            : console.log("Movimiento no válido")
    }

    moverTorre(pieza, posAct, nuePos) {
        nuePos == [(nuePos[0]), (posAct[1])]
            ? caminoVacio()
                ? this.tablero[nuePos[0]][nuePos[1]] == null
                    ? moverVacio(posAct, nuePos)
                    : moverLleno(pieza, posAct, nuePos)
                : console.log("Movimiento no válido")
            : nuePos == [(posAct[0]), (nuePos[1])]
                ? caminoVacio() 
                    ? this.tablero[nuePos[0]][nuePos[1]] == null
                        ? moverVacio(posAct, nuePos)
                        : moverLleno(pieza, posAct, nuePos)
                    : console.log("Movimiento no válido")
                : console.log("Movimiento no válido")
    }

    moverCaballo(pieza, posAct, nuePos) {
        nuePos == [(posAct[0] + 2 || posAct[0] - 2), (posAct[1]++
            || posAct[1]--)] || [(posAct[0]++ || posAct[0]--),
            (posAct[1] + 2 || posAct[1] - 2)]
            ? this.tablero[nuePos[0]][nuePos[1]] == null
                ? moverVacio(posAct, nuePos)
                : moverLleno(pieza, posAct, nuePos)
            : console.log("Movimiento no válido")
    }

    moverAlfil(pieza, posAct, nuePos) {
        let diagonalValida = null;
        Math.abs(posAct[0] - nuePos[0]) == Math.abs(posAct[1] - nuePos[1])
            ? diagonalValida = true
            : diagonalValida = false
        caminoVacio() && iagonalValida
            ? this.tablero[nuePos[0]][nuePos[1]] == null
                ? moverVacio(posAct, nuePos)
                : moverLleno(pieza, posAct, nuePos)
            : console.log("Movimiento no válido")
    }

    moverRey(pieza, posAct, nuePos) {
        nuePos == [(posAct[0] + 1 || posAct[0] - 1 || posAct[0]),
        (posAct[1] || posAct[1] + 1 || posAct[1] - 1)]
            || [(posAct[0]), (posAct[1] + 1 || posAct[1] - 1)]
            ? this.tablero[nuePos[0]][nuePos[1]] == null
                ? moverVacio(posAct, nuePos)
                : moverLleno(pieza, posAct, nuePos)
            : console.log("Movimiento no válido")
    }

    moverReina(pieza, posAct, nuePos) {
        let caminoVacio = true, diagonalValida = null;
        ( Math.abs(posAct[0] - nuePos[0]) == Math.abs(posAct[1] - nuePos[1]) )? diagonalValida = true : diagonalValida = false;
        nuePos == [nuePos[0], posAct[1]] || [posAct[0], nuePos[1]
            ? caminoVacio()
                ? this.tablero[nuePos[0]][nuePos[1]] == null
                    ? moverVacio(posAct, nuePos)
                    : moverLleno(pieza, posAct, nuePos)
                : console.log("Movimiento no válido")
            : diagonalValida && caminoVacio()
                ? this.tablero[nuePos[0]][nuePos[1]] == null
                    ? moverVacio(posAct, nuePos)
                    : moverLleno(pieza, posAct, nuePos)
                : console.log("Movimiento no válido")
    }

    function caminoVacio() {
        let caminoVacio = true;
        for (let i = 0; i < Math.abs(nuePos[0] -
            posAct[0]) - 1; i++)
            this.tablero[i][posAct[1]] == null
                ? caminoVacio = true : caminoVacio = false
        return caminoVacio;
    }

    moverBlanco(pieza, posAct, nuePos) {
        if (pieza == 'pb')
            moverPeonBlanco(pieza, posAct, nuePos);
        else if (pieza == 'tb')
            moverTorre(pieza, posAct, nuePos);
        else if (pieza == 'cb')
            moverCaballo(pieza, posAct, nuePos);
        else if (pieza == 'ab')
            moverAlfil(pieza, posAct, nuePos);
        else if (pieza == 'rb')
            moverRey(pieza, posAct, nuePos);
        else if (pieza == 'rab')
            moverReina(pieza, posAct, nuePos);
        for (let i = 0; i < this.ganaBlancas.length; i++)
            if (this.ganaBlancas[i] == 'rb')
                return "Ha ganado el blanco";
    }

    moverNegro(pieza, posAct, nuePos) {
        if (pieza == 'pn')
            this.moverPeonNegro(pieza, posAct, nuePos);
        else if (pieza == 'tn')
            moverTorre(pieza, posAct, nuePos);
        else if (pieza == 'cn')
            moverCaballo(pieza, posAct, nuePos);
        else if (pieza == 'an')
            moverAlfil(pieza, posAct, nuePos);
        else if (pieza == 'rn')
            moverRey(pieza, posAct, nuePos);
        else if (pieza == 'ran')
            moverReina(pieza, posAct, nuePos);
        for (let i = 0; i < this.ganaNegras.length; i++)
            if (this.ganaNegras[i] == 'rb')
                return "Ha ganado el negro";
    }

    moverVacio(posAct, nuePos) {
        this.tablero[nuePos[0]][nuePos[1]] = this.tablero[posAct[0]][posAct[1]];
        this.tablero[posAct[0]][posAct[1]] = null;
    }

    moverLleno(pieza, posAct, nuePos) {
        if (pieza == 'pb' || pieza == 'tb' || pieza == 'cb' || pieza == 'ab'
            || pieza == 'rb' || pieza == 'rab')
            this.ganaBlancas.push(this.tablero[nuePos[0]][nuePos[1]]);
        else
            this.ganaNegras.push(this.tablero[nuePos[0]][nuePos[1]]);
        this.tablero[nuePos[0]][nuePos[1]] = this.tablero[posAct[0]][posAct[1]];
        this.tablero[posAct[0]][posAct[1]] = null;
    }
}

var ajedrez = new Ajedrez();
document.write(ajedrez);
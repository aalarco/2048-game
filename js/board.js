class Board {
    constructor(ctx, w, h) {
        this.ctx = ctx
        this.width = w
        this.height = h
        this.matrix = [
            [0, 0, 0, 2],
            [2, 0, 0, 2],
            [0, 0, 0, 0],
            [0, 2, 0, 4]
        ]

        this.setEventListener()
    }

    draw() {
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(0, 0, 600, 600)
    }



    drawNumber() {
        console.log("entraaa")
        let cellWidth = this.width / this.matrix[0].length - 1
        let cellHeight = this.height / this.matrix.length - 1
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                switch (this.matrix[i][j]) {
                    case 2:
                        console.log("CASO 2")
                        console.log(i, j)
                        this.ctx.fillStyle = '#B5CFB5'
                        this.ctx.fillRect(j * 150, i * 150, 150, 150)

                        // this.ctx.font = "50px sans-serif"
                        // this.ctx.fillStyle = "White"
                        // this.ctx.fillText(this.matrix[i][j], 150 * j + 50, 150 * i + 100)

                        break;
                    case 4:
                        console.log("CASO 4")
                        console.log(i, j)

                        this.ctx.fillStyle = '#549354'
                        this.ctx.fillRect(j * 150, i * 150, 150, 150)

                        // this.ctx.font = "50px sans-serif"
                        // this.ctx.fillStyle = "White"
                        // this.ctx.fillText(this.matrix[i][j], 150 * j + 50, 150 * i + 100)

                        break;
                    case 8:
                        console.log("CASO 8")
                        console.log(i, j)

                        this.ctx.fillStyle = '#71C671'
                        this.ctx.fillRect(j * 150, i * 150, 150, 150)

                        // this.ctx.font = "50px sans-serif"
                        // this.ctx.fillStyle = "White"
                        // this.ctx.fillText(this.matrix[i][j], 150 * j + 50, 150 * i + 100)

                        break;
                    case 16:
                        console.log("CASO 16")
                        this.ctx.fillStyle = '#284628'
                        this.ctx.fillRect(j * 150, i * 150, 150, 150)

                        break;
                    // case 32:
                    //     color = '#EE4A0F'
                    //     break;
                    // case 64:
                    //     color = '#EE0F0F'
                    //     break;
                    // case 128:
                    //     color = '#E4D505'
                    // case 256:
                    //     color = '#EDED62'
                    //     break;
                    // case 512:
                    //     color = '#B4C953'
                    // case 1024:
                    //     color = '#E5FF71'
                    default:
                        console.log("DEFAULT")
                        this.ctx.fillStyle = 'red'
                        this.ctx.fillRect(j * 150, i * 150, 150, 150)

                        break

                }

                this.ctx.font = "50px sans-serif"
                this.ctx.fillStyle = "White"
                this.ctx.fillText(this.matrix[i][j], 150 * j + 50, 150 * i + 100)
            }
        }
    }

    setEventListener() {
        document.onkeydown = e => {
            switch (e.keyCode) {
                case 37:
                    this.goLeft()
                    this.findEmptySpaces()
                    break
                case 38:
                    this.goUp()
                    this.findEmptySpaces()

                    break
                case 39:
                    this.goRight()
                    this.findEmptySpaces()

                    break
                case 40:
                    this.goDown()
                    this.findEmptySpaces()

                    break
            }
        }
    }


    // let arr = [2, 0, 2, 4]

    // //declaramos nuevo array
    // //recorremos el array 
    // //if 0 nada
    // //if number push/unshift
    // //rellenar con nulls
    // //if coincidencia añadir sumatorio y saltar una vuelta

    goRight() {
        this.moveOneRight()
        this.combinerRight()
        this.moveOneRight()
    }


    goLeft() {
        this.moveOneLeft()
        this.combinerLeft()
        this.moveOneLeft()
    }


    goUp() {
        this.moveOneUp()
        this.combinerUp()
        this.moveOneUp()
    }


    goDown() {
        this.moveOneDown()
        this.combinerDown()
        this.moveOneDown()
    }

    moveOneRight() {

        for (let i = 0; i < this.matrix.length; ++i) { //iterate down rows
            let counter = 0;
            while (counter < 3) { //do this 3 times 
                for (let j = this.matrix[i].length; j >= 0; --j) { //iterate across columns
                    if (this.matrix[i][j + 1] == 0 && this.matrix[i][j] != 0) { //move right if empty
                        this.matrix[i][j + 1] = this.matrix[i][j];
                        this.matrix[i][j] = 0;

                        // if (this.matrix[i][j] === 2) {
                        //     this.ctx.fillStyle = "red"
                        //     this.ctx.fillRect(j * 150, i * 150, 150, 150)
                        // } else if (this.matrix[i][j] === 0) {
                        //     this.ctx.fillStyle = "green"
                        //     this.ctx.fillRect(j * 150, i * 150, 150, 150)
                        // } else if (his.matrix[i][j] === 0) {
                        //     this.ctx.fillStyle = "orange"
                        //     this.ctx.fillRect(j * 150, i * 150, 150, 150)
                        // }


                    }
                }
                ++counter;
            }
        }
    }



    moveOneLeft() {
        for (let i = this.matrix.length - 1; i >= 0; --i) {
            let counter = 0
            while (counter < 3) {
                for (let j = this.matrix[i].length - 1; j >= 0; --j) {
                    if (this.matrix[i][j - 1] == 0 && this.matrix[i][j] != 0) {
                        this.matrix[i][j - 1] = this.matrix[i][j]
                        this.matrix[i][j] = 0
                    }
                }
                ++counter
            }
        }
    }

    moveOneDown() {
        for (let i = 0; i < this.matrix.length - 1; ++i) { //iterate down rows
            let counter = 0;
            while (counter < 3) { //do this 3 times 
                for (let j = this.matrix[i].length; j >= 0; --j) { //iterate across columns
                    if (this.matrix[i + 1][j] == 0 && this.matrix[i][j] != 0) { //move right if empty
                        this.matrix[i + 1][j] = this.matrix[i][j];
                        this.matrix[i][j] = 0;
                    }
                }
                ++counter;
            }
        }
    }

    moveOneUp() {
        console.log("uppity up")
        for (let i = this.matrix.length - 1; i > 0; i--) {
            let counter = 0
            while (counter < 3) {
                for (let j = this.matrix[i].length; j >= 0; j--) {
                    if (this.matrix[i - 1][j] == 0 && this.matrix[i][j] != 0) {
                        this.matrix[i - 1][j] = this.matrix[i][j]
                        this.matrix[i][j] = 0
                    }
                }
                counter++
            }
        }
    }

    combinerRight() {
        for (let i = 0; i <= this.matrix.length - 1; ++i) { //iterate down rows
            for (let j = this.matrix[i].length; j >= 0; --j) { //iterate across columns
                if (this.matrix[i][j] == this.matrix[i][j - 1]) {
                    this.matrix[i][j] *= 2;
                    this.matrix[i][j - 1] = 0;
                }
            }
        }
    }

    combinerDown() {
        for (let i = 0; i < this.matrix.length - 1; i++) {
            for (let j = this.matrix[i].length - 1; j >= 0; j--) {
                if (this.matrix[i][j] == this.matrix[i + 1][j]) {
                    console.log(this.matrix[i + 1][j])
                    this.matrix[i + 1][j] *= 2
                    this.matrix[i][j] = 0
                }
            }
        }
    }

    combinerUp() {
        for (let i = this.matrix.length - 1; i > 0; i--) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] == this.matrix[i - 1][j]) {
                    //console.log(this.matrix[i][j], this.matrix[i - 1][j])
                    this.matrix[i - 1][j] *= 2
                    this.matrix[i][j] = 0
                }
            }
        }

    }

    combinerLeft() {
        for (let i = this.matrix.length - 1; i >= 0; --i) {
            for (let j = 0; j < this.matrix[i].length - 1; j++) {
                if (this.matrix[i][j] == this.matrix[i][j + 1]) {
                    console.log(this.matrix[i][j + 1])
                    this.matrix[i][j] *= 2
                    this.matrix[i][j + 1] = 0
                }
            }
        }
    }


    findEmptySpaces() {

        let interruptor = false
        this.matrix.forEach((row, idx) => {
            let rowNum = idx
            let colNum = row.indexOf(0)

            this.matrix[rowNum][colNum] = 2
            if (row.indexOf(0) == -1) { }
        })
    }



    // addTile() {

    //     for(let i = 0; i < this.matrix.length; i++){
    //             if (this.matix[i][j] == 0){

    //             }
    //     }
    // }

    addRandomTile() {
        if (this.cellsAvailable()) {
            var value = Math.random() < 0.9 ? 2 : 4;
            var tile = new Tile(this.grid.randomAvailableCell(), value);

            this.grid.insertTile(tile);
        }

    }

}


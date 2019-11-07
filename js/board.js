class Board {
    constructor(ctx, w, h) {
        this.ctx = ctx
        this.width = w
        this.height = h
        this.matrix = [
            [0, 0, 0, 2],
            [2, 4, 2, 2],
            [2, 0, 2, 2],
            [0, 2, 2, 4]
        ]

        this.setEventListener()
    }

    draw() {
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(0, 0, 800, 800)
    }



    drawNumber() {
        let cellWidth = this.width / this.matrix[0].length - 1
        let cellHeight = this.height / this.matrix.length - 1
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                this.ctx.font = "50px sans-serif"
                this.ctx.fillStyle = "White"

                if (this.matrix[i][j] == 0) {

                } else {
                    this.ctx.fillText(this.matrix[i][j], 200 * j + 50, 200 * i + 100)
                }
                // if(this.matrix[i][j] === 0){
                //     return ''
                // }

                // console.log(this.matrix[i][j])
            }
        }
    }

    setEventListener() {
        document.onkeydown = e => {
            switch (e.keyCode) {
                case 37:
                    this.goLeft()
                    break
                case 38:
                    this.goUp()
                    break
                case 39:
                    this.goRight()
                    break
                case 40:
                    this.goDown()
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


    findEmptySapces() {
        
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


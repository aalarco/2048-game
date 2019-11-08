const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    matrix: [[8, 4, 4, 16], [2, 2, 0, 4], [2, 2, 0, 4], [2, 2, 0, 4]],

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = 800;
        this.canvas.height = 800;
        this.start();
    },

    start() {
        this.reset();
        this.interval = setInterval(() => {
            this.famesCounter++;
            if (this.famesCounter > 1000) this.framesCounter = 0
            this.drawAll()
        }, 1000 / 60)
    },

    reset() {
        this.board = new Board(this.ctx, this.width, this.height)
    },


    drawAll() {
        this.board.draw()
        this.board.drawNumber()
    },

    

}




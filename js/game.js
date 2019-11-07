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
    }




}



//var arr = [1,2,2,4,0]

/*function move(arr) {
    let newArr = []
    for(let i = arr.length -1; i >= 0; i--){
        if(arr[i] === 0){

        } else if(arr[i] == arr[i-1]){
            newArr.unshift(arr[i] + arr[i-1])
        } else{
            newArr.unshift(arr[i])
        }
    }
    console.log(newArr)
}*/


// var cols = 4
// var rows = 4


// function draw(){
//     background(0)


//     for(let i = 0; i < cols; i++){
//         for(let j = 0; j < rows; i++){
//             let width = i*100
//             let height = j*100

//             stroke(0)
//             rect(width, height, 100, 100)
//         }
//     }
// }



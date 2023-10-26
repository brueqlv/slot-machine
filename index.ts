const prompts = require('prompts');

type SlotPosition = {
    x: number,
    y: number
}

type Line = {
    positions: SlotPosition[]
}

let board: number[][] = [
    [1,1,1,1],
    [1,2,1,1],
    [1,1,3,4]
];

const lines: Line[] =[
    {
        positions: [
            {x:0,y:0},
            {x:1,y:1},
            {x:2,y:2},
            {x:2,y:3},
        ]
    }
];


(async () => {

    board.forEach(row => {
        console.log(row.join(" - "));
    });

    lines.forEach(line =>{
let lineValues: number[] = [];

        line.positions.forEach(position => {
            const value = board[position.x][position.y];
            console.log(value);
            lineValues.push(value);
        });

        console.log(lineValues);
    });

})();
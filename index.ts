const prompts = require('prompts');

let playerCash: number = 100;

type SlotPosition = {
    x: number,
    y: number
}

type Line = {
    positions: SlotPosition[]
}

type GameSymbol = {
    value: string,
    price: number
}

const SYMBOLS: GameSymbol[] = [
    { value: " A", price: 5 },
    { value: " J", price: 2 },
    { value: " K", price: 4 },
    { value: "10", price: 1 },
    { value: " Q", price: 3 },
]

let board: GameSymbol[][] = [];

const BOARD_ROWS:number = 3;
const BOARD_COLUMNS:number = 3;


const lines: Line[] = [
    {
        positions: [
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 2 },
        ]
    },
    {
        positions: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: 2 },
        ]
    },
    {
        positions: [
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 1, y: 2 },
        ]
    },
    {
        positions: [
            { x: 2, y: 0 },
            { x: 2, y: 1 },
            { x: 2, y: 2 },
        ]
    },
    {
        positions: [
            { x: 2, y: 0 },
            { x: 1, y: 1 },
            { x: 0, y: 2 },
        ]
    }
];


(async () => {
    while(true){
        const response = await prompts(
            {
              type: 'toggle',
              name: 'answer',
              message: `Spin?`,
              active: "Yes",
              inactive:"No"
            }
          );
            if(!response.answer){
                break;
            }

            //cost per spin
            playerCash -=1;

        
        for (let row = 0; row < BOARD_ROWS; row++) {
            board[row] = [];
            for (let index = 0; index < BOARD_COLUMNS; index++) {
                board[row].push(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);
            }
        }
    
            //Create a function to display board
        board.forEach(row => {
            const elements: string[] = [];
    
            row.forEach(symbol => {
                elements.push(symbol.value);
            });
    
            console.log(elements.join(" - "));
        });
    
        lines.forEach(line => {
            let lineValues: GameSymbol[] = [];
    
            line.positions.forEach(position => {
                lineValues.push(board[position.x][position.y]);
            });
    
            if (lineValues.every((value, i, values) => value === values[0])) {
                console.log("We got a line");
                playerCash += lineValues[0].price;
            }
    
        });
    
        console.log("Player cash: " + playerCash);
    }



})();
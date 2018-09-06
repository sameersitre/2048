
//2048
var matrix = [
    [0, 4, 4, 0],
    [2, 8, 0, 0],
    [16, 16, 2, 0],
    [0, 0, 0, 0]
];

var score = 0;
var random = 0;
var emptyElementsArray = []
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

getInput();

function getInput() {

    displayGame();
    rl.question('UP(W) DOWN(S) LEFT(A) RIGHT(D) QUIT(Q)', answer => {
        enteredKey(answer);
    });
}[]

/* -------------------KEY ENTERED CONDITIONS-------------------- */
function enteredKey(answer) {

    if (answer === 'a') {
        console.log('Shifted Left', answer);
        leftShifter();
        getInput();
    }
    else if (answer === 's') {
        console.log('Shifted Down', answer);
        downShifter();
        getInput();
    }
    else if (answer === 'd') {
        console.log('Shifted Right', answer);
        rightShifter();
        addTwoinEmptyElements();
        getInput();
    }
    else if (answer === 'w') {
        console.log('Shifted Top', answer);
        topShifter();
        getInput();
    }
    else if (answer === 'q') {
        console.log('Game Quitted');
        rl.close();
    }
    else {
        console.log('Wrong key pressed');
        getInput();
    }
}
/* ------------------DISPLAY------------------- */
function displayGame() {

    console.log("**** 2 0 4 8 ****\n\nScore : " + score + "\n\n")
    for (let i = 0; i < 4; i++) {
        console.log(matrix[i][0] + "\t" + matrix[i][1] + "\t" + matrix[i][2] + "\t" + matrix[i][3] + "\t\n")
    }
}

/* -----------------ADD 2 IN EMPTY RANDOM ELEMENTS------------------- */
function addTwoinEmptyElements() {

    //find empty elements and put into variable array
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (matrix[i][j] == 0) {
                emptyElementsArray.push(i.toString() + j.toString())
            }
        }
    }
    console.log(emptyElementsArray);
    /* empty array->  emptyElementsArray= ['00', '01', '02', '10', '11', '20', '21', '30', '31', '32', '33' ] */
    //getting two random elementS from array emptyElementsArray
  

        let x = emptyElementsArray[Math.floor(Math.random() * emptyElementsArray.length)];
        let y = emptyElementsArray[Math.floor(Math.random() * emptyElementsArray.length)];

        //now, adding 2 in matrix of random index 
       
            matrix[x.charAt(0)][x.charAt(1)] = 2;
            matrix[y.charAt(0)][y.charAt(1)] = 2;

    


}

/* -------------------HORIZONTAL EQUAL NOS SUM + shift right-------------------- */
function rightShifter() {

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (matrix[i][j] == matrix[i][j + 1]) {
                //if left & right elements equal, right element multiplied by itself, & left element assigned to 0
                matrix[i][j + 1] *= 2
                matrix[i][j] = 0;
            }
        }
    }

    //SHIFT ZEROES IN THE LEFT
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 4; k++) {
            for (let j = 4; j > 0; j--) {
                if (matrix[i][j] === 0 && matrix[i][j - 1] != 0) {
                    matrix[i][j] = matrix[i][j - 1];
                    matrix[i][j - 1] = 0;
                }
            }
        }
    }
}

function leftShifter() {
    //adding equal numbers in a row
    for(let i=0;i<4;i++){
        for(let j=0;j<4; j++){
            if(matrix[i][j]===matrix[i][j+1]){
                matrix[i][j] *=2;
                matrix[i][j+1]=0;   
            }
        }
    }

    


}

function topShifter() {
    console.log('Shifted Top');
}
function downShifter() {
    console.log('Shifted Down');

}
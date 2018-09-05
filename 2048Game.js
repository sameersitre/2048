
//2048
var matrix = [
    [0, 4, 4, 0],
    [2, 8, 0, 0],
    [16, 16, 2, 0],
    [0, 0, 0, 0]
];

var score = 0;
var random = 0;
var emptyElementsIndexArray = []
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
}

function enteredKey(answer) {
    if (answer === 'a') {
        console.log('Shifted Left', answer);
    }
    else if (answer === 's') {
        console.log('Shifted Down', answer);
    }
    else if (answer === 'd') {
        console.log('Shifted Right', answer);
        rightShifter();

        getInput();
    }
    else if (answer === 'w') {
        console.log('Shifted Top', answer);
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
function displayGame() {

    console.log("**** 2 0 4 8 ****\n\nScore : " + score + "\n\n")
    for (var i = 0; i < 4; i++) {
        console.log(matrix[i][0] + "\t" + matrix[i][1] + "\t" + matrix[i][2] + "\t" + matrix[i][3] + "\t\n")
    }
}

//addTwoinEmptyElements();
function addTwoinEmptyElements() {
    //find empty elements and put into variable array
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (matrix[i][j] == 0) {
                emptyElementsIndexArray.push(i.toString() + j.toString())
            }
        }
    }
    console.log(emptyElementsIndexArray);
    //getting random element from emptyElementsIndexArray

    var x = emptyElementsIndexArray[Math.floor(Math.random() * emptyElementsIndexArray.length)]
    //now, adding 2 in matrix of random index 
    matrix[x.charAt(0)][x.charAt(1)] = 2;

}

function rightShifter() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (matrix[i][j] == matrix[i][j + 1]) {
                //if left & right elements equal, right element multiplied by itself, & left element assigned to 0
                matrix[i][j + 1] *= 2
                matrix[i][j] = 0;

                //if right element is 0 then left element is assigned to it and left assigned to 0
                // if (matrix[i][j + 1] == 0) {
                //     matrix[i][j + 1] = matrix[i][j]
                //     matrix[i][j] = 0
                // }
            }
        }
    }

    for (i = 0; i < 4; i++) {
        for (j = 3; j >= 0; j--) {
            if (matrix[i][j] == 0) {
            }
        }
    }
    // displayGame();
    // for (var i = 4; i > 0; i--) {
    //     for (var j = 4; j > 0; j--) {
    //         if (matrix[i][j] == 0 ) {
    //             matrix[i][j] = matrix[i][j - 1]
    //             matrix[i][j - 1] = 0
    //         }
    //     }
    // }
}

function leftShifter() {
    console.log('Shifted Left');
}
function topShifter() {
    console.log('Shifted Top');
}
function downShifter() {
    console.log('Shifted Down');

}
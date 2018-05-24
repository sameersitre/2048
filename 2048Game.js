
//2048

var matrix = [];
var score = 0;
var random = 0;

// //creating 2d array
// for (var i = 0; i < 4; i++) {
//     matrix[i] = [];
//     for (var j = 0; j < 4; j++) {
//         matrix[i][j] = 0
//     }
// }
for (var i = 0; i < 4; i++) {
    matrix[i] = new Array(4);
}


// function randomizer() {
//     function verify() {
//         var i = Math.floor(Math.random() * 3)
//         var j = Math.floor(Math.random() * 3)
//         if (matrix[i][j] == 0) {
//             matrix[i][j] = 2;
//         }
//         else {
//             verify();
//         }
//     }
//     var random = 0;
// }
//randomizer()
displayGame();
//getInputfromUser();

function randomizer() {
    var i = Math.floor(Math.random() * 4)
    var j = Math.floor(Math.random() * 4)
verify();
    function verify() {
        if(matrix[i][j]==undefined){
            matrix[i][j]=2;
        }
        else {
            verify();
        }
    }
}
function displayGame() {
    randomizer()

    console.log("**** 2 0 4 8 ****\n\nScore : " + score + "\n\n")
    for (var i = 0; i < 4; i++) {

        console.log(matrix[i][0] + "   " + matrix[i][1] + "   " + matrix[i][2] + "   " + matrix[i][3] + "   \n")

    }
    getInputfromUser();
}

function getInputfromUser() {
    // const readline = require('readline');

    // const rl = readline.createInterface({
    //   input: process.stdin,
    //   output: process.stdout
    // });
    // const readline = require('readline');
    // readline.on('line', (input) => {
    //     console.log(`Received: ${input}`);
    //   });
}

function rightShifter() {

    randomizer();//comes in the last
}
function leftShifter() {
    randomizer();
}
function topShifter() {
    randomizer();
}
function bottomShifter() {
    randomizer();
}
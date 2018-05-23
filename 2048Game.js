//2048




var matrix = [];
var score = 0;
var randomizer = 0;
for (var i = 0; i < 4; i++) {
    matrix[i] = [];
    for (var j = 0; j < 4; j++) {
        matrix[i][j] = 0
    }
}
displayGame();
//GET value of KEY PRESSED
//
function keyPressed() {

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
function randomizer() {
    function verify() {
        var i = Math.floor(Math.random() * 4)
        var j = Math.floor(Math.random() * 4)
        if (matrix[i][j] != 0) {
            verify();
        }
        else {
            matrix[i][j] = 2;
        }
    }
    var randomizer = 0;
}

function displayGame() {
    console.log("\t\t2048\nScore : " + score + "\n\n")
    for (var i = 0; i < 4; i++) {

        console.log(matrix[i][0] + "   " + matrix[i][1] + "   " + matrix[i][2] + "   " + matrix[i][3] + "   \n")

    }
}
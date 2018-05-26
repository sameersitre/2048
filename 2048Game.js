
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

displayGame();
rightShifter();
displayGame();
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
    displayGame();

}

function displayGame() {

    console.log("**** 2 0 4 8 ****\n\nScore : " + score + "\n\n")
    for (var i = 0; i < 4; i++) {

        console.log(matrix[i][0] + "\t" + matrix[i][1] + "\t" + matrix[i][2] + "\t" + matrix[i][3] + "\t\n")

    }
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

    displayGame();

    for (i = 0; i < 4; i++) {
        for (j = 3; j >=0 ; j--) {
            if(matrix[i][j]==0){

            }
        }
    }
    displayGame();
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

}
function topShifter() {
}
function bottomShifter() {
}
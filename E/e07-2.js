//5:47
//in this attempt, I tried to code the solution similar to what was shown in the video
//this took me longer because I had forgotten the format of javascript functions

var num = 1000;

function findTotal(number) {
    var total = 0;
    for (var x = 0; x < num; x++) {
        if ((x % 3 === 0) || (x % 5 === 0)) {
            total = total + x;
        }
    }
}

console.log(findTotal(num));
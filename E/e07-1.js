//4:27

var total = 0;

for (var x = 0; x <= 1000; x++) {
    if ((x % 3 === 0) || (x % 5 === 0)) {
        total = total + x;
    }
}

console.log(total);
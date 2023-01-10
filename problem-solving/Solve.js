//Bài 1
function hailstone(num) {
    let sequence = [num];
    let element = num;
    while (element != 1) {
        if (element % 2 == 0) {
            element = element / 2;
            sequence.push(element);
        } else {
            element = element * 3 + 1;
            sequence.push(element);
        }
    }
    return sequence;
}

console.log(hailstone(10));
console.log(hailstone(7));
console.log(hailstone(1));

//Bài 2
const freeShipping = (order) => {
    let sum = 0;
    for (let key in order) {
        sum += order[key];
    }
    if (sum > 50) {
        return true;
    }
    return false;
};

console.log(freeShipping({ Shampoo: 5.99, "Rubber Ducks": 15.99 }));
console.log(
    freeShipping({ Monopoly: 11.99, "Secret Hitler": 35.99, Bananagrams: 13.99 })
);
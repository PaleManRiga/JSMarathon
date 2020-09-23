const firstCustom = prompt("Enter sentence");
const secondCustom = prompt("Enter second sentence");
const searchLetter = prompt("Enter letter to count");
let result;

function getRow(firstRow, secondRow) {
    let firstCounter = 0;
    let secondCounter = 0;
    for (let i = 0; i < firstRow.length; i++) {
        if (firstRow.charAt(i) === searchLetter) {
            firstCounter++;
        }
    }
    for (let i = 0; i < secondRow.length; i++) {
        if (secondRow.charAt(i) === searchLetter) {
            secondCounter++;
        }
    }
    if (firstCounter > secondCounter) {
        result = firstCustom + "\n" + "first row has more letters " + searchLetter;
    } else if (firstCounter < secondCounter) {
        result = secondCustom + "\n" +  "second row has more letters " + searchLetter;
    }
    if (firstCounter === secondCounter) {
        result = searchLetter + " letters amount is equal";
    }
    if (firstCounter === 0 && secondCounter === 0 ){
        result = "There is no letters you asked to count"
    }
}

console.log(getRow(firstCustom, secondCustom));

alert(result);
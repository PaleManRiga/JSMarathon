const str = "мама мыла раму";
const str2 = "собака друг человека";

function getRow(firstRow, secondRow){
    let firstCounter = 0;
    let secondCounter = 0;
    for (let i = 0; i < firstRow.length; i++){
        if(firstRow.charAt(i) === "а"){
            firstCounter++;
        }
    }
    for (let i = 0; i < secondRow.length; i++){
        if(secondRow.charAt(i) === "а"){
            secondCounter++;
        }
    }
    if(firstCounter > secondCounter){
        console.log("first row has more letters a")
    } else if (firstCounter < secondCounter){
        console.log("second row has more letters a")
    }
    if(firstCounter === secondCounter){
        console.log("a letters amount is equal")
    }
}

console.log(getRow(str, str2));
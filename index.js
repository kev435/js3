
  //oppgave 1   

for (let i = 1; i < 11; i++){
    console.log(i);
    document.write('<br>Dette er din tekst</br>')
}

//oppgave 2 

for (let a=0; a <51; a++){
    console.log(a);
    // document.write('<br>',a,'</br>')
    document.write(`<br>${a}</br>`)
}

//oppgave 3 
let sum = 0;
console.log(sum);
for (let i = 1; i <11; i++ ) {
    sum = sum + i;
    
}
console.log("Summen er ", sum);

//oppgave 4 

str = ""

for (let i = 1; i <5; i++ ) {
    str += "#"
    console.log(str)
}

//oppgave 5 
for (let i = 1; i < 51; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//oppgave 6
for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
        document.writeln(i);
    }
}
document.write(`<br>`)
// oppgave 7

const numbers = [12, 45, 7, 34, 19];
 
let largest = numbers[0];
 
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
document.write(largest)

// oppgave 8 
for (let i = 6; i > 0; i--) {
    document.write(`<br><h${i}>Røyken VGS er best</h${i}></br>`)
}
 
let iAmGlobal = 'A value'

if ( true ) {
    let iAmLocal = 'Another Value'
    // var iAmLocal = 'Another Value'
    iAmGlobal = 'Value 2'
    console.log(iAmGlobal)
    console.log(iAmLocal)
}

// console.log(iAmLocal)
console.log(iAmGlobal)


//King's Problem

// let king = 'john'
// if (true) {
//     let king = 'sam'
//     if (true){
//         let king = 'ram'
//         console.log(king);
//     }
// }

// if (true) {
//     console.log('I am second part : ' + king)
// }
const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']

console.log(days[0]);

// let sayHello = function(){
//     console.log('Greetings');
// }

// days.forEach(sayHello)

// days.forEach(function(){
//     console.log('Greetings');
// }
// )

days.forEach(function(day) {
    console.log(day);
}
)

days.forEach(function(day,index) {
    console.log(` ${index+1} Starts with -- ${day}`);
}
)
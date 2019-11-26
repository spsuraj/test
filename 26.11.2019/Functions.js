let sayHello = function(name){
    console.log(`Greetings ${name}`);
    console.log(`Welcome ${name}`)
}

// sayHello('John')

let fullnamemaker = function (firstname, lastname) {
console.log('Welcome');    
console.log(`Happy to have you here, ${firstname} ${lastname}`);    
}

fullnamemaker('John','Doe')


let myAdder = function (num1,num2) {
    let added = num1 + num2
    return added 
}

let result = myAdder(3,10)
console.log(result);
console.log(myAdder(3,5));

//Multiply

let myMultiplier = function (num1,num2) {
    return num1 * num2    
}

console.log(myMultiplier(50,25));

let Guest = function(name = 'John', score = 0){
    return 'Hello ' + name + ' and your course count is : ' + score
}

console.log(Guest('Suraj',50));

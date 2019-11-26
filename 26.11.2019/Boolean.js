var temperature = 0
temperature =   50
console.log("The current temperature is : " + temperature)

//Grading using conditional programming
// 10 - Great Job
// 5 - Work harder
// 2 - poor
// 0 - fail

let getMyGrade = function(currentMarks, TotalMarks){
    let myPercent = (currentMarks/TotalMarks) * 100

    let myGrade=''

    if (myPercent >= 90) {
        myGrade = 'A'
    }else if (myPercent >= 80) {
        myGrade = 'B'
    }else if (myPercent >= 70) {
        myGrade = 'C'
    }else if (myPercent >= 60) {
        myGrade = 'D'
    }else{
        myGrade = 'F'
    }

    return `Your Grade is ${myGrade} and percentage is ${myPercentage}`
}

let YourResult = getMyGrade(92,100)
console.log(YourResult)
//Bollean - has two values (true or false)

let Marks = 7
let myGrade = (Marks<10)
console.log(myGrade);



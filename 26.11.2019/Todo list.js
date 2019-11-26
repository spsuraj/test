const myTodo = []

myTodo.push('Wake up at 5')
myTodo.push('Make your bed')
myTodo.push('Brush your teeth')

myTodo.forEach(function(todo,index){
    console.log(`Your taks no. ${index + 1} is : ${todo}`)
})


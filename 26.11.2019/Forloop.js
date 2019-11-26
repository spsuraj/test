const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']

console.log(days.length);

console.log('\n');

for (let index = 0; index < days.length; index++) {
    const element = days[index];
    console.log(element);
}

console.log('\n');

for (let index = days.length - 1 ; index >=0 ; index--) {
    console.log(days[index]);
}
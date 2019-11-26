let isVerified = true
let isLoggedIn = true
let hastPaymentToken = true
let isGuest = true

if(isVerified && isLoggedIn && hastPaymentToken) {
    console.log('Greetings to the user')
    console.log('Grant access to the course')
} else if ( isVerified || isGuest ) {
    console.log('Allow free preview')
} else {
    console.log('Please contact admin')
}
let myName = 'UrkeNzY';

if (myName === 'UrkeNzY') {
    console.log('Hello!');
}

let isLoggedIn = true;

if (!isLoggedIn) {
    console.log('User is logged in!');
}

const enteredUsername = ''; //falsy value --> empty strings and 0 are treated as false where boolean is wanted, anything else is treated as true (truthy value)

if (enteredUsername) {
    console.log('Input is valid!');
}
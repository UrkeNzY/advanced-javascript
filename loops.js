for (let i = 0; i < 10; i++) {
    console.log(i);
}

const users = ['Max', 'Anna', 'Joel'];

for (const user of users) {
    console.log(user);
}

// Looping through an array with for loop
// for (i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

const loggedInUser = {
    name: 'UrkeNzY',
    age: 18,
    isAdmin: true
};

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
}

let isFinished = false;

while (!isFinished) {
    isFinished = confirm('Do you want to quit?');
}

console.log('Done!');


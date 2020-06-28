const user = {
    name: 'Nicola',
    lastname: 'Lanzoni',
    age: 38
}

// let setHobby = require('./object');
// setHobby(user);


require('./object')(user)
console.log(user);




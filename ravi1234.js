const obj = {
    name: 'booo',
    sing: function () {
        return 'lalalalala ' + this.name
    },
    singAgain: function () {
        return this.sing() + '!'
    }
}

console.log(obj.singAgain())

// function importantPerson() {
//     console.log(this.name)
// }

// const name = 'Sunny';
// const obj1 = {
//     name: 'Cassy',
//     importantPerson: importantPerson
// }
// const obj2 = {
//     name: 'Jacob',
//     importantPerson: importantPerson
// }

// obj1.importantPerson()
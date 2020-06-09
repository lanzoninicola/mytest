const writeHello = require('./functions.js')
const delayWriteHello = require('./functions')

async function sayHello() {
    const helloWorld = await delayWriteHello(10000)

    console.log(helloWorld)
}


sayHello()
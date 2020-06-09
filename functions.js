const writeHello = () => {
    sayHelloWorld = 'Hello World'
    return sayHelloWorld
}

const delayWriteHello = (ms) => {
    return new Promise((resolve) => {

        setTimeout(resolve('Hello World'), ms)


    })
}


module.exports = writeHello
module.exports = delayWriteHello
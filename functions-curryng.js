//const multiply = (a, b) => a * b

const curriedMultiply = (a) => (b) => a * b

const multiplyBy5 = curriedMultiply(5)


multiplyBy5(10)
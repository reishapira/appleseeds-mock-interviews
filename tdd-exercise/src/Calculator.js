export class Calculator {
  constructor(value = 0) {
    this.value = value
  }

  add(num) {
    this.value += num
  }

  subtract(num) {
    this.value -= num
  }

  multiply(num) {
    this.value *= num
  }

  divide(num) {
    if (num === 0) {
      throw new Error('Cannot divide by zero')
    }

    this.value /= num
  }

  clear() {
    this.value = 0
  }
}

import { Calculator } from '../src/Calculator.js'
import { assert } from 'chai'

describe('Calculator', () => {
  let calculator

  beforeEach(() => {
    calculator = new Calculator()
  })

  it('should initialize with a default value of 0', () => {
    assert.equal(calculator.value, 0)
  })

  it('should correctly add numbers', () => {
    calculator.add(1)
    calculator.add(2)

    assert.equal(calculator.value, 3)
  })

  it('should correctly subtract numbers', () => {
    // TODO
  })

  it('should correctly multiply numbers', () => {
    // TODO
  })

  it('should correctly divide numbers', () => {
    // TODO
  })

  it('should throw an error when dividing by zero', () => {
    // TODO
  })

  it('should clear the value to 0', () => {
    // TODO
  })
})

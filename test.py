

class Calculator:
    pass

################################


# Functionality first, tests later

# Test Driven Design (TDD) -> tests first, functionality later

def test_calculator_add()->None:

    c = Calculator() 

    c.add(5)
    c.add(5)

    assert c.value == 10


def test_calculator_multiply(): 

    c = Calculator(1)

    c.mult(5)
    c.mult(5)

    assert c.value == 25

    

test_calculator_add()
test_calculator_multiply()

def add(x , y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        raise ValueError('Cannot divide by zero!')
    return x / y

def random(x, y) {
    if x == 0:
        return y
    
    if y == 0:
        return x

    if x + y == 2:
        return x*y
    
    return x+y
}

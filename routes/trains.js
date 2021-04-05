/**
    1 - 2 - 3 - 4 
                  \ 
    A - B - C - D - 5
                |     \
                E      6
                |        \
                F         7
 */

class Station{
    constructor(name,line, eta) {
        // just for simplicity, eta starts from 0, +10, +10 , +10 from the beginning of the station line.
        this.name = name;
        this.line = line
        this.eta = eta
        this.neighbors = [];
    }
}
let A = new Station('A', 'alphabet', 0)
let B = new Station('B', 'alphabet', 10)
let C = new Station('C', 'alphabet', 10)
let D = new Station('D', 'alphabet', 10)
let E = new Station('E', 'alphabet', 10)
let F = new Station('F', 'alphabet', 10)
let one = new Station('one', 'number', 0)
let two = new Station('two', 'number', 10)
let three = new Station('three', 'number', 10)
let four = new Station('four', 'number', 10)
let five = new Station('five', 'number', 10)
let six = new Station('six', 'number', 10)
let seven = new Station('seven', 'number', 10)

/**
    1 - 2 - 3 - 4 
                  \ 
    A - B - C - D - 5
                |     \
                E      6
                |        \
                F         7
 */

A.neighbors.push(B)
B.neighbors.push(A,C)
C.neighbors.push(B,D)
D.neighbors.push(C, E, five);
E.neighbors.push(D, F);
F.neighbors.push(E);
one.neighbors.push(two);
two.neighbors.push(one, three);
three.neighbors.push(two, four);
four.neighbors.push(three, five);
five.neighbors.push(four, D, six);
six.neighbors.push(five, seven);
seven.neighbors.push(six);

module.exports ={one, A}
const {Triangle, Circle, Square} = require('./shapes.js');
//tests for each of these classes using jest
describe('tests for the Triangle class', () => {
    describe('Tests if the shape', () => {
        it('Should be a new instance of the Triangle class', () =>{
           const testTriangle = new Triangle();
            expect(testTriangle).toBeInstanceOf(Triangle); 
        })
    });
});
describe('tests for the Circle class', () => {
    describe('Tests if the shape', () => {
        it('Should be a new instance of the Circle class', () =>{
           const testCircle = new Circle ();
            expect(testCircle ).toBeInstanceOf(Circle); 
        })
    });
})
describe('tests for the Square class', () => {
    describe('Tests if the shape', () => {
        it('Should be a new instance of the Square class', () =>{
           const testSquare = new Square();
            expect(testSquare).toBeInstanceOf(Square); 
        })
    });
})
//test each shape class for render method returning a string with the given shape color/values

const {Triangle, Circle, Square} = require('./shapes.js');
const testColor = 'green';
const textColor= 'white';
const testText = 'boo';
//tests for each of these classes using jest
describe('tests for the Triangle class', () => {
    describe('Tests if the shape', () => {
        it('Should be a new instance of the Triangle class', () =>{
           const testTriangle = new Triangle();
            expect(testTriangle).toBeInstanceOf(Triangle); 
        })
    });
    describe('Tests color change', ()=> {
        it('Should change the shape background color to green', () => {
            const testTriangle = new Triangle ('Triangle', testColor);
            expect(testTriangle.shapeColor).toBe(testColor);
        })
    });
    describe('Tests text color change', () => {
        it('Should change the logo text color to white', () => {
            const testTriangle = new Triangle ('Triangle', 'green', textColor);
            expect(testTriangle.textColor).toBe(textColor);
        })
    });
    describe('Tests that logo name is set', () => {
        it('Should set the logo text to be "boo"', () => {
            const testTriangle = new Circle ('Triangle', 'green', 'white', testText);
            expect(testTriangle.name).toBe(testText);
        })
    });
    describe('Tests the render functionality', () => {
        it('Should test a parameter against the rendered code', () => {
            const testTriangle = new Triangle('Triangle', testColor, textColor, testText);
            expect(testTriangle.render()).toEqual(`
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="160,10 275, 200 30, 200" fill="green"/>
        <text x="160" y="130" font-size="50" text-anchor="middle" fill="white">boo</text></svg>`);
        });
    });
});
describe('tests for the Circle class', () => {
    describe('Tests if the shape', () => {
        it('Should be a new instance of the Circle class', () =>{
           const testCircle = new Circle ();
            expect(testCircle ).toBeInstanceOf(Circle); 
        })
    });
    describe('Tests color change', ()=> {
        it('Should change the shape background color to green', () => {
            const testCircle = new Circle ('Circle', testColor);
            expect(testCircle.shapeColor).toBe(testColor);
        })
    });
    describe('Tests text color change', () => {
        it('Should change the logo text color to white', () => {
            const testCircle = new Circle ('Circle', 'green', textColor);
            expect(testCircle.textColor).toBe(textColor);
        })
    });
    describe('Tests that logo name is set', () => {
        it('Should set the logo text to be "boo"', () => {
            const testCircle = new Circle ('Circle', 'green', 'white', testText);
            expect(testCircle.name).toBe(testText);
        })
    })
    describe('Tests the render functionality', () => {
        it('Should test a parameter against the rendered code', () => {
            const testCircle = new Circle('Circle', testColor, textColor, testText);
            expect(testCircle.render()).toEqual(`
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="75" fill="green"/>
        <text x="150" y="110" font-size="50" text-anchor="middle" fill="white">boo</text></svg>`);
        })
    })
    //color
    //textcolor
    //name
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

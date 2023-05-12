//Importing shape classes
const {Triangle, Circle, Square} = require('./shapes.js');
//Global testing variables
const testColor = 'green';
const textColor= 'white';
const testText = 'boo';
//tests for each of these classes using jest
describe('tests for the Triangle class', () => {
    //This tests to see if the contructor method is functioning to create and initiate a new object from the Shape class.
    describe('Tests if the shape', () => {
        it('Should be a new instance of the Triangle class', () =>{
           const testTriangle = new Triangle();
            expect(testTriangle).toBeInstanceOf(Triangle); 
        })
    });
    //The next three tests each test a parameter into the constructor class and test to see if the outcome values are initiated correctly.
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
            const testTriangle = new Triangle ('Triangle', 'green', 'white', testText);
            expect(testTriangle.name).toBe(testText);
        })
    });
    //This tests passes the testing variables in as parameters to a new shape instance, renders it, and compares that value to the code that is expected.
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
    //This tests to see if the contructor method is functioning to create and initiate a new object from the Shape class.
    describe('Tests if the shape', () => {
        it('Should be a new instance of the Circle class', () =>{
           const testCircle = new Circle ();
            expect(testCircle ).toBeInstanceOf(Circle); 
        })
    });
    //The next three tests each test a parameter into the constructor class and test to see if the outcome values are initiated correctly.
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
    //This tests passes the testing variables in as parameters to a new shape instance, renders it, and compares that value to the code that is expected.
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
    //This tests to see if the contructor method is functioning to create and initiate a new object from the Shape class.
    describe('Tests if the shape', () => {
        it('Should be a new instance of the Square class', () =>{
           const testSquare = new Square();
            expect(testSquare).toBeInstanceOf(Square); 
        })
    });
    //The next three tests each test a parameter into the constructor class and test to see if the outcome values are initiated correctly.
    describe('Tests if the shape', () => {
        it('Should be a new instance of the Triangle class', () =>{
           const testSquare = new Square();
            expect(testSquare).toBeInstanceOf(Square); 
        })
    });
    describe('Tests color change', ()=> {
        it('Should change the shape background color to green', () => {
            const testSquare = new Square ('Square', testColor);
            expect(testSquare.shapeColor).toBe(testColor);
        })
    });
    describe('Tests text color change', () => {
        it('Should change the logo text color to white', () => {
            const testSquare = new Square ('Square', 'green', textColor);
            expect(testSquare.textColor).toBe(textColor);
        })
    });
    describe('Tests that logo name is set', () => {
        it('Should set the logo text to be "boo"', () => {
            const testSquare = new Square ('Square', 'green', 'white', testText);
            expect(testSquare.name).toBe(testText);
        })
    });

    //This tests passes the testing variables in as parameters to a new shape instance, renders it, and compares that value to the code that is expected.
    describe('Tests the render functionality', () => {
        it('Should test a parameter against the rendered code', () => {
            const testSquare = new Square('Square', testColor, textColor, testText);
            expect(testSquare.render()).toEqual(`
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="75" y="25" width="150" height="150" fill="green"/>
        <text  x="150" y="110" font-size="50" text-anchor="middle" fill="white">boo</text></svg>`);
        })
    })
})
//test each shape class for render method returning a string with the given shape color/values

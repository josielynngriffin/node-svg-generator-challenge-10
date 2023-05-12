class Shape{
    constructor(shape, shapeColor, textColor, name){
        this.shape = shape;
        this.shapeColor= shapeColor;
        this.textColor = textColor;
        this.name= name;
    }
}
//circle
class  Circle extends Shape {
    constructor(shape, shapeColor, textColor, name){
        super(shape, shapeColor, textColor, name);
    }
    render(){
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="75" fill="${this.shapeColor}"/>
        <text x="150" y="110" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.name}</text></svg>`
    }
}

//triangle
class  Triangle extends Shape {
    constructor(shape, shapeColor, textColor, name){
        super(shape, shapeColor, textColor, name);
    }
    render(){
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="160,10 275, 200 30, 200" fill="${this.shapeColor}"/>
        <text x="160" y="130" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.name}</text></svg>`
    }
}
//square
class  Square extends Shape {
    constructor(shape, shapeColor, textColor, name){
        super(shape, shapeColor, textColor, name);
    }
    render(){
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/>
        <text  x="150" y="110" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.name}</text></svg>`
    }
}
//export circle, triangle, square
module.exports = {Triangle, Circle, Square};
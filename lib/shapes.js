class Shape{
    constructor(shape, shapeColor, textColor, name){
        this.shape = shape;
        this.shapeColor= shapeColor;
        this.textColor = textColor;
        this.name= name;
    }
}

//export circle, triangle, square
module.exports = {Triangle, Circle, Square};
class Rectangle {
    constructor (width){
        console.log(this);
        this.width=width;
    }};
let rectangle2 = new Rectangle("4");
console.log("my width is" + " " + rectangle2.width);



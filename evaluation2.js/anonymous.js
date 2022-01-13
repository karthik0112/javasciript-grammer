let show = function() {
    console.log('Anonymous function');//assigning function to variables
};

show();

setTimeout(function() {
    console.log('Execute later after 1 second')//anonymous function
}, 1000);

function add(a,b){ //function anotomy
    return a+b;
}
console.log(add(1,2));
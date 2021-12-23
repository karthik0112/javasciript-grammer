let value = 55;
function start() {
    function end() {
        console.error("Function Ended");
    }
    if(value > 50) {
        console.log("started");
    } 
    else {
        end();
    }
}
start();  
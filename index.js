window.onload = function () {
    const display = document.getElementById("display");

    window.appendToDisplay = function (input) {
        display.value += input;
    };

    window.compute = function () {
        try{
            display.value = eval(display.value);
        }
        catch (error) {
            console.error(error);
            display.value = "Error";
        };
    };

    window.clear_dis = function () {
        display.value = '';
    };

    window.dell = function(){
        display.value = display.value.slice(0,-1);
    };
};

const display = document.getElementById("display");
function append(input){
    display.value += input;
}
function Clear(){
    display.value = "";
}
function cal(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
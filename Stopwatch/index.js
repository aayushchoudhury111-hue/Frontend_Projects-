const clock = document.getElementById("clock");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }

}

function Stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    elapsedTime = 0;
    startTime = 0;
    isRunning = false;
    clock.textContent = `00:00:00:00`;
}
function update(){
    elapsedTime = Date.now() - startTime; // ms
    let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minute = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60 );
    let mili = Math.floor(elapsedTime % 1000 / 10);

    hour = String(hour).padStart(2, "0");
    minute = String(minute).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    mili = String(mili).padStart(2, "0");

    clock.textContent = `${hour}:${minute}:${seconds}:${mili}`;
}
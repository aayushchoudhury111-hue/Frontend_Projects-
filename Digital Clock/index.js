function updateClock(){
    const date = new Date();
    const hour = date.getHours().toString().padStart(2, 0);
    const minute = date.getMinutes().toString().padStart(2, 0);
    const seconds = date.getSeconds().toString().padStart(2, 0);
    const timestring = `${hour}:${minute}:${seconds}`;
    document.getElementById("clock").textContent = timestring;
}
updateClock();
setInterval(updateClock, 1000);
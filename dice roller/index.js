function rollDice(){
    const val = document.getElementById("no").value;
    const divRes = document.getElementById("diceRes");
    const divImg = document.getElementById("diceImg");   
    
    const values = [];
    const images = [];
    
    for(let i=0; i<val; i++){
        let dice = Math.floor(Math.random()*6) + 1; 
        values.push(dice);
        images.push(`<img src="images/${dice}.png">`);
    }

    divRes.textContent = `dice : ${values.join(', ')}`; 
    divImg.innerHTML = images.join(' ');
}
let goalKeeperInputs = document.getElementById("goalkeeper-only-inputs")
let playersInputs = document.getElementById("players-only-inputs");
let position = document.getElementById("player-position")

position.addEventListener('change',()=>{

    if(position.value == "gk"){
        goalKeeperInputs.classList.remove("hidden");
        playersInputs.classList.add("hidden");
        console.log('gk show');
    }else {
        goalKeeperInputs.classList.add("hidden");
        playersInputs.classList.remove("hidden");
        console.log('players show');
    }
})
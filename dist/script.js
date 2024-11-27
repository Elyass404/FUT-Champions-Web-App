let goalKeeperInputs = document.getElementById("goalkeeper-only-inputs")
let playersInputs = document.getElementById("players-only-inputs");


// ------------------Declaring input variables---------------------------

let nameInput = document.getElementById("player-name-input");
let photoInput = document.getElementById("player-photo")
let position = document.getElementById("player-position");
let addPlayerBtn = document.getElementById("add-player-btn");

// ---------Add event listeners to elements inside the document----------
addPlayerBtn.addEventListener("click",()=>{
    let playerCard = document.createElement("div");
    playerCard.innerHTML= `
    <div class="  translate-y-4 w-3/5 aspect-auto">
                <img src="${photoInput.value}" alt="">
            </div>
            <h2 class="z-10 font-medium text-sm">${nameInput.value}</h2>
            <div class="w-4/5 h-fit flex flex-row gap-1">
                <span class="text-vs font-medium text-center"><p class="text-center">PAC</p> <p class="text-center">99</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">SHO</p> <p class="text-center">99</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">PAS</p> <p class="text-center">99</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">DRI</p> <p class="text-center">99</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">DEF</p> <p class="text-center">99</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">PHY</p> <p class="text-center">99</p></span>
            </div>

            <div class="flex flex-row gap-4">
                <img class="h-4 aspect-auto " src="https://cdn.sofifa.net/flags/ar.png" alt="">
                <img class="h-4 aspect-auto" src="https://cdn.sofifa.net/meta/team/239235/120.png" alt="">
            </div>
    `
let rightwing= document.getElementById("right-wing");
rightwing.innerHTML = playerCard.innerHTML;
nameInput.value = "";
})

position.addEventListener('change',()=>{

    if(position.value == "gk"){
        goalKeeperInputs.classList.remove("hidden");
        playersInputs.classList.add("hidden");

    }else {
        goalKeeperInputs.classList.add("hidden");
        playersInputs.classList.remove("hidden");
    }
})
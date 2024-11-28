let goalKeeperInputs = document.getElementById("goalkeeper-only-inputs")
let playersInputs = document.getElementById("players-only-inputs");
let flags = {
    mar:"https://cdn.sofifa.net/flags/ma.png",
    arg:"https://cdn.sofifa.net/flags/ar.png",
    bra:"https://cdn.sofifa.net/flags/br.png",
    por:"https://cdn.sofifa.net/flags/pt.png",

}
let clubs = {
mia: "https://cdn.sofifa.net/meta/team/239235/120.png",
rma: "https://cdn.sofifa.net/meta/team/3468/120.png",
psg: "https://cdn.sofifa.net/meta/team/591/120.png",
bay: "https://cdn.sofifa.net/meta/team/503/120.png",
fcb: "https://cdn.sofifa.net/meta/team/83/120.png"
}

let positionAbbr = {
    gk: "goal-keeper",
    rb: "right-back",
    lb: "left-back",
    rcb: "right-center-back",
    lcb: "left-center-back",
    rm: "right-middle-field",
    lm: "left-middle-field",
    cm: "center-middle-field",
    rw: "right-wing",
    lw: "left-wing",
    st: "striker",

}


// ------------------Declaring input variables---------------------------

let nameInput = document.getElementById("player-name-input");
let photoInput = document.getElementById("player-photo")
let position = document.getElementById("player-position");
let nationality = document.getElementById("player-nationality");
let club = document.getElementById("player-club");
let rating = document.getElementById("rating");
let pace  = document.getElementById("pace");
let shooting  = document.getElementById("shooting");
let passign  = document.getElementById("passing");
let dribbling  = document.getElementById("dribbling");
let defending  = document.getElementById("defending");
let physical  = document.getElementById("physical");

let addPlayerBtn = document.getElementById("add-player-btn");



// ---------Add event listeners to elements inside the document----------
addPlayerBtn.addEventListener("click",()=>{
    let playerCard = document.createElement("div");
    playerCard.innerHTML= `


    <div class="absolute top-8 left-5 flex flex-col gap-0">
                <div class="text-center text-xl font-bold">${rating.value}</div>
                <div class="text-center text-xs font-medium">${position.value.toUpperCase()}</div>
            </div>

    <div class="  translate-y-4 w-3/5 aspect-auto">
                <img src="${photoInput.value}" alt="">
            </div>
            <h2 class="z-10 font-medium text-sm">${nameInput.value}</h2>
            <div class="w-4/5 h-fit flex flex-row gap-1">
                <span class="text-vs font-medium text-center"><p class="text-center">PAC</p> <p class="text-center">${pace.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">SHO</p> <p class="text-center">${shooting.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">PAS</p> <p class="text-center">${passign.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">DRI</p> <p class="text-center">${dribbling.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">DEF</p> <p class="text-center">${defending.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">PHY</p> <p class="text-center">${physical.value}</p></span>
            </div>

            <div class="flex flex-row gap-4">
                <img class="h-4 aspect-auto " src="${flags[nationality.value]}" alt="">
                <img class="h-4 aspect-auto" src="${clubs[club.value]}" alt="">
            </div>
    `
    
let positionValue = position.value;

let placeOfPlayer= document.getElementById(`${positionAbbr[positionValue]}`);
placeOfPlayer.innerHTML = playerCard.innerHTML;

// To reset all the inputs of the form 

let allInputs = document.querySelectorAll('input, select');
allInputs.forEach((input)=>{
    input.value="";
})
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
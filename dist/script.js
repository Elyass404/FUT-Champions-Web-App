
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
    st: "striker"

}

let positionValability;
let playersArr;

if(JSON.parse(localStorage.getItem("positionValability"))){
    positionValability = JSON.parse(localStorage.getItem("positionValability"));
}else{
    positionValability = {
        gk: "free",
        rb: "free",
        lb: "free",
        rcb: "free",
        lcb: "free",
        rm: "free",
        lm: "free",
        cm: "free",
        rw: "free",
        lw: "free",
        st: "free"
    }
    localStorage.setItem("positionValability",JSON.stringify(positionValability))
}

// -----------functions building------------------

function resetInputs(){
    let allInputs = document.querySelectorAll('input, select');
allInputs.forEach((input)=>{
    input.value="";
    playersInputs.classList.add("hidden");
    goalKeeperInputs.classList.add("hidden");
})
}

// -----------Declaring position of the players in the field--------
let goalKeeperPos = document.getElementById("goal-keeper");
let leftCenterBackPos = document.getElementById("left-center-back");
let leftBackPos = document.getElementById("left-back");
let rightCenterBackPos = document.getElementById("right-center-back");
let rightBackPos = document.getElementById("right-back");
let leftMiddleFieldPos = document.getElementById("left-middle-field");
let centerMiddleFieldPos = document.getElementById("center-middle-field");
let rightMiddleFieldPos = document.getElementById("right-middle-field");
let leftWingPos = document.getElementById("left-wing");
let strikerPos = document.getElementById("striker");
let rightWingPos = document.getElementById("right-wing");

// ------------------Declaring input variables---------------------------

let idInput = document.getElementById("id-input");
let nameInput = document.getElementById("player-name-input");
let photoInput = document.getElementById("player-photo")
let position = document.getElementById("player-position");
let nationality = document.getElementById("player-nationality");
let club = document.getElementById("player-club");
let rating = document.getElementById("rating");
// ---------players only inputs---------
let pace  = document.getElementById("pace");
let shooting  = document.getElementById("shooting");
let passing  = document.getElementById("passing");
let dribbling  = document.getElementById("dribbling");
let defending  = document.getElementById("defending");
let physical  = document.getElementById("physical");
// ---------goal keeper only inputs---------
let diving = document.getElementById("diving");
let handling = document.getElementById("handling");
let kicking = document.getElementById("kicking");
let reflexes = document.getElementById("reflexes");
let speed = document.getElementById("speed");
let positioning = document.getElementById("positioning");

let addPlayerBtn = document.getElementById("add-player-btn");
let updatePlayerBtn = document.getElementById("update-player-btn");
let cancelUpdatePlayerBtn = document.getElementById("cancel-update-player-btn");


document.addEventListener("DOMContentLoaded", ()=>{
    if(JSON.parse(localStorage.getItem("players"))){
        playersArr = JSON.parse(localStorage.getItem("players"));
        console.log(playersArr);
        window.alert("rah kaaaaaaaaaayn dak tableau alm3lem");
        let gkArray = playersArr.gkArray;
        let gkOnField = gkArray.findIndex(gk => gk.onField==true);
        
        
        if(gkOnField > -1){
            goalKeeperPos.innerHTML =`
        <div class="absolute top-8 left-5 flex flex-col gap-0">
                <div class="text-center text-xl font-bold">${gkArray[gkOnField].rating}</div>
                <div class="text-center text-xs font-medium">${gkArray[gkOnField].position.toUpperCase()}</div>
            </div>

    <div class="translate-y-4 w-3/5 aspect-auto">
                <img src="${gkArray[gkOnField].photo}" alt="">
            </div>
            <h2 class="z-10 font-medium text-sm">${gkArray[gkOnField].name}</h2>
            <div class="w-4/5 h-fit flex flex-row gap-1">
                <span class="text-vs font-medium text-center"><p class="text-center">DIV</p> <p class="text-center">${gkArray[gkOnField].diving}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">HAN</p> <p class="text-center">${gkArray[gkOnField].handling}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">KIC</p> <p class="text-center">${gkArray[gkOnField].kicking}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">REF</p> <p class="text-center">${gkArray[gkOnField].reflexes}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">SPD</p> <p class="text-center">${gkArray[gkOnField].speed}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">POS</p> <p class="text-center">${gkArray[gkOnField].positioning}</p></span>
            </div>

            <div class="flex flex-row gap-4">
                <img class="h-4 aspect-auto " src="${flags[gkArray[gkOnField].nationality]}" alt="">
                <img class="h-4 aspect-auto" src="${clubs[gkArray[gkOnField].club]}" alt="">
            </div>
            <button class = "absolute modifyBtn">modify
            </button>
        `
        let modifyBtn = goalKeeperPos.querySelector(".modifyBtn");
        modifyBtn.addEventListener('click',()=>{
            addPlayerBtn.classList.add("hidden");
            updatePlayerBtn.classList.remove("hidden");
            cancelUpdatePlayerBtn.classList.remove("hidden");

            window.alert(`hello this is the id of the player : ${gkArray[gkOnField].id}`);

            goalKeeperInputs.classList.remove("hidden");
            playersInputs.classList.add("hidden");

            idInput.value = gkArray[gkOnField].id;
            nameInput.value = gkArray[gkOnField].name;
            photoInput.value = gkArray[gkOnField].photo;
            nationality.value = gkArray[gkOnField].nationality;
            position.value = gkArray[gkOnField].position;
            club.value = gkArray[gkOnField].club;
            rating.value = gkArray[gkOnField].rating;
            diving.value = gkArray[gkOnField].diving;
            handling.value = gkArray[gkOnField].handling;
            kicking.value = gkArray[gkOnField].kicking;
            reflexes.value = gkArray[gkOnField].reflexes;
            speed.value = gkArray[gkOnField].speed;
            positioning.value = gkArray[gkOnField].positioning;
        });
        
        }

        let positions = {
            rb: { element: rightBackPos, array: playersArr.rbArray },
            rcb: { element: rightCenterBackPos, array: playersArr.rcbArray },
            lcb: { element: leftCenterBackPos, array: playersArr.lcbArray },
            lb: { element: leftBackPos, array: playersArr.lbArray },
            rm: { element: rightMiddleFieldPos, array: playersArr.rmArray },
            cm: { element: centerMiddleFieldPos, array: playersArr.cmArray },
            lm: { element: leftMiddleFieldPos, array: playersArr.lmArray },
            rw: { element: rightWingPos, array: playersArr.rwArray },
            st: { element: strikerPos, array: playersArr.stArray },
            lw: { element: leftWingPos, array: playersArr.lwArray }
        };

        for (let post in positions) {
           
            let element = positions[post].element;
            let array = positions[post].array;
            let playerIndex = array.findIndex(player => player.onField == true);
            if (playerIndex > -1) {
                element.innerHTML =`
        <div class="absolute top-8 left-5 flex flex-col gap-0">
                <div class="text-center text-xl font-bold">${array[playerIndex].rating}</div>
                <div class="text-center text-xs font-medium">${array[playerIndex].position.toUpperCase()}</div>
            </div>

    <div class="translate-y-4 w-3/5 aspect-auto">
                <img src="${array[playerIndex].photo}" alt="">
            </div>
            <h2 class="z-10 font-medium text-sm">${array[playerIndex].name}</h2>
            <div class="w-4/5 h-fit flex flex-row gap-1">
                <span class="text-vs font-medium text-center"><p class="text-center">PAC</p> <p class="text-center">${array[playerIndex].pace}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">SHO</p> <p class="text-center">${array[playerIndex].shooting}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">PAS</p> <p class="text-center">${array[playerIndex].passing}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">DRI</p> <p class="text-center">${array[playerIndex].dribbling}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">DEF</p> <p class="text-center">${array[playerIndex].defending}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">PHY</p> <p class="text-center">${array[playerIndex].physical}</p></span>
            </div>

            <div class="flex flex-row gap-4">
                <img class="h-4 aspect-auto " src="${flags[array[playerIndex].nationality]}" alt="">
                <img class="h-4 aspect-auto" src="${clubs[array[playerIndex].club]}" alt="">
            </div>

            <button class = "absolute modifyBtn">modify
            </button>
        `
        let modifyBtn = element.querySelector(".modifyBtn");
            modifyBtn.addEventListener('click',()=>{
                addPlayerBtn.classList.add("hidden");
                updatePlayerBtn.classList.remove("hidden");
                cancelUpdatePlayerBtn.classList.remove("hidden");

                window.alert(`hello this is the id of the player : ${array[playerIndex].id}`);

                goalKeeperInputs.classList.add("hidden");
                playersInputs.classList.remove("hidden");

                idInput.value = array[playerIndex].id;
                nameInput.value = array[playerIndex].name;
                photoInput.value = array[playerIndex].photo;
                nationality.value = array[playerIndex].nationality;
                position.value = array[playerIndex].position;
                club.value = array[playerIndex].club;
                rating.value = array[playerIndex].rating;
                pace.value = array[playerIndex].pace;
                shooting.value = array[playerIndex].shooting;
                passing.value = array[playerIndex].passing;
                dribbling.value = array[playerIndex].dribbling;
                defending.value = array[playerIndex].defending;
                physical.value = array[playerIndex].physical;

            });
            }
            
        }

    }else{
        window.alert("rah makaynch dak tableau alm3lem");
        
        let gkArray = [];
        let rbArray = [];
        let rcbArray = [];
        let lcbArray = [];
        let lbArray = [];
        let rmArray = [];
        let cmArray = [];
        let lmArray = [];
        let rwArray = [];
        let stArray = [];
        let lwArray = [];
        playersArr = {gkArray,rbArray,rcbArray,lcbArray,lbArray,rmArray,cmArray,lmArray,rwArray,stArray,lwArray};
         //tester hadi chof wach khdama
        localStorage.setItem("players",JSON.stringify( playersArr));
    };



});

// ---------Add event listeners to elements inside the document----------
addPlayerBtn.addEventListener("click",()=>{
    idInput.value = Date.now().toString();
    let playerCard= `
    <div class="absolute top-8 left-5 flex flex-col gap-0">
                <div class="text-center text-xl font-bold">${rating.value}</div>
                <div class="text-center text-xs font-medium">${position.value.toUpperCase()}</div>
            </div>

    <div class="translate-y-4 w-3/5 aspect-auto">
                <img src="${photoInput.value}" alt="">
            </div>
            <h2 class="z-10 font-medium text-sm">${nameInput.value}</h2>
            
    `
    if(position.value == "gk"){

        playerCard+=`
        <div class="w-4/5 h-fit flex flex-row gap-1">
                <span class="text-vs font-medium text-center"><p class="text-center">DIV</p> <p class="text-center">${diving.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">HAN</p> <p class="text-center">${handling.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">KIC</p> <p class="text-center">${kicking.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">REF</p> <p class="text-center">${reflexes.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">SPD</p> <p class="text-center">${speed.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">POS</p> <p class="text-center">${positioning.value}</p></span>
            </div>

            <div class="flex flex-row gap-4">
                <img class="h-4 aspect-auto " src="${flags[nationality.value]}" alt="">
                <img class="h-4 aspect-auto" src="${clubs[club.value]}" alt="">
            </div>
        `;
    }else{
        playerCard+=`
        <div class="w-4/5 h-fit flex flex-row gap-1">
                <span class="text-vs font-medium text-center"><p class="text-center">PAC</p> <p class="text-center">${pace.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">SHO</p> <p class="text-center">${shooting.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">PAS</p> <p class="text-center">${passing.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">DRI</p> <p class="text-center">${dribbling.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">DEF</p> <p class="text-center">${defending.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">PHY</p> <p class="text-center">${physical.value}</p></span>
            </div>

            <div class="flex flex-row gap-4">
                <img class="h-4 aspect-auto " src="${flags[nationality.value]}" alt="">
                <img class="h-4 aspect-auto" src="${clubs[club.value]}" alt="">
            </div>

            
            
        `;

    }

    let positionValue = position.value;
    let placeOfPlayer= document.getElementById(`${positionAbbr[positionValue]}`);
    let onField = false;
    if(positionValability[position.value] == "free"){
        placeOfPlayer.innerHTML = playerCard;
        positionValability[position.value] = "full";
        onField = true;
    }else{
    onField = false;    
    let benchSection = document.getElementById("bench-section");
    let benchCard = document.createElement("div");
    benchCard.classList.add("relative", "col-span-1", "badge-bg", "flex", "flex-col", "items-center", "justify-end", "pb-5");
    benchCard.innerHTML = `
<div class="absolute top-8 left-5 flex flex-col gap-0">
                <div class="text-center text-xl font-bold">${rating.value}</div>
                <div class="text-center text-xs font-medium">${position.value.toUpperCase()}</div>
            </div>

    <div class="translate-y-6 w-3/5 aspect-auto">
                <img src="${photoInput.value}" alt="">
            </div>
            <h2 class="z-10 font-medium text-sm translate-y-2">${nameInput.value}</h2>
    
    `;
    if(position.value == "gk"){

        benchCard.innerHTML+=`
        <div class="w-4/5 h-fit flex flex-row justify-center gap-1 translate-y-2">
                <span class="text-vs font-medium text-center"><p class="text-center">HAN</p> <p class="text-center">${diving.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">HAN</p> <p class="text-center">${handling.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">KIC</p> <p class="text-center">${kicking.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">REF</p> <p class="text-center">${reflexes.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">SPD</p> <p class="text-center">${speed.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">POS</p> <p class="text-center">${positioning.value}</p></span>
            </div>

            <div class="flex flex-row gap-4 translate-y-2">
                <img class="h-4 aspect-auto " src="${flags[nationality.value]}" alt="">
                <img class="h-4 aspect-auto" src="${clubs[club.value]}" alt="">
            </div>
        `;
    }else{
        benchCard.innerHTML +=`
        <div class="w-4/5 h-fit flex flex-row justify-center gap-1 translate-y-2">
                <span class="text-vs font-medium text-center"><p class="text-center">PAC</p> <p class="text-center">${pace.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">SHO</p> <p class="text-center">${shooting.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">PAS</p> <p class="text-center">${passing.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">DRI</p> <p class="text-center">${dribbling.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">DEF</p> <p class="text-center">${defending.value}</p></span>
                <span class="text-vs font-medium text-center"><p class="text-center">PHY</p> <p class="text-center">${physical.value}</p></span>
            </div>

            <div class="flex flex-row gap-4 translate-y-2">
                <img class="h-4 aspect-auto " src="${flags[nationality.value]}" alt="">
                <img class="h-4 aspect-auto" src="${clubs[club.value]}" alt="">
            </div>
            
        `;

    }
    benchSection.appendChild(benchCard);

    
}

let playerObj = {
    id: idInput.value,
    name : nameInput.value, 
    photo : photoInput.value,
    position : position.value,
    nationality : nationality.value,
    club : club.value,
    rating : rating.value
}

if (position.value == "gk"){
    playerObj = {...playerObj,
        diving : diving.value,
        handling : handling.value,
        kicking : kicking.value,
        reflexes : reflexes.value,
        speed : speed.value,
        position : position.value,
        onField 
    } 
    
}else{
    playerObj = {...playerObj,
        pace : pace.value,
        shooting : shooting.value,
        passing : passing.value,
        dribbling : dribbling.value,
        defending : defending.value,
        physical : physical.value,
        onField
    }
}
console.log(playerObj);

playersArr[playersArr[`${position.value}Array`].push(playerObj)];
console.log(playersArr[`${position.value}Array`]);
localStorage.setItem("players",JSON.stringify(playersArr));
localStorage.setItem("positionValability",JSON.stringify(positionValability));








// To reset all the inputs of the form 
resetInputs();

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


updatePlayerBtn.addEventListener("click",()=>{
   let playersArr= JSON.parse(localStorage.getItem("players"));
   let positionValability= JSON.parse(localStorage.getItem("positionValability"));
   console.log("this is the result of clicking the update button")
   console.log(playersArr);

   let array;
   let playerIndex;
   let playerOriginalPosition;

   for(let post in playersArr){
    let index = playersArr[post].findIndex(player => player.id == idInput.value);
    if (index > -1){
        array = playersArr[post];
        playerIndex = index ;
        playerOriginalPosition = array[playerIndex].position; 
        break;
    }
   }

   console.log(array);
   console.log(playerIndex);
   console.log(playerOriginalPosition);

   if(playerOriginalPosition == position.value){
    array[playerIndex].name = nameInput.value;
    array[playerIndex].photo = photoInput.value
    array[playerIndex].position = position.value
    array[playerIndex].nationality = nationality.value
    array[playerIndex].club = club.value
    array[playerIndex].rating = rating.value
    if (position.value =="gk"){
        array[playerIndex].diving = diving.value
        array[playerIndex].handling = handling.value
        array[playerIndex].kicking = kicking.value
        array[playerIndex].reflexes = reflexes.value
        array[playerIndex].speed = speed.value
        array[playerIndex].positioning = positioning.value
    }else{
        array[playerIndex].pace = pace.value
        array[playerIndex].shooting = shooting.value
        array[playerIndex].passing = passing.value
        array[playerIndex].dribbling = dribbling.value
        array[playerIndex].defending = defending.value
        array[playerIndex].physical = physical.value
    }
   }else{
    if (array[playerIndex].onField == true){
        positionValability[array[playerIndex].position] = "free";
    }
    array.splice(playerIndex,1);
    let playerObj= {
        id: idInput.value,
        name: nameInput.value,
        photo: photoInput.value,
        position: position.value,
        nationality: nationality.value,
        club: club.value,
        rating:rating.value
    }
    if(position.value == "gk"){
        playerObj = {...playerObj,
        diving : diving.value,
        handling : handling.value,
        kicking : kicking.value,
        reflexes : reflexes.value,
        speed : speed.value,
        positioning : positioning.value,
        }
        if (positionValability[position.value]== "free"){
            playerObj= {...playerObj,
                onField : true
            }
            positionValability[position.value]= "full";
        }else{
            playerObj= {...playerObj,
                onField : false
            }
        }
    }else{
        playerObj = {...playerObj,
        pace: pace.value,
        shooting: shooting.value,
        passing: passing.value,
        dribbling: dribbling.value,
        defending: defending.value,
        physical: physical.value,
        }
        if (positionValability[position.value]== "free"){
            playerObj= {...playerObj,
                onField : true
            }
            positionValability[position.value]= "full";
        }else{
            playerObj= {...playerObj,
                onField : false
            }
        }
    }

    playersArr[`${position.value}Array`].push(playerObj);

   }

   localStorage.setItem("players",JSON.stringify(playersArr));
   localStorage.setItem("positionValability",JSON.stringify(positionValability));
   resetInputs();


})


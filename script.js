// les places des joueurs dans les changements
const cbPlayers = document.querySelector(".CB-players");
const gkPlayers = document.querySelector(".Gk-players");
const cmplayers = document.querySelector(".CM-players");
const lbplayers = document.querySelector(".LB-players");
const rbplayers = document.querySelector(".RB-players");
const lwplayers = document.querySelector(".LW-players");
const rwplayers = document.querySelector(".RW-players");
const stplayers = document.querySelector(".ST-players");

document.addEventListener("DOMContentLoaded", function () {
  // drag and drop for GK players
  const gk2 = document.querySelector(".player-GK");
  new Sortable(gkPlayers, {
    animation: 400,
    group: "GK-players",
    swap: true,
  });

  new Sortable(gk2, {
    animation: 400,
    group: "GK-players",
    swap: true,
  });

  // drag and drop for ST players
  const st = document.querySelector(".player-ST");
  const st1 = document.querySelector(".player-ST1");
  new Sortable(stplayers, {
    animation: 400,
    group: "ST-players",
    swap: true,
  });

  new Sortable(st, {
    animation: 400,
    group: "ST-players",
    swap: true,
  });

  new Sortable(st1, {
    animation: 400,
    group: "ST-players",
    swap: true,
  });

  // drag and drop for LW players
  const lw = document.querySelector(".player-LW");
  new Sortable(lwplayers, {
    animation: 400,
    group: "LW-players",
    swap: true,
  });

  new Sortable(lw, {
    animation: 400,
    group: "LW-players",
    swap: true,
  });

  // drag and drop for CM players
  const cm = document.querySelector(".player-CM");
  const cm2 = document.querySelector(".player-CM2");
  const cm3 = document.querySelector(".player-CM3");
  new Sortable(cmplayers, {
    animation: 400,
    group: "CM-players",
    swap: true,
  });

  new Sortable(cm, {
    animation: 400,
    group: "CM-players",
    swap: true,
  });

  new Sortable(cm2, {
    animation: 400,
    group: "CM-players",
    swap: true,
  });
  new Sortable(cm3, {
    animation: 400,
    group: "CM-players",
    swap: true,
  });
  // drag and drop for CB players
  const cb = document.querySelector(".player-CB");
  const cb2 = document.querySelector(".player-CB2");
  new Sortable(cbPlayers, {
    animation: 400,
    group: "CB-players",
    swap: true,
  });

  new Sortable(cb, {
    animation: 400,
    group: "CB-players",
    swap: true,
  });

  new Sortable(cb2, {
    animation: 400,
    group: "CB-players",
    swap: true,
  });

  // drag and drop for RB players
  const rb = document.querySelector(".player-RB");
  new Sortable(rbplayers, {
    animation: 400,
    group: "RB-players",
    swap: true,
  });

  new Sortable(rb, {
    animation: 400,
    group: "RB-players",
    swap: true,
  });

  // drag and drop for LB players
  const lb = document.querySelector(".player-LB");
  new Sortable(lbplayers, {
    animation: 400,
    group: "LB-players",
    swap: true,
  });

  new Sortable(lb, {
    animation: 400,
    group: "LB-players",
    swap: true,
  });

  // drag and drop for RW players
  const rw = document.querySelector(".player-RW");
  new Sortable(rwplayers, {
    animation: 400,
    group: "CB-players",
    swap: true,
  });

  new Sortable(rw, {
    animation: 400,
    group: "CB-players",
    swap: true,
  });
});

const NavigateToNextForm = document.getElementById("NavigateToNextForm");
const pesonalInfo = document.getElementById("personal-info");
const rating = document.getElementById("rating");
const backToPreviousForm = document.getElementById("backToPreviousForm");
const form = document.getElementById("show-form");
const showForm = document.getElementById("show-form-button");
const closeForm = document.querySelectorAll(".close-form");
// ajouter un nouveau joueur
const addNewPlayer = document.getElementById("addNewPlayer");
// inputs
const playerName = document.getElementById("player-name");
const profileImg = document.getElementById("profile-img");

const position = document.getElementById("position");
const flag = document.getElementById("flag");
const club = document.getElementById("club");
const logo = document.getElementById("logo");
const pace = document.getElementById("pace");
const shooting = document.getElementById("shooting");
const nationality = document.getElementById("nationality");
const passing = document.getElementById("passing");
const defending = document.getElementById("defending");
const dribbling = document.getElementById("dribbling");
const physical = document.getElementById("physical");
const ratingInput = document.getElementById("rating-input");
const diving = document.getElementById("diving");
const kicking = document.getElementById("kicking");
const reflexes = document.getElementById("reflexes");
const speed = document.getElementById("speed");
const positioning = document.getElementById("positioning");
const handling = document.getElementById("handling");
// les images des places de terrin
const rw = document.querySelector(".rw");
const st = document.querySelector(".st");
const lw = document.querySelector(".lw");
const cm = document.querySelector(".cm");
const cm2 = document.querySelector(".cm2");
const cm3 = document.querySelector(".cm3");
const cb = document.querySelector(".cb");
const cb2 = document.querySelector(".cb2");
const rb = document.querySelector(".rb");
const lb = document.querySelector(".lb");
const gk = document.querySelector(".gk");

let gkAdded = false;
let rwAdded = false;
let stAdded = false;
let lwAdded = false;
let cmAdded = false;
let cm2Added = false;
let cm3Added = false;
let cbAdded = false;
let cb2Added = false;
let rbAdded = false;
let lbAdded = false;

const gkFields = [
  "diving-field",
  "Handling-field",
  "Kicking-field",
  "reflexes-field",
  "speed-field",
  "positioning-field",
];

const playerRating = [
  "pace-field",
  "shooting-field",
  "passing-field",
  "dribbling-field",
  "defending-field",
  "physical-field",
];

// array to store data
let playersData = JSON.parse(localStorage.getItem("playersData")) || [];
function savePlayersToLocalStorage() {
  localStorage.setItem("playersData", JSON.stringify(playersData));
}
const positionToContainerMap = {
  GK: "player-GK",
  CM: "player-CM",
  ST: "player-ST",
  LB: "player-LB",
  RB: "player-RB",
  CB: "player-CB",
  LW: "player-LW",
  RW: "player-RW",
  // Add other positions as needed
};

// if the gk player add on localstorage and reload the page after that add a new player dont add it on the stade
const gkPlayerContainer = document.getElementById("player-GK");
const gkPlayersContainer = document.querySelector(".Gk-players");
if (playersData.some((player) => player.position === "GK")) {
  gkAdded = true;
}
const cmPlayersData = playersData.filter((player) => player.position === "CM");
if (cmPlayersData.length >= 3) {
  cmAdded = true;
  cm2Added = true;
  cm3Added = true;
}
// check if the cb player is on data
const cbPlayersData = playersData.filter((player) => player.position === "CB");
if (cbPlayersData.length >= 2) {
  cbAdded = true;
  cb2Added = true;
}
// check of the rw player is on the data
if (playersData.some((player) => player.position === "RW")) {
  rwAdded = true;
}
// check if the lw player is on data
if (playersData.some((player) => player.position === "LW")) {
  lwAdded = true;
}
// check if the st player is on data
if (playersData.some((player) => player.position === "ST")) {
  stAdded = true;
}

// check if the RB player is on data
if (playersData.some((player) => player.position === "RB")) {
  rbAdded = true;
}
// check if the LB player is on data
if (playersData.some((player) => player.position === "LB")) {
  lbAdded = true;
}

// Function to render players in their respective positions
function renderPlayersByPosition(playersData) {
  // Filter out only GK players
  const gkPlayers = playersData.filter((player) => player.position === "GK");

  // Place the first GK player in the gkPlayer div
  gkPlayers.forEach((player, index) => {
    const playerCard = createPlayerCard(player);
    if (index === 0) {
      gkPlayerContainer.appendChild(playerCard);
      gk.classList.add("hidden");
    } else {
      gkPlayersContainer.appendChild(playerCard);
    }
  });

  // place the CM players on thier place
  const cmPlayers = playersData.filter((player) => player.position === "CM");
  const addCmPlayer = document.getElementById("player-CM");
  const addCm2Player = document.getElementById("player-CM2");
  const addCm3Player = document.getElementById("player-CM3");
  cmPlayers.forEach((player, index) => {
    if (index === 0) {
      addCmPlayer.appendChild(createPlayerCard(player));
      cm.classList.add("hidden");
    } else if (index === 1) {
      addCm2Player.appendChild(createPlayerCard(player));
      cm2.classList.add("hidden");
    } else if (index === 2) {
      addCm3Player.appendChild(createPlayerCard(player));
      cm3.classList.add("hidden");
    } else {
      cmplayers.appendChild(createPlayerCard(player));
    }
  });
  // place the cb players on thiers place
  const cbplayers = playersData.filter((player) => player.position === "CB");
  const addCbPlayer = document.getElementById("player-CB");
  const addCb2Player = document.getElementById("player-CB2");
  cbplayers.forEach((player, index) => {
    if (index === 0) {
      addCbPlayer.appendChild(createPlayerCard(player));
      cb.classList.add("hidden");
    } else if (index === 1) {
      addCb2Player.appendChild(createPlayerCard(player));
      cb2.classList.add("hidden");
    } else {
      cbPlayers.appendChild(createPlayerCard(player));
    }
  });
  // rw player
  const RW = playersData.filter((player) => player.position === "RW");
  const addRwPlayer = document.getElementById("player-RW");
  RW.forEach((player, index) => {
    const playerCard = createPlayerCard(player);
    if (index === 0) {
      addRwPlayer.appendChild(playerCard);
      rw.classList.add("hidden");
    } else {
      rwplayers.appendChild(playerCard);
    }
  });
  // lw player
  const LW = playersData.filter((player) => player.position === "LW");
  const addlwPlayer = document.getElementById("player-LW");
  LW.forEach((player, index) => {
    const playerCard = createPlayerCard(player);
    if (index === 0) {
      addlwPlayer.appendChild(playerCard);
      lw.classList.add("hidden");
    } else {
      lwplayers.appendChild(playerCard);
    }
  });
  // st player
  const ST = playersData.filter((player) => player.position === "ST");
  const addstPlayer = document.getElementById("player-ST");
  ST.forEach((player, index) => {
    const playerCard = createPlayerCard(player);
    if (index === 0) {
      addstPlayer.appendChild(playerCard);
      st.classList.add("hidden");
    } else {
      stplayers.appendChild(playerCard);
    }
  });
  // rb player
  const RB = playersData.filter((player) => player.position === "RB");
  const addrbPlayer = document.getElementById("player-RB");
  RB.forEach((player, index) => {
    const playerCard = createPlayerCard(player);
    if (index === 0) {
      addrbPlayer.appendChild(playerCard);
      rb.classList.add("hidden");
    } else {
      rbplayers.appendChild(playerCard);
    }
  });
  // lb player
  const LB = playersData.filter((player) => player.position === "LB");
  const addlbPlayer = document.getElementById("player-LB");
  LB.forEach((player, index) => {
    const playerCard = createPlayerCard(player);
    if (index === 0) {
      addlbPlayer.appendChild(playerCard);
      lb.classList.add("hidden");
    } else {
      lbplayers.appendChild(playerCard);
    }
  });
}

// Function to create player card
function createPlayerCard(player) {
  const playerCard = document.createElement("div");
  playerCard.classList.add("player-card");

  playerCard.innerHTML = `
    <div class="relative w-fit">
      <img
        src="./src/assets/img/badge_gold.webp"
        alt=""
        class="w-52 h-72"
      />
      <img
        src="${player.photo}"
        alt=""
        class="displayProfileImage absolute top-16 left-10"
      />
      <div class="flex text-center flex-col leading-3 absolute top-16 left-8">
        <span class="font-bold text-xl">${player.rating}</span>
        <span class="font-mono">${player.position}</span>
      </div>
      <div class="absolute bottom-20 right-20 font-semibold">
        ${player.name}
      </div>
      <div class="flex flex-row gap-2 absolute bottom-14 left-7 font-semibold">
        ${generatePlayerAttributes(player)}
      </div>
      <div id="logo-and-flag" class="flex absolute bottom-7 left-20 gap-2 items-center">
        <img src="${player.flag}" alt="" class="w-5 h-3" />
        <img src="${player.logo}" alt="" class="w-5 h-6" />
      </div>
      <span id="show-options" class="cursor-pointer absolute top-20 right-8 show-options"
        ><img src="./src/icons/dots.svg" alt="" width="20" height="20"
      /></span>
      <div id="deleteUpdateBtns" class="hidden">
        <div class="bg-gray-700 flex flex-col absolute top-28 right-7 py-2 px-1 rounded-md">
          <span id="delete-player" class="mb-4 cursor-pointer" 
            ><img src="./src/icons/delete.svg" alt="" width="20" height="20" data-id="${player.id}"
          /></span>
          <span id="update-player" class="cursor-pointer "
            ><img src="./src/icons/edit.svg" alt="" width="20" height="20" data-id="${player.id}"
          /></span>
        </div>
      </div>
    </div>
  `;

  return playerCard;
}

// place of statistic of the players gk and others
function generatePlayerAttributes(player) {
  if (player.position === "GK") {
    return `
      <div class="flex flex-col leading-3">
        <span class="text-xxs">DIV</span>
        <span>${player.diving}</span>
      </div>
      <div class="flex flex-col leading-3">
        <span class="text-xxs">HAN</span>
        <span>${player.handling}</span>
      </div>
      <div class="flex flex-col leading-3">
        <span class="text-xxs">KIC</span>
        <span>${player.kicking}</span>
      </div>
      <div class="flex flex-col leading-3">
        <span class="text-xxs">REF</span>
        <span>${player.reflexes}</span>
      </div>
      <div class="flex flex-col leading-3">
        <span class="text-xxs">SPD</span>
        <span>${player.speed}</span>
      </div>
      <div class="flex flex-col leading-3">
        <span class="text-xxs">POS</span>
        <span>${player.positioning}</span>
      </div>
    `;
  } else {
    return `
      <div class="flex flex-col leading-3">
        <span class="text-xxs">PAC</span>
        <span>${player.pace}</span>
      </div>
      <div class="flex flex-col leading-3">
        <span class="text-xxs">SHO</span>
        <span>${player.shooting}</span>
      </div>
      <div class="flex flex-col leading-3">
        <span class="text-xxs">PAS</span>
        <span>${player.passing}</span>
      </div>
      <div class="flex flex-col leading-3">
        <span class="text-xxs">DRI</span>
        <span>${player.dribbling}</span>
      </div>
      <div class="flex flex-col leading-3">
        <span class="text-xxs">DEF</span>
        <span>${player.defending}</span>
      </div>
      <div class="flex flex-col leading-3">
        <span class="text-xxs">PHY</span>
        <span>${player.physical}</span>
      </div>
    `;
  }
}

// get players data
renderPlayersByPosition(playersData);

// close button of the div cards
const playerschange = document.getElementById("addTocards");

NavigateToNextForm.addEventListener("click", (e) => {
  // let valid= validatPersonalForm()
  e.preventDefault();
  // if (valid){
  pesonalInfo.classList.add("hidden");
  rating.classList.remove("hidden");
  // }
});

backToPreviousForm.addEventListener("click", (e) => {
  e.preventDefault(e);
  pesonalInfo.classList.remove("hidden");
  rating.classList.add("hidden");
});

showForm.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.remove("hidden");
  showForm.classList.add("hidden");
});
function closeForms() {
  form.classList.add("hidden");
  showForm.classList.remove("hidden");
  playerschange.classList.add("hidden");
}
closeForm.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    closeForms();
  });
});

// ajouter les joueurs dans le terrin
addNewPlayer.addEventListener("click", (e) => {
  e.preventDefault();
  // let valid = false;
  // if (position.value === "GK"){
  //   valid =validatRatingGkForm()
  // }else{
  //   valid= validatRatingForm()
  // }
  // if (!valid) return;
  const players = document.getElementById("players");
  const player = document.createElement("div");
  const gkPlayer = document.createElement("div");
  const addGkPlayer = document.getElementById("player-GK");
  const addRwPlayer = document.getElementById("player-RW");
  const addStPlayer = document.getElementById("player-ST");
  const addLwPlayer = document.getElementById("player-LW");
  const addCmPlayer = document.getElementById("player-CM");
  const addCm2Player = document.getElementById("player-CM2");
  const addCm3Player = document.getElementById("player-CM3");
  const addCbPlayer = document.getElementById("player-CB");
  const addCb2Player = document.getElementById("player-CB2");
  const addRbPlayer = document.getElementById("player-RB");
  const addLbPlayer = document.getElementById("player-LB");
  // profile image
  const PhotosUrl = profileImg.files[0];
  const fileReader = new FileReader();

  let flagUrl = flag.files[0];
  let playerFlag = URL.createObjectURL(flagUrl);
  let logoUrl = logo.files[0];
  let playerlogo = URL.createObjectURL(logoUrl);

  // players.appendChild(player);
  fileReader.onload = function (event) {
    const photoPlayer = event.target.result;

    if (position.value === "GK") {
      const gkPlayerData = {
        id: Date.now().toString(),
        name: playerName.value,
        photo: photoPlayer,
        position: position.value,
        nationality: nationality.value,
        flag: playerFlag,
        logo: playerlogo,
        club: club.value,
        rating: ratingInput.value,
        diving: diving.value,
        handling: handling.value,
        kicking: kicking.value,
        reflexes: reflexes.value,
        speed: speed.value,
        positioning: positioning.value,
      };
      playersData.push(gkPlayerData);
      console.log(gkPlayerData);
      savePlayersToLocalStorage();
      // GK player
      gkPlayer.innerHTML = `<div class="relative player-card w-fit">
  <img
     src="./src/assets/img/badge_gold.webp"
     alt=""
     class="w-52 h-72"
   />
   <img
     src=" ${gkPlayerData.photo}"
     alt=""
     class="displayProfileImage absolute top-16 left-10"
   />
   <div
     class="flex text-center flex-col leading-3 absolute top-16 left-8"
   >
     <span class="font-bold text-xl">${ratingInput.value}</span>
     <span class="font-mono">${position.value}</span>
   </div>

   <div
     class="absolute bottom-20 right-20 font-semibold player-name-card"
   >
   ${playerName.value}
   </div>

   <div
     class="flex flex-row gap-2 absolute bottom-14 left-7 font-semibold"
   >
     <div class="flex flex-col leading-3">
       <span class="text-xxs">DIV</span>
       <span class="">${diving.value}</span>
     </div>
     <div class="flex flex-col leading-3">
       <span class="text-xxs">HAN</span>
       <span class="">${handling.value}</span>
     </div>
     <div class="flex flex-col leading-3">
       <span class="text-xxs">KIC</span>
       <span class="">${kicking.value}</span>
     </div>
     <div class="flex flex-col leading-3">
       <span class="text-xxs">REF</span>
       <span class="">${reflexes.value}</span>
     </div>
     <div class="flex flex-col leading-3">
       <span class="text-xxs">SPD</span>
       <span class="">${speed.value}</span>
     </div>
     <div class="flex flex-col leading-3">
       <span class="text-xxs">POS</span>
       <span class="">${positioning.value}</span>
     </div>
   </div>
   <div
     id="logo-and-flag"
     class="flex absolute bottom-7 left-20 gap-2 items-center"
   >
     <img
       src="${playerFlag}"
       alt=""
       class="w-5 h-3"
     />
     <img
       src="${playerlogo}"
       alt=""
       class="w-5 h-6"
     />
   </div>
   <span id="show-options" class="cursor-pointer absolute top-20 right-8 show-options"
        ><img src="./src/icons/dots.svg" alt="" width="20" height="20"
      /></span>
      <div id="deleteUpdateBtns" class="hidden">
        <div class="bg-gray-700 flex flex-col absolute top-28 right-7 py-2 px-1 rounded-md">
          <span id="delete-player" class="mb-4 cursor-pointer" 
            ><img src="./src/icons/delete.svg" alt="" width="20" height="20" data-id="${player.id}"
          /></span>
          <span id="update-player" class="cursor-pointer "
            ><img src="./src/icons/edit.svg" alt="" width="20" height="20" data-id="${player.id}"
          /></span>
        </div>
      </div>
 </div>`;
      if (!gkAdded) {
        addGkPlayer.append(gkPlayer);
        gk.classList.add("hidden");
        gkAdded = true;
      } else {
        gkPlayers.appendChild(gkPlayer);
      }
    }
    if (
      position.value === "CB" ||
      position.value === "CM" ||
      position.value === "LB" ||
      position.value === "LW" ||
      position.value === "RB" ||
      position.value === "RW" ||
      position.value === "ST"
    ) {
      const PlayerData = {
        id: Date.now().toString(),
        name: playerName.value,
        photo: photoPlayer,
        position: position.value,
        nationality: nationality.value,
        flag: playerFlag,
        logo: playerlogo,
        club: club.value,
        rating: ratingInput.value,
        pace: pace.value,
        shooting: shooting.value,
        passing: passing.value,
        dribbling: dribbling.value,
        defending: defending.value,
        physical: physical.value,
      };
      playersData.push(PlayerData);
      savePlayersToLocalStorage();
      player.innerHTML = `<div class="relative player-card w-fit">
    <img
      src="./src/assets/img/badge_gold.webp"
      alt=""
      class="w-52 h-72"
    />
    <img
      src="${PlayerData.photo}"
      alt=""
      class="displayProfileImage absolute top-16 left-10"
    />
    <div
      class="flex text-center flex-col leading-3 absolute top-16 left-8"
    >
      <span class="font-bold text-xl">${ratingInput.value}</span>
      <span class="font-mono">${position.value}</span>
    </div>

    <div
      class="absolute bottom-20 right-20 font-semibold player-name-card"
    >
    ${playerName.value}
    </div>

    <div
      class="flex flex-row gap-2 absolute bottom-14 left-7 font-semibold"
    >
      <div class="flex flex-col leading-3">
        <span class="text-xxs">PAC</span>
        <span class="">${pace.value}</span>
      </div>
      <div class="flex flex-col leading-3">
        <span class="text-xxs">SHO</span>
        <span class="">${shooting.value}</span>
      </div>
      <div class="flex flex-col leading-3">
        <span class="text-xxs">PAS</span>
        <span class="">${passing.value}</span>
      </div>
      <div class="flex flex-col leading-3">
        <span class="text-xxs">DRI</span>
        <span class="">${dribbling.value}</span>
      </div>
      <div class="flex flex-col leading-3">
        <span class="text-xxs">DEF</span>
        <span class="">${defending.value}</span>
      </div>
      <div class="flex flex-col leading-3">
        <span class="text-xxs">PHY</span>
        <span class="">${physical.value}</span>
      </div>
    </div>
    <div
      id="logo-and-flag"
      class="flex absolute bottom-7 left-20 gap-2 items-center"
    >
      <img
        src="./src/assets/img/flag/flag.webp"
        alt=""
        class="w-5 h-3"
      />
      <img
        src="./src/assets/img/logo/logo.webp"
        alt=""
        class="w-5 h-6"
      />
    </div>
    <span id="show-options" class="cursor-pointer absolute top-20 right-8 show-options"
        ><img src="./src/icons/dots.svg" alt="" width="20" height="20"
      /></span>
      <div id="deleteUpdateBtns" class="hidden">
        <div class="bg-gray-700 flex flex-col absolute top-28 right-7 py-2 px-1 rounded-md">
          <span id="delete-player" class="mb-4 cursor-pointer"
            ><img src="./src/icons/delete.svg" alt="" width="20" height="20" data-id="${player.id}"
          /></span>
          <span id="update-player" class="cursor-pointer "
            ><img src="./src/icons/edit.svg" alt="" width="20" height="20" data-id="${player.id}"
          /></span>
        </div>
      </div>
  </div>`;

      if (position.value === "CB") {
        if (!cbAdded) {
          addCbPlayer.appendChild(player);
          cb.classList.add("hidden");
          cbAdded = true;
        } else if (!cb2Added) {
          addCb2Player.appendChild(player);
          cb2.classList.add("hidden");
          cb2Added = true;
        } else {
          cbPlayers.appendChild(player);
        }
      }
      if (position.value === "CM") {
        if (!cmAdded) {
          addCmPlayer.appendChild(player);
          cm.classList.add("hidden");
          cmAdded = true;
        } else if (!cm2Added) {
          addCm2Player.appendChild(player);
          cm2.classList.add("hidden");
          cm2Added = true;
        } else if (!cm3Added) {
          addCm3Player.appendChild(player);
          cm3.classList.add("hidden");
          cm3Added = true;
        } else {
          cmplayers.appendChild(player);
        }
      }
      if (position.value === "LB") {
        if (!lbAdded) {
          addLbPlayer.appendChild(player);
          lb.classList.add("hidden");
          lbAdded = true;
        } else {
          lbplayers.appendChild(player);
        }
      }
      if (position.value === "LW") {
        if (!lwAdded) {
          addLwPlayer.appendChild(player);
          lw.classList.add("hidden");
          lwAdded = true;
        } else {
          lwplayers.appendChild(player);
        }
      }
      if (position.value === "RB") {
        if (!rbAdded) {
          addRbPlayer.appendChild(player);
          rb.classList.add("hidden");
          rbAdded = true;
        } else {
          rbplayers.appendChild(player);
        }
      }
      if (position.value === "RW") {
        if (!rwAdded) {
          addRwPlayer.appendChild(player);
          rw.classList.add("hidden");
          rwAdded = true;
        } else {
          rwplayers.appendChild(player);
        }
      }
      if (position.value === "ST") {
        if (!stAdded) {
          addStPlayer.appendChild(player);
          st.classList.add("hidden");
          stAdded = true;
        } else {
          stplayers.appendChild(player);
        }
      }
    }
    closeForms();
    playerName.value = "";
    position.value = "";
    nationality.value = "";
    club.value = "";
    ratingInput.value = "";
    diving.value = "";
    handling.value = "";
    kicking.value = "";
    reflexes.value = "";
    speed.value = "";
    positioning.value = "";
    pace.value = "";
    shooting.value = "";
    passing.value = "";
    dribbling.value = "";
    defending.value = "";
    physical.value = "";
  };
  fileReader.readAsDataURL(PhotosUrl);
  // console.log(PlayerData)
  console.log(playersData);
});

position.addEventListener("change", (e) => {
  e.preventDefault();
  if (position.value === "GK") {
    gkFields.forEach((field) => {
      const input = document.getElementById(field);
      input.classList.remove("hidden");
    });
    playerRating.forEach((field) => {
      const input = document.getElementById(field);
      input.classList.add("hidden");
    });
  } else {
    gkFields.forEach((field) => {
      const input = document.getElementById(field);
      input.classList.add("hidden");
    });
    playerRating.forEach((field) => {
      const input = document.getElementById(field);
      input.classList.remove("hidden");
    });
  }
});
// validation des forms

// personal info form
const validationPersonalInfoForm = {
  "player-name": {
    regex: /^[a-zA-Z\s]{2,10}$/,
    message: "the name must contain at least 5 charachters",
  },
  "profile-img": {
    regex: /^https?:\/\/.*\/.*\.(png|webp|jpeg|jpg)\??.*$/,
    message: "select .jpg .png .webp .jpeg files",
  },
  nationality: {
    regex: /^[a-zA-Z\s]{10,20}$/,
    message: "Enter a valid nationality",
  },
  flag: {
    regex: /^https?:\/\/.*\/.*\.(png|webp|jpeg|jpg)\??.*$/,
    message: "select .jpg .png .webp .jpeg files",
  },
  club: {
    regex: /^https?:\/\/.*\/.*\.(png|webp|jpeg|jpg)\??.*$/,
    message: "select .jpg .png .webp .jpeg files",
  },
};
function ToggleErrorMessage(field, show, message = "") {
  const inputField = document.getElementById(`${field}`);
  const errorMessage = document.getElementById(`${field}-error`);
  if (show) {
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
    inputField.classList.add("border-error");
    inputField.classList.remove("border-gray-500");
  } else {
    errorMessage.textContent = "";
    inputField.classList.add("border-gray-500");
  }
}
function validatePersonalField(field, value) {
  const rule = validationPersonalInfoForm[field];
  if (rule && !rule.regex.test(value)) {
    ToggleErrorMessage(field, true, rule.message);
    return false;
  } else {
    ToggleErrorMessage(field, false);
    return true;
  }
}
function validatPersonalForm() {
  let valid = true;
  for (let field in validationPersonalInfoForm) {
    const fieldValue = document.getElementById(field).value;
    const fieldValid = validatePersonalField(field, fieldValue);
    if (!fieldValid) valid = false;
  }
  return valid;
}
// rating form
const createValidationRule = (fieldName) => ({
  regex: /^\d{2}$/,
  message: `${fieldName} between 1 and 99`,
});

const validationRatingForm = {
  "rating-input": createValidationRule("Rating"),
  pace: createValidationRule("Pace"),
  shooting: createValidationRule("Shooting"),
  passing: createValidationRule("Passing"),
  dribbling: createValidationRule("Dribbling"),
  defending: createValidationRule("Defending"),
  physical: createValidationRule("Physical"),
};

function ratingField(field, value) {
  const rule = validationRatingForm[field];
  if (rule && !rule.regex.test(value)) {
    ToggleErrorMessage(field, true, rule.message);
    return false;
  } else {
    ToggleErrorMessage(field, false);
    return true;
  }
}
function validatRatingForm() {
  let valid = true;
  for (let field in validationRatingForm) {
    const fieldValue = document.getElementById(field).value;
    const fieldValid = ratingField(field, fieldValue);
    if (!fieldValid) valid = false;
  }
  return valid;
}

// rating gk form
const validationRatingGkForm = {
  "rating-input": createValidationRule("Rating"),
  diving: createValidationRule("Diving"),
  handling: createValidationRule("Handling"),
  kicking: createValidationRule("Kicking"),
  reflexes: createValidationRule("Reflexes"),
  speed: createValidationRule("Speed"),
  positioning: createValidationRule("Positioning"),
};

function ratingGkField(field, value) {
  const rule = validationRatingGkForm[field];
  if (rule && !rule.regex.test(value)) {
    ToggleErrorMessage(field, true, rule.message);
    return false;
  } else {
    ToggleErrorMessage(field, false);
    return true;
  }
}
function validatRatingGkForm() {
  let valid = true;
  for (let field in validationRatingGkForm) {
    const fieldValue = document.getElementById(field).value;
    const fieldValid = ratingGkField(field, fieldValue);
    if (!fieldValid) valid = false;
  }
  return valid;
}

// CHANGER LA FORMATION
const formation = document.getElementById("formation");
formation.addEventListener("change", (e) => {
  e.preventDefault();
  // les positions des joueurs
  const cm3Player = document.querySelector(".player-CM3");
  const sT1Player = document.querySelector(".player-ST1");
  const formationState = document.querySelector(".formationState");
  if (formation.value === "424") {
    sT1Player.classList.remove("hidden");
    cm3Player.classList.add("hidden");
    formationState.classList.replace("terrin", "terrain2");
    console.log("clicked");
  } else {
    cm3Player.classList.remove("hidden");
    sT1Player.classList.add("hidden");
    formationState.classList.replace("terrain2", "terrin");
  }
});

// Changement de Formation Dynamique
// players  cards use class
const playerscards = [
  "player-RW",
  "player-ST",
  "player-LW",
  "player-CM",
  "player-CM2",
  "player-CM3",
  "player-CB",
  "player-CB2",
  "player-RB",
  "player-LB",
  "player-GK",
];
// players place use id
const playersplace = [
  "player-RW",
  "player-ST",
  "player-LW",
  "player-CM",
  "player-CM2",
  "player-CM3",
  "player-CB",
  "player-CB2",
  "player-RB",
  "player-LB",
  "player-GK",
];

// players templates for cloneNode
const playerTemplates = {
  "player-GK": gkPlayers,
  "player-RW": rwplayers,
  "player-ST": stplayers,
  "player-LW": lwplayers,
  "player-CM": cmplayers,
  "player-CM2": cmplayers,
  "player-CM3": cmplayers,
  "player-CB": cbPlayers,
  "player-CB2": cbPlayers,
  "player-RB": rbplayers,
  "player-LB": lbplayers,
};

// show dropdown
const showoptions = document.querySelectorAll(".show-options");
showoptions.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const card = button.parentElement;
    const deleteUpdateBtns = card.querySelector("#deleteUpdateBtns");
    deleteUpdateBtns.classList.toggle("hidden");
  });
});


// DELETE PLAYERS
const deletePlayerButtons = document.querySelectorAll("#delete-player");
deletePlayerButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    // Find the parent card of the clicked button
    const card = button.closest(".player-card");
    if (!card) return;
    // take the id
    const cardId= e.target.dataset.id;
    console.log(cardId)
    playersData = playersData.filter((player) => player.id !== cardId);
    savePlayersToLocalStorage()
    // Check if the card is inside terrain or changements
    const isInTerrain = card.closest(".terrin");
    const isInChangements = card.closest(".changements");

    if (isInTerrain) {
      const parent = card.parentElement;
      card.remove();
      const placeholderCard = document.createElement("img");
      placeholderCard.src = "./src/assets/img/badge_gold.webp";
      placeholderCard.classList.add("w-52", "h-72");
      parent.appendChild(placeholderCard);
    } else if (isInChangements) {
      card.remove();
    }
  });
});

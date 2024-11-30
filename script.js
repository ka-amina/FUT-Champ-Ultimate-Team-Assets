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
let playersData = [];

// xlose button of the div cards
const playerschange = document.getElementById("addTocards")

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

closeForm.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    form.classList.add("hidden");
    showForm.classList.remove("hidden");
    playerschange.classList.add("hidden");
  });
});
const cbPlayers= document.querySelector(".CB-players")
const gkPlayers= document.querySelector(".Gk-players")
const cmplayers= document.querySelector(".CM-players")
const lbplayers= document.querySelector(".LB-players")
const rbplayers= document.querySelector(".RB-players")
const lwplayers= document.querySelector(".LW-players")
const rwplayers= document.querySelector(".RW-players")
const stplayers= document.querySelector(".ST-players")

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
  let PhotosUrl = profileImg.files[0];
  let photoPlayer = URL.createObjectURL(PhotosUrl);

  let flagUrl = flag.files[0];
  let playerFlag = URL.createObjectURL(flagUrl);
  let logoUrl = logo.files[0];
  let playerlogo = URL.createObjectURL(logoUrl);

  player.innerHTML = `<div class="relative player-card w-fit">
            <img
              src="./src/assets/img/badge_gold.webp"
              alt=""
              class="w-52 h-72"
            />
            <img
              src="${photoPlayer}"
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
          </div>`;
  // GK player
  gkPlayer.innerHTML = `<div class="relative player-card w-fit">
           <img
              src="./src/assets/img/badge_gold.webp"
              alt=""
              class="w-52 h-72"
            />
            <img
              src=" ${photoPlayer}"
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
          </div>`;
  // players.appendChild(player);

  if (position.value === "GK") {
    if (!gkAdded) {
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
      console.log(gkPlayerData);
      playersData.push(gkPlayerData);
      addGkPlayer.appendChild(gkPlayer);
      gk.classList.add("hidden");
      gkAdded = true;
    } else {
      gkPlayers.appendChild(gkPlayer);
    }
  }
  if (position.value === "CB" || "CM" || "LB" || "LW" || "RB" || "RW" || "ST") {
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

    if (position.value === "CB") {
      if (!cbAdded) {
        addCbPlayer.appendChild(player);
        cb.classList.add("hidden");
        cbAdded = true;
      }else if (!cb2Added){
        addCb2Player.appendChild(player);
        cb2.classList.add("hidden");
        cb2Added = true;
      }
      else {
        cbPlayers.appendChild(player);
      }
    }
    if (position.value === "CM") {
      if (!cmAdded) {
        addCmPlayer.appendChild(player);
        cm.classList.add("hidden");
        cmAdded=true    
      } else if (!cm2Added) {
        addCm2Player.appendChild(player);
        cm2.classList.add("hidden"); 
        cm2Added=true   
      } else if (!cm3Added) {
        addCm3Player.appendChild(player);
        cm3.classList.add("hidden");
        cm3Added = true;
      }
      else {
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
  const formationState= document.querySelector(".formationState")
  if (formation.value === "424") {
    sT1Player.classList.remove("hidden")
    cm3Player.classList.add("hidden")
    formationState.classList.replace('terrin', 'terrain2');
  console.log("clicked");
  
  }else{
    cm3Player.classList.remove("hidden")
    sT1Player.classList.add("hidden")

    formationState.classList.replace('terrain2', 'terrin');
  }
});

// Changement de Formation Dynamique
// players  cards use class
const playerscards=[
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
]
// players place use id
const playersplace=[
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
]
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
  "player-LB": lbplayers
};
const showelements = document.querySelector(".showElements");
const players = document.getElementById("players");

playersplace.forEach(card => {
  const cardelement = document.getElementById(card);
  if (cardelement) {
    cardelement.addEventListener("click", () => {
      playerschange.classList.remove("hidden");
      if (playerTemplates[cardelement.id]) {
        const template = playerTemplates[cardelement.id];
        const clonedTemplate = template.cloneNode(true);
        showelements.appendChild(clonedTemplate);
        closeForm.forEach((button) => {
          button.addEventListener("click", (e) => {
            e.preventDefault();
            clonedTemplate.remove();
          });
        });
      }
    });
  }
});
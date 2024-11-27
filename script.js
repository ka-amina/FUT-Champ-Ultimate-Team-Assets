const NavigateToNextForm = document.getElementById("NavigateToNextForm");
const pesonalInfo = document.getElementById("personal-info");
const rating = document.getElementById("rating");
const backToPreviousForm = document.getElementById("backToPreviousForm");
const form = document.getElementById("show-form");
const showForm = document.getElementById("show-form-button");
const closeForm = document.querySelectorAll(".close-form");
// ajouter un nouveau joueur
const addNewPlayer= document.getElementById("addNewPlayer")
// inputs
const playerName= document.getElementById("player-name")
const profileImg= document.getElementById("profile-img")
const position= document.getElementById("position")
const flag= document.getElementById("flag")
const club= document.getElementById("club")
const logo= document.getElementById("logo")
const pace= document.getElementById("pace")
const shooting= document.getElementById("shooting")
const nationality= document.getElementById("nationality")
const passing= document.getElementById("passing")
const defending= document.getElementById("defending")
const dribbling= document.getElementById("dribbling")
const physical= document.getElementById("physical")
const ratingInput= document.getElementById("rating-input")
// array to store data
let players={};

NavigateToNextForm.addEventListener("click", (e) => {
  e.preventDefault();
  pesonalInfo.classList.add("hidden");
  rating.classList.remove("hidden");
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
  });
});

addNewPlayer.addEventListener("click",(e)=>{
    e.preventDefault();
    const players= document.getElementById("players")
    const player= document.createElement("div")
    player.innerHTML=`<div class="relative player-card w-fit">
            <img
              src="./src/assets/img/badge_gold.webp"
              alt=""
              class="w-52 h-72"
            />
            <img
              src="./src/assets/img/players/Ismael_Saibari.webp"
              alt=""
              class="absolute top-16 left-10"
            />
            <div
              class="flex text-center flex-col leading-3 absolute top-16 left-8"
            >
              <span class="font-bold text-xl">${ratingInput.value}</span>
              <span class="font-mono">CF</span>
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
          </div>`
          players.appendChild(player)
})
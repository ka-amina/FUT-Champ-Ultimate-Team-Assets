const NavigateToNextForm = document.getElementById("NavigateToNextForm");
const pesonalInfo = document.getElementById("personal-info");
const rating = document.getElementById("rating");
const backToPreviousForm = document.getElementById("backToPreviousForm");
const form = document.getElementById("show-form");
const showForm = document.getElementById("show-form-button");
const closeForm = document.querySelectorAll(".close-form");
// inputs
const name= documet.getElementById("player-name")
const profileImg= documet.getElementById("profile-img")
const position= documet.getElementById("position")
const flag= documet.getElementById("flag")
const club= documet.getElementById("club")
const logo= documet.getElementById("logo")
const pace= documet.getElementById("pace")
const shooting= documet.getElementById("shooting")
const nationality= documet.getElementById("nationality")
const passing= documet.getElementById("passing")
const dribbling= documet.getElementById("dribbling")
const physical= documet.getElementById("physical")
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


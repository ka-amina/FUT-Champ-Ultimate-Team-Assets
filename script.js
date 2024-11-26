const NavigateToNextForm = document.getElementById("NavigateToNextForm");
const pesonalInfo = document.getElementById("personal-info");
const rating = document.getElementById("rating");
const backToPreviousForm= document.getElementById("backToPreviousForm")

NavigateToNextForm.addEventListener("click",(e)=>{
    e.preventDefault()
    pesonalInfo.classList.add("hidden")
    rating.classList.remove("hidden")
})
backToPreviousForm.addEventListener("click",(e)=>{
    e.preventDefault(e)
    pesonalInfo.classList.remove("hidden")
    rating.classList.add("hidden")
})

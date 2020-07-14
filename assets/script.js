
var toggleButton = document.getElementById("nav-bars")
var navMenuMobile = document.getElementById("nav-menu-mobile")

toggleButton.addEventListener("click",()=>{
    navMenuMobile.classList.toggle("hide")
    navMenuMobile.classList.toggle("active")
    console.log("here i ammmm!!!")
})
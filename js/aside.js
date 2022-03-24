const handlAsideHTML = document.querySelector("#handlAside")
const asideHTML = document.querySelector("#aside")
const mainHTML = document.getElementById("main")

let showAside = true
handlAsideHTML.addEventListener("click",()=>{
    if (showAside) {
        asideHTML.style.left = -15+"%" 
        mainHTML.style.left = 2+"%"
        showAside = !showAside
    } else{
        asideHTML.style.left = 0 
        mainHTML.style.left = 17+"%" 
        showAside = !showAside
    }
})
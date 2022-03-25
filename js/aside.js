const handlAsideHTML = document.querySelector("#handlAside")
const asideHTML = document.querySelector("#aside")
const mainHTML = document.getElementById("main")
//закрывающая открывающая aside
let showAside = true
handlAsideHTML.addEventListener("click",()=>{
    if (showAside) {
        asideHTML.style.left = -15+"%" 
        mainHTML.style.left = 2+"%"
        mainHTML.style.width = 96+"%"
        handlAsideHTML.style.transform = 'rotate(' + 180 + 'deg)';
        showAside = !showAside
    } else{
        asideHTML.style.left = 0 
        mainHTML.style.left = 17+"%" 
        mainHTML.style.width = 81+"%"
        handlAsideHTML.style.transform = 'rotate(' + 0 + 'deg)';
        showAside = !showAside
    }
})
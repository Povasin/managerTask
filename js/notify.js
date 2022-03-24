export default class Notify{
    constructor(){
        document.querySelector('body').insertAdjacentHTML('beforeend', `<div id="notify"></div>`)
        this.notifyHTML = document.getElementById("notify");
    }

    massNotifys = []

    showNotify(){
        this.notifyHTML.style.display = "flex";
        console.log(1);
    }
}
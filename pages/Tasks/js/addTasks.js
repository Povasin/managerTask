import {default as Notify} from '../../../js/notify.js'
const myNotify = new Notify()

const addTaskBtn = document.getElementById("addTask");

addTaskBtn.addEventListener('click', ()=>{
    myNotify.showNotify()
})

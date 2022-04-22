import {default as Notify} from '../../../js/notify.js'
import { render } from "./search.js";
const myNotify = new Notify()
const addTaskBtn = document.getElementById("addTask");
const send = document.getElementById("send")
addTaskBtn.addEventListener('click', ()=>{
    myNotify.showNotify()
})
send.addEventListener('click', ()=>{
    myNotify.addNotify()
    console.log(myNotify.ManeTasks);
    render(JSON.parse(localStorage.getItem("maneTasks")) )
})
  

export default class Notify{
    constructor(){
        document.querySelector('body').insertAdjacentHTML('beforeend', `<div id="notify">
        <div class="newMessage">
            <p>новое сообщение:</p>
            <button id="closeMessage">X</button>
        </div>
        <p class="p">кому:</p>
        <input type="text" id="who">
        <p id=sendFalse></p>
        <p class="p">письмо:</p>
        <input type="text" id="leter">
        <div class="sendHTML">
              <button id="send">отправить</button>
              <p id="sendDate">21 marth</p>
        </div>
        </div>`)
        this.notifyHTML = document.getElementById("notify");
        this.sendHTML = document.querySelector(".sendHTML")
        this.closeMessage = document.getElementById("closeMessage")
        this.sendFalse = document.getElementById("sendFalse")
        this.who = document.getElementById("who")
        this.leter = document.getElementById("leter")
    }
    
    massNotifys = []
    showNotify(){
        this.notifyHTML.style.display = "flex";
        this.sendHTML.style.display = "flex";
        this.closeMessage.addEventListener("click", ()=>{
            this.notifyHTML.style.display = "none";
        })
    }
    addNotify () {
        const carentTasks = JSON.parse(localStorage.getItem("maneTasks")) 
        const length = carentTasks.length
        for (let i = 0; i <length; i++) {
            if (carentTasks[i].name == this.who.value) {
                carentTasks.push({
                    name:this.who.value,
                    text: this.leter.value,
                    date: "21 marth"
                })
                localStorage.setItem("maneTasks", JSON.stringify(carentTasks))
                break    
            } else{
                this.sendFalse.innerHTML ="такого пользавтеля нет"
            }
        }
    }   
}
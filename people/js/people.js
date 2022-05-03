const staff__img = document.querySelector(".staff__img")
const staff__people= document.querySelector(".staff__people")
const ManePeople = ["you", "пупкин ф.ю", "залупкин ф.ф"]

if (!JSON.parse(localStorage.getItem("ManePeople"))) {
    localStorage.setItem("ManePeople", JSON.stringify(ManePeople))    
}
function render(mass) {
    staff__people.innerHTML = ''
    mass.forEach(user => {
        staff__people.insertAdjacentHTML("beforeEnd", `<div class="staff__people__user">
        <img src="../img/avatar.png">
        <p class="user__name">${user}</p>
    </div>`)
    });
}
render(JSON.parse(localStorage.getItem("ManePeople")))
staff__img.addEventListener("click", ()=>{
    document.querySelector('.body').insertAdjacentHTML('beforeend', `<div id="notify">
    <div class="newMessage">
        <p>добавление сотрудника:</p>
        <button id="closeMessage">X</button>
    </div>
    <p class="p">фамилия имя:</p>
    <input type="text" id="who">
    <p id=sendFalse></p>
    <div class="sendHTML">
          <button id="send">добавить</button>
          <p id="sendDate">21 marth</p>
    </div>
    </div>`)
    const who = document.getElementById("who")
    let notify = document.getElementById("notify")
    const send = document.getElementById("send")
    const closeMessage = document.getElementById("closeMessage")
    closeMessage.addEventListener("click",()=>{
        notify.style.display = "none"
    })
    render(JSON.parse(localStorage.getItem("ManePeople")))
    function myJSON() {
        const JSONuser = JSON.parse(localStorage.getItem("ManePeople")) 
        JSONuser.push(who.value)
        localStorage.setItem("ManePeople", JSON.stringify(JSONuser))
    }
    send.addEventListener("click", ()=>{
        myJSON()
        render(JSON.parse(localStorage.getItem("ManePeople")))
    })
})

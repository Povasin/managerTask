const ManeTasks = [
    {
        name: "попкин а.г",
        text:"k0wekg kwaorgk owaorhk pwrohj ahrj- aerhjn aer herj naerhjn rnh rewahni anrehp gaiwrej gwahe ghwaer ghwehg waeuog hwaoeubg awueignareg",
        date:"21 marth"
    },
    {
        name: "пупкин ф.ю",
        text:"купить арбузов и бананов и помидоров",
        date:"21 marth"
    },
    {
        name:"залупкин ф.ф",
        text:"купить арбузов и бананов и помидоров",
        date:"21 marth"
    },
    {
        name:"халупкин ф.ф",
        text:"купить арбузов и бананов и помидоров",
        date:"21 marth"
    }
    
]

if (!JSON.parse(localStorage.getItem("maneTasks"))) {
    localStorage.setItem("maneTasks", JSON.stringify(ManeTasks))    
}
const searchHTML = document.querySelector("#search")
const tasksHTML = document.querySelector(".tasks") 

export function render(mass) {
    tasksHTML.innerHTML = ""
    mass.forEach(task => {
        tasksHTML.insertAdjacentHTML("beforeend", ` <div class="tasks__item">
        <p class="removeTasks" data-id="${task.name}">X</p>
        <p class="tasks__name">${task.name}</p>
        <p class="tasks__text">${task.text}</p>
        <p class="tasks__date">${task.date}</p>
        <p class="openTasks">></p>
    </div>`)
    }); 
}

render(JSON.parse(localStorage.getItem("maneTasks")))
searchHTML.addEventListener("input", ()=>{
    let filterTasks = JSON.parse(localStorage.getItem("maneTasks")).filter((task)=>{
        if (task.name.indexOf(searchHTML.value) != -1) {
            return true
        } else{
            return false
        }
    })
    render(filterTasks)
})
tasksHTML.addEventListener("click",e=>{
    if (e.target.className == "openTasks") {
        if (!e.path[1].classList.contains("active__task")) {
            e.path[1].classList.add("active__task")
            e.target.style.transform = 'rotate(' + 90 + 'deg)';
            e.path[1].style.height = 200 + "px"
        } else{
            e.path[1].classList.remove("active__task")
            e.path[1].style.height = 70 + "px"
            e.target.style.transform = 'rotate(' + 0 + 'deg)';  
        }
    }
    if (e.target.className == "removeTasks") {
        const carentTasks = JSON.parse(localStorage.getItem("maneTasks")) 
       carentTasks.forEach((tasks, index) =>{
           if (tasks.name == e.target.dataset.id) {
                carentTasks.splice(index , 1)
                    localStorage.setItem("maneTasks", JSON.stringify(carentTasks))
                    render(JSON.parse(localStorage.getItem("maneTasks")))
           }
       })
    }
})
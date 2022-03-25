const ManeTasks = [
    {
        name: "попкин а. г.",
        text:"купить арбузов и бананов и помидоров",
        date:"21 marth"
    },
    {
        name: "пупкин ф.ю",
        text:"купить арбузов и бананов и помидоров",
        date:"21 marth"
    },
    {
        name:"залупкин ф.",
        text:"купить арбузов и бананов и помидоров",
        date:"21 marth"
    },
    {
        name:"халупкин ф.",
        text:"купить арбузов и бананов и помидоров",
        date:"21 marth"
    }
]
const searchHTML = document.querySelector("#search")
const tasksHTML = document.querySelector(".tasks") 

function render(mass) {
    tasksHTML.innerHTML = ""
    mass.forEach(task => {
        tasksHTML.insertAdjacentHTML("beforeend", ` <div class="tasks__item">
        <p class="tasks__name">${task.name}</p>
        <p class="tasks__text">${task.text}</p>
        <p class="tasks__date">${task.date}</p>
        <p class="openTasks">></p>
    </div>`)
    }); 
}

render(ManeTasks)
let tasks__item = document.querySelector(".tasks__item")
searchHTML.addEventListener("input", ()=>{
    let filterTasks = ManeTasks.filter((task)=>{
        if (task.indexOf(searchHTML.value) != -1) {
            return true
        } else{
            return false
        }
    })
    render(filterTasks)
})
let openTasks = document.querySelector(".openTasks")
let showTask = false
tasksHTML.addEventListener("click",e=>{
    console.log(e.path[1]);     
    if (e.target.className == "openTasks") {
        if (!showTask) {
            e.target.style.transform = 'rotate(' + 90 + 'deg)';
            e.path[1].style.height = 200 + "px"
            showTask = !showTask
        } else{
            e.path[1].style.height = 100+ "px"
            e.target.style.transform = 'rotate(' + 0 + 'deg)';
            showTask = !showTask
        }
    }
})





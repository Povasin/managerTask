const ManeTasks = ["попкин а. г.", "пупкин а. г.", "бобкин а. г.", "жопкин а. г." , "копкин а. г." ]
const ManeText = ["купить арбузов и бананов и помидоров", "Подскажите, как в таком случае можно корректировать координаты, если всё вбито", "в строку Интересует замена 50 obj.style.transform", "попоп оппо окпо щощ пкр пшко пфоп пщш офуоп тищвжпш отфщкцп"]
const searchHTML = document.querySelector("#search")
const tasksHTML = document.querySelector(".tasks") 
let tasks__text = document.querySelector("tasks__text")

function render(mass) {
    tasksHTML.innerHTML = ""
    mass.forEach(task => {
        tasksHTML.insertAdjacentHTML("beforeend", ` <div class="tasks__item">
        <p class="tasks__name">${task}</p>
        <p class="tasks__text"> fwefweffwef</p>
        <p class="tasks__date">21 марта</p>
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
//надо проверить некоректно работает
let openTasks = document.querySelector(".openTasks")
let showTask = false
tasksHTML.addEventListener("click",e=>{
    // let clientHight = tasks__text.clientHeight
    if (e.target.className = "openTasks") {
        if (!showTask) {
            openTasks.style.transform = 'rotate(' + 90 + 'deg)';
            tasks__item.style.height = 200 + "px"
            showTask = !showTask
        } else{
            tasks__item.style.height = 53 + "px"
            openTasks.style.transform = 'rotate(' + 90 + 'deg)';
            showTask = !showTask
        }
    }
})


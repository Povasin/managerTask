const ManeTasks = ["попкин а. г.", "пупкин а. г.", "бобкин а. г.", "жопкин а. г." , "копкин а. г." ]
const searchHTML = document.querySelector("#search")
const tasksHTML = document.querySelector(".tasks") 
const handalAsideHTML = document.querySelector("#handalAside")
const asiedeHTML = document.querySelector("#aside")
const mainHTML = document.getElementById("main")
const addTaskHTML = document.getElementById("addTask")
const notifyHTML = document.querySelector(".notify")
function render(mass) {
    tasksHTML.innerHTML = ""
    mass.forEach(task => {
        tasksHTML.insertAdjacentHTML("beforeend", `<div class="tasks__item">
        <p>${task}</p>
        </div>`)
    });
}

render(ManeTasks)

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

let showAside = true
handalAsideHTML.addEventListener("click",()=>{
    
    if (showAside) {
        asiedeHTML.style.left = -15+"%" 
        mainHTML.style.left = 2 + "%"
        showAside = !showAside
    } else{
        asiedeHTML.style.left = 0 
        mainHTML.style.left = 17+"%" 
        showAside = !showAside
    }
})

addTaskHTML.addEventListener("click",()=>{
    notifyHTML.style.display = "flex"
})




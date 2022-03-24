const ManeTasks = ["попкин а. г.", "пупкин а. г.", "бобкин а. г.", "жопкин а. г." , "копкин а. г." ]
const searchHTML = document.querySelector("#search")
const tasksHTML = document.querySelector(".tasks") 

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
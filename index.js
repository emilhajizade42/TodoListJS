const todoInput = document.querySelector("#todo-input")
const addButton = document.querySelector("#add-button")
const todoList = document.querySelector("#todo-list")


let isEditMode = false
let isEditElement

todoInput.addEventListener("keydown",function (e) {
    if (e.target.value == "") {
        addButton.setAttribute("disabled","")
    } else {
        addButton.removeAttribute("disabled")
    }
})

addButton.addEventListener("click",function (e) {
    if (!isEditMode) {
        if (document.querySelector("#todo-input").value == undefined || document.querySelector("#todo-input").value == "") {
            addButton.setAttribute("disabled","")
            return
        } 
        let element = createTodoSchema(document.querySelector("#todo-input").value,e)
        todoList.appendChild(element)
        todoInput.value = ""
        addButton.setAttribute("disabled","")
    } 
    else {
        if (document.querySelector("#todo-input").value == undefined || document.querySelector("#todo-input").value == "") {
            addButton.setAttribute("disabled","")
            return
        } 
        isEditElement.innerHTML =  document.querySelector("#todo-input").value
        todoInput.value = ""
        isEditMode = false
    }
    
})


function createTodoSchema(msg) {
    const li = document.createElement("li")
    const h2 = document.createElement("h2")
    const button = document.createElement("button")
    const p = document.createElement("p")
    const h4 = document.createElement("h4")
    h4.innerHTML = "cancel"
    h4.addEventListener("click",function(e) {
        todoInput.value = ""
        isEditMode = false

    })
    p.innerHTML = "Edit"
    p.style.cursor = "pointer"
    p.onclick = function (e) {
        isEditMode = true
        isEditElement = e.target.previousSibling
        todoInput.value = e.target.previousSibling.innerHTML
        console.log(e.target.previousSibling.value);
    }
    button.innerHTML= "X"
    h2.innerText = msg
    button.classList.add("delete-button")
    button.addEventListener("click",function (e) {
        deleteParentElement(e)
    })
    li.appendChild(h2)
    li.appendChild(p)
    li.appendChild(h4)
    li.appendChild(button)

    return li
}


function deleteParentElement(e) {
    e.target.parentElement.remove()
}

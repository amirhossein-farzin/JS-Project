let list = document.querySelector("#list");
let searchInput = document.querySelector("#search-box");
let deleteInput = document.querySelector("#delete-list");
let addBtn = document.querySelector("#add-btn");
let addInput = document.querySelector("#add input");
list.addEventListener('click', (e)=>{
    if(e.target.nodeName == "SPAN" && e.target.className == "btn-primary"){
        e.target.parentNode.remove()
    }
    if(list.children.length == 0){
        let listEmpty = document.createElement("div");
        listEmpty.innerText = "your list is Empty"
        listEmpty.style.color = "#333"
        listEmpty.style.textAlign = "center"
        list.appendChild(listEmpty)
    }
})
addBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!addInput.value){
        return
    }
    if(document.querySelector("#empty")){
        document.querySelector("#empty").remove()
    }
    list.append(creatItem(addInput.value))
    addInput.value = ""
})

function creatItem(itemValue){
    let item = document.createElement("li")
    let title = document.createElement("span")
    let btn = document.createElement("span") 
    item.className = "to-do-item"
    title.className = "title"
    btn.className = "btn-primary"
    item.id = "list-item"
    title.id = "list-title"
    btn.id = "list-btn"
    btn.innerText = "delete"
    title.innerText = itemValue
    item.appendChild(title)
    item.appendChild(btn)
    return item;
}
searchInput.addEventListener('input', (e)=>{
    Array.from(list.children).forEach(element=>{
        if(document.querySelector("#empty")){
            return
        }
        if(element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())){
            element.style.display = "flex"
        }else{
            element.style.display = "none"
        }
    })
})
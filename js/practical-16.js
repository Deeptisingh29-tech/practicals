// Selectors------------
var todoInput = document.querySelector(".input-todo");
var todoBtn = document.querySelector(".btn-todo");
var todoList = document.querySelector(".list-todo");

//Event handlers-----------
todoBtn.onclick = make;
todoList.onclick = chkdel;

//Functions----------------
function make(e) {

    //console.log(e.target); //to stop data submission   (29.38)
    e.preventDefault();
    if (todoInput.value == "")
    {
        alert("PLease Enter Something!");
    }
    else
    {
        var newDiv = document.createElement("div");
        newDiv.classList.add("todo");

        var newLi = document.createElement("li");
        newLi.classList.add("item-todo");
        newLi.innerHTML = todoInput.value;
        newDiv.appendChild(newLi);

        var checkbtn = document.createElement("button");
        checkbtn.classList.add("check-btn");
        checkbtn.innerHTML = '<i class="fa fa-check"></i>';
        newDiv.appendChild(checkbtn);

        var delbtn = document.createElement("button");
        delbtn.classList.add("del-btn");
        delbtn.innerHTML = '<i class="fa fa-trash"></i>';
        newDiv.appendChild(delbtn);

        todoList.appendChild(newDiv);
        todoInput.value = "";
    }
}

function chkdel(e) {
    var item = e.target;
    if(item.classList[0] === "del-btn") 
    {
        var parent = item.parentElement;
        parent.remove();
    }
    if(item.classList[0] === "check-btn") 
    {
        var parent = item.parentElement;
        parent.classList.toggle("completed");
    }
}

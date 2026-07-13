
let todoList = [];
let x = localStorage.getItem("todos");


if (x == null) {
    todoList = [{

}];
}
else {
    todoList = JSON.parse(x);
 
displayItems();
}

let btn = document.querySelector('#add_btn');
add_btn.addEventListener('click', function () {


    let todo_text = document.querySelector('#todo-text');
    let todoItem = todo_text.value;
    let date = document.querySelector('#date');
    let todo_date = date.value;
    todoList.push({ item: todoItem, dueDate: todo_date });
    
    localStorage.setItem("todos", JSON.stringify(todoList));
    date.value = '';
    todo_text.value = '';
    displayItems();
});
function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newhtml = '';
    for (let i = 0; i < todoList.length; i++) {

        let { item, dueDate } = todoList[i];
        newhtml += `
                <span>${item}</span>
                <span>${dueDate}</span>
                <button id='dlt_btn' onclick="ItemDelete(${i}); ">Delete</button>
               
                `;

    }
    console.log(newhtml);
    containerElement.innerHTML = newhtml;

}
function ItemDelete(index) {
    todoList.splice(index, 1);
    displayItems();
    localStorage.setItem("todos", JSON.stringify(todoList));
}

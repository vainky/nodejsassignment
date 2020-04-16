let submit = document.getElementById('submit')
let ulList=document.getElementById('ulList')
let priSelect= document.getElementById('prior')



submit.onclick = function()
{
  addTodos()
}

//function that add new todo
async function addTodos()
{  
  var task =
  {
    title: document.getElementById('title').value,
    description:document.getElementById('desc').value,
    priority: document.getElementById('priority').value,
    due:document.getElementById('due').value
  }

const resp = await fetch('/todos', { method: 'POST' , body: JSON.stringify(task),
headers: { "Content-type": "application/json; charset=UTF-8"}})

alert("New task added")

}

//display all the todos in list
async function getTodos()
{ 
  console.log("hii")
  var tomorrow = new Date();
  tomorrow.setDate(new Date().getDate()+1);
  var finalDate = tomorrow.toISOString().split('T')[0]
  document.getElementById('due').value=finalDate

  const resp =await fetch('/todos',{method:'GET'})
  const todos = await resp.json()

  todos.forEach(element => {
    var x=document.createElement('li')
    x.textContent="ID:  "+ element.id + " , TITLE:  "+ element.title+" , COMPLETED YET:  "+
     element.status   +" , PRIORITY:  "+ element.priority+", DUE DATE: "+ element.due

    ulList.appendChild(x)
    
  });
  
}


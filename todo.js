console.log("Welcome");
showTasks();

// If user adds a task, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addText = document.getElementById("addText");
  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    tasksObj = [];
  } else {
    tasksObj = JSON.parse(tasks);
  }
  // console.log(addText.value)
  tasksObj.push(addText.value);
  localStorage.setItem("tasks", JSON.stringify(tasksObj));
  addText.value = "";
  //   console.log(tasksObj);
  showTasks();
});

// Function to show elements from localStorage
function showTasks() {
  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    tasksObj = [];
  } else {
    tasksObj = JSON.parse(tasks);
  }
  let html = "";
  tasksObj.forEach(function (element, index) {
    html += `
            <div class="taskCard my-2 mx-2 card">
                    <div class="card-body">
                        <h5 class="card-title">Task ${index + 1}</h5>
                
                       
                        <p class="card-text"> ${element}</p>
                        <button id="${index} class=" " onclick="begintoremove(this.id)" class="btn btn-dark">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
</button>
<button id="${index} class="" onclick="deleteTask(this.id)" class="btn btn-dark">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="25"  fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
                        </button>
                        </div>
                </div>`;
  });
  let tasksElm = document.getElementById("tasks");
  if (tasksObj.length != 0) {
    tasksElm.innerHTML = html;
  } else {
    tasksElm.innerHTML = `Nothing to show!.`;
  }
}

function begintoremove(index){

 const card = document.getElementById(index).parentNode.parentNode;
  
 
//  card.classList.add('done');
 $(card).addClass("done");
  // document.getElementById(index).style.color = "green";

  localStorage.setItem(card,"done");
  // showTasks();
    console.log("moving back");
    const timeout = setTimeout(moveBack,1000,index);
}

function moveBack(index){
let moveit = localStorage.getItem("tasks");
console.log(moveit)

if (moveit == null) {
  tasksObj = [];
} else {
  tasksObj = JSON.parse(moveit);
  
}

console.log(tasksObj);
// console.log(tasksObj.splice(index+1, 1)[0]);
tasksObj.push(tasksObj.splice(index, 1)[0]);

// console.log(tasksObj);
// tasksObj.push(tasksObj.splice(index, 1));
// const ans = tasksObj.slice(1);
// console.log(ans);
// console.log(slicedOut);

console.log(tasksObj);
localStorage.setItem("tasks", JSON.stringify(tasksObj));
showTasks();

}

// Function to delete a Task
function deleteTask(index) {
  //   console.log("I am deleting", index);

  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    tasksObj = [];
  } else {
    tasksObj = JSON.parse(tasks);
  }


  console.log(tasksObj.length);
  tasksObj.splice(index, 1);
  console.log(tasksObj);
  localStorage.setItem("tasks", JSON.stringify(tasksObj));
  // console.log(tasksObj);
  showTasks();
}

//search the task
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  // console.log('Input event fired!', inputVal);
  let taskCards = document.getElementsByClassName("taskCard");
  Array.from(taskCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    // console.log(cardTxt);
  });
});

// //Edit the Task
// function editTask(index) {
//   console.log(index);
//   //   console.log("I am deleting", index);

//   let tasks = localStorage.getItem("tasks");
//   if (tasks == null) {
//     tasksObj = [];
//   } else {
//     tasksObj = JSON.parse(tasks);
//   }

//   let editIt = document.getElementById("addText");
//   if (tasksObj[index].length != 0) {
//     editIt.innerText = `${tasksObj[index]}`;
//   } else {
//     editIt.innerText = `Nothing to show!.`;
//   }

//   let addText = document.getElementById("addText");
//   let addBtn = document.getElementById('addBtn');
//   let Tasks = localStorage.getItem("tasks");
//   if (Tasks == null) {
//     tasksObj = [];
//   } else {
//     tasksObj = JSON.parse(Tasks);
//   }
//   console.log(tasksObj);
//   // tasksObj[index] = addText.value;
//   // addText.innerText = `${tasksObj[index]}`;
//   addBtn.addEventListener('click', ()=>{
//     console.log(index);
//     console.log(editIt.value);
//     tasksObj[index] = addText.value;
//     console.log(tasksObj);
//   });

//   localStorage.setItem("tasks", JSON.stringify(tasksObj));
//   showTasks();
// }

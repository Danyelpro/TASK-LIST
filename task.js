
 //DEFINE UI VARS
 const form = document.querySelector('#task-form');
 const taskList = document.querySelector('.collection');
 const clearBtn = document.querySelector('.clear-tasks');
 const filter = document.querySelector('#filter');
 const taskInput = document.querySelector('#task');
 



//LOAD ALL EVENT LISTENERS
 loadEventListeners();

 //LOAD ALL EVENT LISTENERS
 function loadEventListeners(){
    

    //ADD TASK EVENT
     form.addEventListener('submit', addTask);
     //REMOVE TASK EVENT
     taskList.addEventListener('click', removeTask);
     //CLEAR TASK EVENT
     clearBtn.addEventListener('click', clearTasks);
     //FILTER TASK
     filter.addEventListener('keyup', filterTasks);
 }

 //ADD TASK
 function addTask(e){  
     if(taskInput.value === '') {
         alert('Add a task');
     }

     //CREAT li ELEMENT
     const li = document.createElement('li');
     
     //ADD CLASS

     li.className = 'collection-item'; 
     //CREAT TEXT NODE AND APPEND TO li
     li.appendChild(document.createTextNode(taskInput.value));
     //CREATE NEW LINK ELEMENT
     const link =   document.createElement('a');
     //ADD CLASS
     link.className = 'delete-item secondary-content';
     // ADD ICON HTML
     link.innerHTML = '<i class="fa fa-remove" style="color: #339af0; aria-hidden="true"></i>'
     //APPEND THE LINK TO li
     li.appendChild(link);
    //APPEND li TO ul
     taskList.appendChild(li);
     //STORE IN LOCAL STORAGE
     storeTaskInLocalStorage(taskInput.value);
    //clear INPUT
     taskInput.value ='';


     console.log(li);
    

     e.preventDefault();
    }


    //REMOVE TASK
    function removeTask(e){
        if(e.target.parentElement.classList.contains('delete-item')){
            if(confirm('are you sure?')){
                  e.target.parentElement.parentElement.remove();
            }
           
        }
      
    }

   function clearTasks(e){
  
   // FIRST METHOD 
    //    taskList.innerHTML = '';
 // 

     //SECOND METHOD 
     while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
     }
     
   }
 
 
   function filterTasks(e) {
    const text = e.target.value.toLowerCase();
       document.querySelectorAll('.collection-item').forEach
       (function(task){
               const item = task.firstChild.textContent;
               if(item.toLocaleLowerCase().indexOf(text)!= -1){
                   task.style.display = 'block';
               }
               else{
                   task.style.display = 'none';
               }
           }
       );
    
   }
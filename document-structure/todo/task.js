const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const button = document.querySelector('button');

const task = [];

button.addEventListener('click', () => {
    // alert('Hi');
    tasksList.insertAdjacentHTML('beforeend', `
      <div class="task">
        <div class="task__title">
          ${taskInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`  
    );
    taskInput.value = "";

    task.push(tasksList.querySelector('.task'));
    // const task = Array.from(tasksList.getElementsByClassName('task'));
    // console.log(task);
    event.preventDefault();
});

console.log(task);

for (let i = 0; i < task.length; i++) {
    const taskRemove = task[i].querySelector('task__remove');
    taskRemove.onclick = function() {
        console.log('Hi');
        // return false;
    }
}
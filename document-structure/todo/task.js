const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  const taskInputValidate = (taskInput.value).trim();
  if (taskInputValidate !== '') {
    tasksList.insertAdjacentHTML('beforeend', `
    <div class="task">
      <div class="task__title">
        ${taskInputValidate}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>`  
    );

    const task = Array.from(tasksList.getElementsByClassName('task'));

    for (let i = 0; i < task.length; i++) {
    const taskRemove = task[i].querySelector('.task__remove');
      taskRemove.onclick = function() {
          task[i].remove();
      }
    }

    taskInput.value = "";
    event.preventDefault();
  }
});


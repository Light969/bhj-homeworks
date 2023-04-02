const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  const taskInputValidate = (taskInput.value).trim();
  event.preventDefault();
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

    const taskRemove = task.at(-1).querySelector('.task__remove');
      taskRemove.onclick = function() {
        task.at(-1).remove();
      }

    taskInput.value = "";
  }
});


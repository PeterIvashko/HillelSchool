function Tasks(_formInput, _todosWrapper) {
  const todosWrapper = document.querySelector(_todosWrapper);

  this.addItem = (event) => {
    event.preventDefault();
    this.input = event.target.querySelector(_formInput);
    const inputValue = this.input.value.trim();
    if (inputValue !== '') {
      const todoItem = this.createTemplate(inputValue);
      todosWrapper.insertAdjacentHTML('beforeend', todoItem);
      this.input.value = '';
    }
  };

  this.createTemplate = function (description) {
    return `
    <div class="todo-item">
      <input type="checkbox" class="todo-item__checkbox">
      <div class="todo-item__description">${description}</div>
      <button class="todo-item__delete-btn">Delete</button>
    </div>
    `;
  };

  todosWrapper.addEventListener('click', (event) => {
    const target = event.target;
    const todoItem = target.closest('.todo-item');

    if (target.classList.contains('todo-item__checkbox')) {
      const description = todoItem.querySelector('.todo-item__description');
      description.classList.toggle('todo-item__description--done');
    }

    if (target.classList.contains('todo-item__delete-btn')) {
      todoItem.remove();
    }
  });
}

const task = new Tasks('.js--form__input', '.js--todos-wrapper');

document.querySelector('.js--form').addEventListener('submit', task.addItem);

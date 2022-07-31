const btn = document.getElementById('btn');
const input = document.getElementById('input');
const list = document.getElementById('todoList');
const rmvBtn = document.querySelector('button.rmvBtn');

function onBtnClick() {
  btn.addEventListener('click', () => {
    const todo = document.createElement('div');
    const rmv = document.createElement('button');
    const checked = document.createElement('button');
    rmv.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    rmv.classList = 'rmvBtn';
    checked.innerHTML = '<i class="fa-solid fa-check"></i>';
    checked.classList = 'checkBtn';
    todo.classList = 'todo';
    todo.innerText = input.value;
    todo.appendChild(rmv);
    todo.appendChild(checked);
    if (input.value === '') {
      alert("Vous n'avez pas ajoute d'element a votre liste");
    } else {
      list.appendChild(todo);
    }
    input.value = '';
    rmv.addEventListener('click', () => {
      list.removeChild(todo);
    });
    checked.addEventListener('click', () => {
      todo.classList.toggle('checked');
    });
  });
}

onBtnClick();

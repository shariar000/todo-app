function addTask() {
  const task = document.getElementById('task').value;
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    document.getElementById('list').appendChild(li);
    document.getElementById('task').value = '';
  }
}

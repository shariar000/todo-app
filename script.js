function addTask() {
  const task = document.getElementById('task').value;
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;

    // Toggle completed state on click
    li.onclick = () => {
      li.style.textDecoration = li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    };

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.onclick = (e) => {
      e.stopPropagation();  // Prevent li.onclick when deleting
      li.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById('list').appendChild(li);
    document.getElementById('task').value = '';
  }
}

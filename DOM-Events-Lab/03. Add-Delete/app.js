function addItem() {
        let newItem = document.getElementById('newItemText').value
        let liElement = document.createElement('li');
        liElement.textContent = newItem;
        document.getElementById('items').appendChild(liElement);
        
        let deleteBtn = document.createElement('a');
        deleteBtn.textContent = '[Delete]';
        deleteBtn.href = '#';
        liElement.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', onDelete)

        document.getElementById('newItemText').value = '';
        function onDelete(event){
        event.target.parentElement.remove()
        }
}

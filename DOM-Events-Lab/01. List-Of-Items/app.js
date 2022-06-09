function addItem() {
 let newItem = document.getElementById('newItemText').value
 let liElement = document.createElement('li');
 liElement.textContent = newItem;
 document.getElementById('items').appendChild(liElement);
 document.getElementById('newItemText').value = '';
}
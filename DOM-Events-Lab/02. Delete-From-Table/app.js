function deleteByEmail() {
    let input = document.querySelector('input').value;
    let rows = Array.from(document.querySelectorAll('tbody tr'))
    let isFound = false;
    for(let row of rows){
        if(row.children[1].textContent == input){
            row.remove()
            isFound = true
        }
    }
    if(isFound){
        document.getElementById('result').textContent = 'Deleted.'
    } else{
        document.getElementById('result').textContent = ' Not found.'
    }
}
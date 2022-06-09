function search() {
   let items = document.getElementsByTagName('li')
   let match = document.getElementById('searchText').value;
   let counter = 0;
for(let city of items){
   city.style.fontWeight = 'normal';
   city.style.textDecoration = ''
}

   for(let city of items){
      if(city.textContent.includes(match)){
        counter++
        document.getElementById('result').textContent = `${counter} matches found`;
        city.style.fontWeight = 'bold';
        city.style.textDecoration = 'underline'
      }
   }
}

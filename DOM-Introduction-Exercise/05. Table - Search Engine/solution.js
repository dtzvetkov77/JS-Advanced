function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById('searchField')
      let rows = document.querySelectorAll('tbody tr')
      for (const row of rows) {
         row.classList.remove('select')
            if(row.innerHTML.includes(input.value)){
               row.className = 'select'
            }
         }
         input.value = ''
      }
   }

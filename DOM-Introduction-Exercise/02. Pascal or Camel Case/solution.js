function solve (){
 let text = document.getElementById('text').value;
 let namingConvention = document.getElementById('naming-convention').value;
 let result = ''
 let words = text.split(' ');
 if(namingConvention!= 'Camel Case' && namingConvention != 'Pascal Case'){
 return document.getElementById('result').textContent = 'Error!'
 }
 for (let index = 0; index < words.length; index++) {
   words[index] = words[index].toLowerCase();
   if(namingConvention == 'Camel Case'){
    if(index !== 0){
      words[index] = words[index].charAt(0).toUpperCase() + words[index].substring(1);
    }
   }else if(namingConvention == 'Pascal Case'){
    words[index] = words[index].charAt(0).toUpperCase() + words[index].substring(1);
   }
 result = words.join('')
document.getElementById('result').textContent = result;
}
}

function extract(elementId) {
let text = document.getElementById(elementId).textContent;
let regEx = /\((.+?)\)/g;
let match = regEx.exec(text);
let result = []
while(match != null){
    result.push(match[1]);
    match = regEx.exec(text);
}
return result.join('; ');
}
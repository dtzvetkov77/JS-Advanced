function extractText() {
  const elements = document.querySelectorAll("ul#items li");
  const textArea = document.querySelector('#result');
  for(node of elements){
      textArea.value += node.textContent + '\n'
  }
}

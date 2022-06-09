function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove' , onMouseOver);
    function onMouseOver(event){
        let result = Math.floor(event.offsetX / gradient.clientWidth * 100);
         document.getElementById('result').textContent = result + '%'
    }
}
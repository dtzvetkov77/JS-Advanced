function solve() {
    const input = {
        name: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date')
    };
    const [_,openSection,progressedSection,finishSection] = Array.from(document.querySelectorAll('section')).map(e => e.children[1])
    document.getElementById('add').addEventListener('click',addTask);

    function addTask(event){
        event.preventDefault();

        const article = document.createElement('article');
        article.appendChild(createElement('h3',input.name.value));
        article.appendChild(createElement('p',`Description: ${input.description.value}`));
        article.appendChild(createElement('p',`Due Date: ${input.date.value}`));
        const div = createElement('div','', 'flex');

       const startBtn = createElement('button','Start','green');
        const deleteBtn = createElement('button','Delete','red');
        const finishBtn = createElement('button','Finish','orange');

        div.appendChild(startBtn);
        div.appendChild(deleteBtn);

        article.appendChild(div)

        openSection.appendChild(article);
        Object.values(input).forEach(i => i.value = '');
        startBtn.addEventListener('click', onStart)
        deleteBtn.addEventListener('click', ondDelete);
        finishBtn.addEventListener('click',onFinish)

        function ondDelete(){
            article.remove()
        }
        
        function onStart(){
           startBtn.remove();
           div.appendChild(finishBtn)
            progressedSection.appendChild(article)
        }

        function onFinish(){
            div.remove()
            finishSection.appendChild(article);
        }
    }

    function createElement(type,content,className){
        const element = document.createElement(type);
        element.textContent = content;
        if(className){
            element.className = className;
        }
        return element;
    }
}
function lockedProfile() {
    let showBtn = Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', toggle))
    function toggle(e){
        let profile = e.target.parentElement
        let isActive = profile.querySelector('input[type="radio"][value = "unlock"]').checked
        if(isActive){
            let div = profile.querySelector('div')

            if(e.target.textContent == 'Show more'){
                e.target.textContent = 'Hide it'
                div.style.display = 'block'
            }else{
                div.style.display = ''
                e.target.textContent = 'Show more'
            }
        }
    }
}
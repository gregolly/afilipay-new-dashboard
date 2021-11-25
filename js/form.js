function form(){
    const searchIcon = document.querySelector('.search-icon')
    const form = document.querySelector('.search-input')
    const overlay = document.querySelector('.overlay')

    function handleForm(){
        form.classList.toggle('ativo')
        overlay.classList.add('ativo')
    }

    searchIcon.addEventListener('click', handleForm)

    document.addEventListener('click', (e) =>{
        if(e.target == overlay){
            form.classList.remove('ativo')
            overlay.classList.remove('ativo')
        }
    })
}
form()
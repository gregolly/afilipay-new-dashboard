function edit(){
    const editButton = document.querySelectorAll('.edit')
    const modal = document.querySelector('.modal')

    function handleModal(e){
        e.preventDefault()
        modal.classList.toggle('ativo')
    }

    editButton.forEach(el =>{
        el.addEventListener('click', handleModal)
    })

    document.addEventListener('click', (e) =>{
        if(e.target == modal){
            modal.classList.remove('ativo')
        }
    })
}
edit()
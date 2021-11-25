function modal(){
    const modalBtn = document.querySelector('#modal-btn')
    const modal = document.querySelector('.modal')
    const cancelar = document.querySelector('#cancelar')

    function handleModal(e){
        e.preventDefault()
        modal.classList.toggle('ativo')
        cancelar.classList.remove('ativo')
    }

    modalBtn.addEventListener('click', handleModal)

    document.addEventListener('click', (e) =>{
        if(e.target == modal){
            modal.classList.remove('ativo')
        }
    })
}
modal()
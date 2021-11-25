function assinaturasModal(){
    const buttonModal = document.querySelector('#nivel')
    const ModalAssinaturas = document.querySelector('.modal')
    const buttonExcluir = document.querySelector('.btn-excluir')
    const modalExcluir = document.querySelector('.modal-excluir-registro')
    const cancel = document.querySelector('.cancel')

    function hanndleDropDownPerfil(e){
        e.preventDefault()
        ModalAssinaturas.classList.toggle('ativo')
    }

    function handleModalExcluir(e){
        e.preventDefault()
        modalExcluir.classList.toggle('ativo')
    }

    function handleCancelar(){
        modalExcluir.classList.remove('ativo')
    }

    buttonModal.addEventListener('click', hanndleDropDownPerfil)
    buttonExcluir.addEventListener('click', handleModalExcluir)
    cancel.addEventListener('click', handleCancelar)

    document.addEventListener('click', (e) =>{
        if(e.target == modalExcluir){
            modalExcluir.classList.remove('ativo')
        }
    })

    document.addEventListener('click', (e) =>{
        if(e.target == ModalAssinaturas){
            ModalAssinaturas.classList.remove('ativo')
        }
    })

}
assinaturasModal()
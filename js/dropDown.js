function profileDrop(){
    const perfil = document.querySelector('.profile-user')
    const dropDownProfile = document.querySelector('.animated')
    const overlay = document.querySelector('.overlay')

    function hanndleDropDownPerfil(){
        dropDownProfile.classList.toggle('ativo')
        overlay.classList.toggle('ativo')
    }

    perfil.addEventListener('click', hanndleDropDownPerfil)

    document.addEventListener('click', (e) =>{
        if(e.target == overlay){
            dropDownProfile.classList.remove('ativo')
            overlay.classList.remove('ativo')
        }
    })

}
profileDrop()
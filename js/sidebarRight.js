function sideBarRight(){
    const barraLateral = document.querySelector('.sidebar')
    const iconBarraLateral = document.querySelector('.right-toggle')
    const overlay = document.querySelector('.overlay')

    function handleBarraLateral(){
        barraLateral.classList.toggle('ativo')
        overlay.classList.toggle('ativo')
    }

    iconBarraLateral.addEventListener('click', handleBarraLateral)

    document.addEventListener('click', (e) =>{
        if(e.target == overlay){
            barraLateral.classList.remove('ativo')
            overlay.classList.remove('ativo')
        }
    })
}
sideBarRight()



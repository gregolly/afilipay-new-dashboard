function lateralMenu(){
    const iconMenu = document.querySelector('.fa-bars')
    const menuLateral = document.querySelector('.horizontal-main')

    function handleMenuLateral(){
        menuLateral.classList.toggle('ativo')
    }

    iconMenu.addEventListener('click', handleMenuLateral)


    document.addEventListener('click', (e) =>{
        if(e.target == menuLateral){
            menuLateral.classList.remove('ativo')
        }
    })
}
lateralMenu()


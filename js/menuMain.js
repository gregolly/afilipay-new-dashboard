function menuMain(){
    const iconMenuMain = document.querySelector('.fa-ellipsis-v')
    const menuMain = document.querySelector('.menus')

    function handleMenuMain(){
        menuMain.classList.toggle('ativo')
    }

    iconMenuMain.addEventListener('click', handleMenuMain)

    document.addEventListener('click', (e) =>{
        if(e.target == menuMain){
            menuMain.classList.remove('ativo')
        }
    })
}
menuMain()
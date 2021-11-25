function dropDown(){
    const buttonDropDown = document.querySelector('.dropdown-switch')
    const dropDownMenu = document.querySelector('#drop')
    const overlay = document.querySelector('.overlay')
    
    function handleDropDownMenu(){
        dropDownMenu.classList.toggle('ativo')
        overlay.classList.add('ativo')
    }

    buttonDropDown.addEventListener('click', handleDropDownMenu)

    document.addEventListener('click', (e) =>{
        if(e.target == overlay){
            dropDownMenu.classList.remove('ativo')
            overlay.classList.remove('ativo')
        }
    })
}
dropDown()
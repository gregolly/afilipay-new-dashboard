function tabNav(){
    const tabsBody = document.querySelectorAll('.tab-pane')
    const tabs = document.querySelectorAll('.nav-items')
    const navLinks = document.querySelectorAll('.nav-linki')
    navLinks[0].classList.add('active')
    tabsBody[0].classList.add('ativo')

    function handleTabs(i){
        tabsBody.forEach((el) =>{
            el.classList.remove('ativo')
        })
        tabsBody[i].classList.add('ativo')
    }

    function links(i){
        navLinks.forEach(el =>{
            el.classList.remove('active')
        })
        navLinks[i].classList.add('active')
    }

    tabs.forEach((el, i) =>{
        el.addEventListener('click', () =>{
            handleTabs(i)
            links(i)
        })
    })
}
tabNav()
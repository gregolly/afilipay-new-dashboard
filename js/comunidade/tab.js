function tabs(){
    const linkTabs = document.querySelectorAll('.nav-items')
    const tabs = document.querySelectorAll('[data-tabs]')
    const navLinks = document.querySelectorAll('.nav-linke')
    tabs[0].classList.add('ativo')
    navLinks[0].classList.add('active')

    function showTabs(i){
        tabs.forEach(el =>{
            el.classList.remove('ativo')
        })
        tabs[i].classList.add('ativo')
    }

    function links(i){
        navLinks.forEach(el =>{
            el.classList.remove('active')
        })
        navLinks[i].classList.add('active')
    }
    
    linkTabs.forEach((el, i) =>{
        el.addEventListener('click', (e)=>{
            e.preventDefault()
            showTabs(i)
            links(i)
        })
    })
}
tabs()
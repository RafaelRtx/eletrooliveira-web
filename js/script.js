const tabMenu=document.querySelectorAll('.js-tabmenu ul li')
const tabContent = document.querySelectorAll('.js-tabcontent ul');
const botaoAbrir=document.querySelectorAll('[data-modal="abrir"]')
const botaoFechar=document.querySelector('[data-modal="fechar"]')
const containerModal=document.querySelector('[data-modal="container"]')

/*modal*/
if(botaoAbrir && botaoFechar && containerModal){
  function toggleModal(event){
    event.preventDefault()
    containerModal.classList.toggle('modal-ativo')
  }

  function cliqueForaModal(event){
    if (event.target == this)
    toggleModal(event)
  }

    botaoAbrir.forEach((abrir)=>{
      abrir.addEventListener('click',()=>{
        toggleModal(event)
      })
    })
    botaoFechar.addEventListener('click',toggleModal)
    containerModal.addEventListener('click',cliqueForaModal)
}

/*mudar imagens*/
if(tabMenu.length && tabContent.length) {
function activeTab(index) {
  tabContent.forEach((ul) => {
    ul.classList.remove('modal-ativo');
  });
  tabContent[index].classList.add('modal-ativo');
}

tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index);
  });
});
}
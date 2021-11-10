//animação da section ao mostrar ela
function initAnimacaoScroll(){
    const sections=document.querySelectorAll('[data-anime="scroll"]')
  if(sections.length){
    const windowMetade= window.innerHeight*0.7
 
     function animaScroll(){
         sections.forEach((section)=>{
           const sectionTop=section.getBoundingClientRect().top //getBoundingClientRect é um método que retorna todas as informações das distâncias de container, top, bottom, etc.
            const isSectionVisible=(sectionTop-windowMetade)<0 //retorna true ou false para o If abaixo:
            if (isSectionVisible) //se retornar true executa o comando abaixo
              section.classList.add('ativo')
            else
              section.classList.remove('ativo')   
       })
     }
     animaScroll()
     window.addEventListener('scroll',animaScroll)
    }
 
 }
 initAnimacaoScroll()


//quando mouse passar
function handleMouseEnter(){
    //adicionando uma classe
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`; //pegando id classe e juntando com hovered

}

//fazer classe voltar ao normal
function handleMouseLeave(){
    this.classList.remove('s-card--hovered');
    document.body.id = ''; // quando tirar o mouse
}

//adicionar evento aos cards
function addEventListenersToCards(){
    //pegar todos elementos da class s-card
    const cardElements = document.getElementsByClassName('s-card');
    
    //loop para fazer classe automatico para cada elemento
    for(let index = 0; index < cardElements.length; index++){
        const card = cardElements[index]; //pegando o index
        card.addEventListener('mouseenter', handleMouseEnter); //chamando a função de adicionar quando passar o mouse
        card.addEventListener('mouseleave', handleMouseLeave); //chamdno a função remover quando tirar o mouse
    }

}

//SO ATIVAR A FUNÇÃO ELEMENTO DEPOIS QUE PAGINA CARREGAR 
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);
//quando passar mouse sobre card add nova classe



//crinaod função de efeito 3d para rodar os card
function selectCarouselItem(selectedButtonElement){
    const selectedItem = selectedButtonElement.id; //pegando id do elemento
    const carousel = document.querySelector('.s-card-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i); //pegando rotateY 
    const rotateYDeg = -120 * (Number(selectedItem) - 1); // 360 / 3 cads -120 centido horario vesez valor da id
    const newTrabsform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`); //replace susbitituir
   
    //agora fazendo a troca real
    carousel.style.transform = newTrabsform;

    //alterar style do botao 01 02 03 tambem
    const activeButtonElement = document.querySelector('.s-controller__button--active');
    activeButtonElement.classList.remove('s-controller__button--active'); // removendo classe
    selectedButtonElement.classList.add('s-controller__button--active'); // adicionar no botao ativo

    
}
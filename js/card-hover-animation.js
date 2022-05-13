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
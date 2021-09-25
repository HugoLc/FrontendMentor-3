import InfoCard from '../js/info-card.js'


const infoCardParagrafo = `
    Página criada atendendo as especificações do desafio proposto 
    no site Frontend Mentor. Praticado a utilização e posicionamento 
    de imagens SVG no background dos elementos.
`
var infoCard = new InfoCard(infoCardParagrafo);

document.addEventListener('click', () => {
    if(infoCard) {infoCard.excluirInfoCard();}
    infoCard = null;    
});
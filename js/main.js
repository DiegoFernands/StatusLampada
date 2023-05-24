const btnOn = document.getElementById('on');
const btnOff = document.getElementById('off');

const luzAcesa = '/img/acesa.png';
const luzApagada = 'img/apagada.png';

btnOn.addEventListener('click', () => {
    document.getElementById('luz-apagada').src = luzAcesa;
});
    
btnOff.addEventListener('click', () => {
    document.getElementById('luz-apagada').src = luzApagada;
});

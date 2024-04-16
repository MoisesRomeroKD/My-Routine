const btnMenu = document.querySelector('#hamburger');
const menuPanel = document.querySelector('#menu-list');

btnMenu.addEventListener('click', function menu() {
    if (menuPanel.classList.contains('hide')) {
        menuPanel.classList.add('show');
        menuPanel.classList.remove('hide');
    } else {
        menuPanel.classList.remove('show');
        menuPanel.classList.add('hide');
        subMenuTrain.classList.add('hide');
        subMenuTrain.classList.remove('show');
    }
});

/***************************************************************************************** */

const heightShow = document.querySelector('#height');
const weightShow = document.querySelector('#weight');
const imcShow = document.querySelector('#imc');
const weightIdealShow = document.querySelector('#weight-ideal');
const porcentIdealShow = document.querySelector('#porcent-ideal');

const height = 1.8;
const weight = 70;
var imc = 0;
const porcentIdeal = 15;
var weightIdeal = 0;
var protein = 0;
var carbohidrate = 0;
var grass = 0;
var calories = 0;

heightShow.innerHTML = height + 'm';
weightShow.innerHTML = weight + 'kg';
imc = weight / (height ^ 2);
imcShow.innerHTML = imc.toFixed(2) + '% aprox';
porcentIdealShow.innerHTML = porcentIdeal + '%';
weightIdeal = weight - ((porcentIdeal * weight) / 100);
weightIdealShow.innerHTML = weightIdeal.toFixed(2) + 'kg';


const trainingBtn = document.querySelector('#training-btn');
const subMenuTrain = document.querySelector('#sub-menu-train');

trainingBtn.addEventListener('click', function () {
    if (subMenuTrain.classList.contains('hide')) {
        subMenuTrain.classList.remove('hide');
        subMenuTrain.classList.add('show')
    } else {
        subMenuTrain.classList.add('hide');
        subMenuTrain.classList.remove('show');
    }
});

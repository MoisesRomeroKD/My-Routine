const btnMenu = document.querySelector('#hamburger');
const menuPanel = document.querySelector('#menu-list');
/***************************************************************************************** */

btnMenu.addEventListener('click', function menu() {
    if (menuPanel.classList.contains('hide')) {
        menuPanel.classList.add('show');
        menuPanel.classList.remove('hide');
    } else {
        menuPanel.classList.remove('show');
        menuPanel.classList.add('hide');
    }
});

/****************************************************************** */3

const logOutLink = document.querySelector("#logout-link");

logOutLink.addEventListener("click", async function () {
    try {
        await axios.get('/api/logout');
        window.location.pathname = '/login/';
    } catch (error) {
        console.log(error);
    }
});

/************************************************************* */
const btnTraining = document.querySelector('#training-btn');
const subMenuTraining = document.querySelector('#sub-menu-train');

btnTraining.addEventListener('click', function menu() {
    if (subMenuTraining.classList.contains('hide')) {
        subMenuTraining.classList.add('show');
        subMenuTraining.classList.remove('hide');
    } else {
        subMenuTraining.classList.remove('show');
        subMenuTraining.classList.add('hide');
    }
});

/************************************************* */
const btnTrain = document.querySelector('#btn-train');
const menuContain = document.querySelector('#menu-contain');
const pageMenu = document.querySelector('#page-menu');
const arrowUp = document.querySelector('#arrow-up');
const arrowDown = document.querySelector('#arrow-down');

btnTrain.addEventListener('click', function () {
    if (menuContain.classList.contains('hide-menu')) {
        /*** */
        menuContain.classList.remove('hide-menu');
        menuContain.classList.add('show-menu');
        /*** */
        pageMenu.classList.remove('hide');
        pageMenu.classList.add('show');
        /***************** */
        arrowDown.classList.remove('show');
        arrowDown.classList.add('hide');
        /****** */
        arrowUp.classList.remove('hide');
        arrowUp.classList.add('show');
    } else {
        /*** */
        menuContain.classList.remove('show-menu');
        menuContain.classList.add('hide-menu');
        /*** */
        pageMenu.classList.remove('show');
        pageMenu.classList.add('hide');
        /************* */
        arrowUp.classList.remove('show');
        arrowUp.classList.add('hide');
        /****** */
        arrowDown.classList.remove('hide');
        arrowDown.classList.add('show');
    }
})

/************************************************ */
const trainOne = document.querySelector('#train-one');
const trainTwo = document.querySelector('#train-two');
const trainThree = document.querySelector('#train-three');
const trainFour = document.querySelector('#train-four');
const trainFive = document.querySelector('#train-five');
/*********** */
const main = document.querySelector('main');
/*********** */
const monday = document.querySelector('#monday');
const tuesday = document.querySelector('#tuesday');
const wednesday = document.querySelector('#wednesday');
const thursday = document.querySelector('#thursday');
const friday = document.querySelector('#friday');

trainOne.addEventListener('click', function () {
    monday.classList.add('show');
    monday.classList.remove('hide');
    /**** */
    tuesday.classList.add('hide');
    tuesday.classList.remove('show');
    /**** */
    wednesday.classList.add('hide');
    wednesday.classList.remove('show');
    /**** */
    thursday.classList.add('hide');
    thursday.classList.remove('show');
    /*** */
    friday.classList.add('hide');
    friday.classList.remove('show');
});

trainTwo.addEventListener('click', function () {
    monday.classList.add('hide');
    monday.classList.remove('show');
    /**** */
    tuesday.classList.add('show');
    tuesday.classList.remove('hide');
    /**** */
    wednesday.classList.add('hide');
    wednesday.classList.remove('show');
    /**** */
    thursday.classList.add('hide');
    thursday.classList.remove('show');
    /*** */
    friday.classList.add('hide');
    friday.classList.remove('show');
});

trainThree.addEventListener('click', function () {
    monday.classList.add('hide');
    monday.classList.remove('show');
    /**** */
    tuesday.classList.add('hide');
    tuesday.classList.remove('show');
    /**** */
    wednesday.classList.add('show');
    wednesday.classList.remove('hide');
    /**** */
    thursday.classList.add('hide');
    thursday.classList.remove('show');
    /*** */
    friday.classList.add('hide');
    friday.classList.remove('show');
});

trainFour.addEventListener('click', function () {
    monday.classList.add('hide');
    monday.classList.remove('show');
    /**** */
    tuesday.classList.add('hide');
    tuesday.classList.remove('show');
    /**** */
    wednesday.classList.add('hide');
    wednesday.classList.remove('show');
    /**** */
    thursday.classList.add('show');
    thursday.classList.remove('hide');
    /*** */
    friday.classList.add('hide');
    friday.classList.remove('show');
});

trainFive.addEventListener('click', function () {
    monday.classList.add('hide');
    monday.classList.remove('show');
    /**** */
    tuesday.classList.add('hide');
    tuesday.classList.remove('show');
    /**** */
    wednesday.classList.add('hide');
    wednesday.classList.remove('show');
    /**** */
    thursday.classList.add('hide');
    thursday.classList.remove('show');
    /*** */
    friday.classList.add('show');
    friday.classList.remove('hide');
});

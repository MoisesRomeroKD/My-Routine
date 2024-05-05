const btnMenu = document.querySelector('#hamburger');
const menuPanel = document.querySelector('#menu-list');
const numSet = document.querySelector('#num-set');
/** */
const btnMach = document.querySelector('#btn-mach');
const btnNoMach = document.querySelector('#btn-nomach');
btnNoMach.classList.add('active');
/** */
const machine = document.querySelector('#machine');
const noMachine = document.querySelector('#no-machine');
/** biseries en maquina */
const machOne = document.querySelector('#mach-one');
const machTwo = document.querySelector('#mach-two');
const machThree = document.querySelector('#mach-three');
const machFour = document.querySelector('#mach-four');
const machFive = document.querySelector('#mach-five');
/** biseries sin maquina */
const noMachOne = document.querySelector('#nomach-one');
const noMachTwo = document.querySelector('#nomach-two');
const noMachThree = document.querySelector('#nomach-three');
const noMachFour = document.querySelector('#nomach-four');
const noMachFive = document.querySelector('#nomach-five');
/** */
const btnBackNoMach = document.querySelector('#btn-back-nomach');
const btnNextNoMach = document.querySelector('#btn-next-nomach');
/** */
const btnBackMach = document.querySelector('#btn-back-mach');
const btnNextMach = document.querySelector('#btn-next-mach');
/** */
var i = 1;
numSet.innerHTML = i;
/** */
const btnComplete = document.querySelector('#btn-complete-contain');
/***************************************************************************************** */

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
/************************************************************************* */

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
/** */
btnMach.addEventListener('click', function () {
    /** */
    btnMach.classList.add('active');
    btnNoMach.classList.remove('active');
    if (machine.classList.contains('hide')) {
        /** */
        machine.classList.add('show');
        machine.classList.remove('hide');
        /** */
        noMachine.classList.add('hide');
        noMachine.classList.remove('show');
        /** */
        i = 1;
        numSet.innerHTML = i;
        if (i === 1) {
            /**numero de la biserie */
            numSet.innerHTML = i;
            /** */
            btnBackMach.classList.add('hide');
            btnBackMach.classList.remove('show');
            /** */
            btnNextMach.classList.add('show');
            btnNextMach.classList.remove('hide');
            /** */
            machOne.classList.add('show');
            /*** */
            machTwo.classList.add('hide');
            machThree.classList.add('hide');
            machFour.classList.add('hide');
            machFive.classList.add('hide');
            /*** */
            machTwo.classList.remove('show');
            machThree.classList.remove('show');
            machFour.classList.remove('show');
            machFive.classList.remove('show');
        }
    }
});

btnNoMach.addEventListener('click', function () {
    /** */
    btnNoMach.classList.add('active');
    btnMach.classList.remove('active');
    if (noMachine.classList.contains('hide')) {
        /** */
        noMachine.classList.add('show');
        noMachine.classList.remove('hide');
        /** */
        machine.classList.add('hide');
        machine.classList.remove('show');
        /** */
        i = 1;
        numSet.innerHTML = i;
        if (i === 1) {
            /**numero de la biserie */
            numSet.innerHTML = i;
            /** */
            btnBackNoMach.classList.add('hide');
            btnBackNoMach.classList.remove('show');
            /** */
            btnNextNoMach.classList.add('show');
            btnNextNoMach.classList.remove('hide');
            /*** */
            noMachOne.classList.add('show');
            /*** */
            noMachTwo.classList.add('hide');
            noMachThree.classList.add('hide');
            noMachFour.classList.add('hide');
            noMachFive.classList.add('hide');
            /*** */
            noMachTwo.classList.remove('show');
            noMachThree.classList.remove('show');
            noMachFour.classList.remove('show');
            noMachFive.classList.remove('show');
        }
    }
});

/** */
btnNextNoMach.addEventListener('click', function () {
    i++;
    if (i === 2) {
        /**numero de la biserie */
        numSet.innerHTML = i;
        /** */
        noMachOne.classList.remove('show');
        noMachOne.classList.add('hide');
        /** */
        noMachTwo.classList.remove('hide');
        noMachTwo.classList.add('show');
        /** */
        btnBackNoMach.classList.add('show');
        btnBackNoMach.classList.remove('hide');
    }
    if (i === 3) {
        /**numero de la biserie */
        numSet.innerHTML = i;
        /** */
        noMachTwo.classList.remove('show');
        noMachTwo.classList.add('hide');

        noMachThree.classList.remove('hide');
        noMachThree.classList.add('show');

    }
    if (i === 4) {
        /**numero de la biserie */
        numSet.innerHTML = i;
        /** */
        noMachThree.classList.remove('show');
        noMachThree.classList.add('hide');
        /** */
        noMachFour.classList.remove('hide');
        noMachFour.classList.add('show');
    }
    if (i === 5) {
        /**numero de la biserie */
        numSet.innerHTML = i;
        /** */
        noMachFour.classList.remove('show');
        noMachFour.classList.add('hide');
        /** */
        noMachFive.classList.remove('hide');
        noMachFive.classList.add('show');
        /** */
        btnNextNoMach.classList.add('hide');
        btnNextNoMach.classList.remove('show');

    }
});

btnBackNoMach.addEventListener('click', function () {
    i--;
    if (i === 1) {
        /**numero de la biserie */
        numSet.innerHTML = i;
        /** */
        noMachTwo.classList.remove('show');
        noMachTwo.classList.add('hide');
        /** */
        noMachOne.classList.remove('hide');
        noMachOne.classList.add('show');
        /** */
        btnBackNoMach.classList.add('hide');
        btnBackNoMach.classList.remove('show');
    }
    if (i === 2) {
        /**numero de la biserie */
        numSet.innerHTML = i;
        /** */
        noMachThree.classList.remove('show');
        noMachThree.classList.add('hide');
        /** */
        noMachTwo.classList.remove('hide');
        noMachTwo.classList.add('show');
    }
    if (i === 3) {
        /**numero de la biserie */
        numSet.innerHTML = i;
        /** */
        noMachFour.classList.remove('show');
        noMachFour.classList.add('hide');
        /** */
        noMachThree.classList.remove('hide');
        noMachThree.classList.add('show');
    }
    if (i === 4) {
        /**numero de la biserie */
        numSet.innerHTML = i;
        /** */
        noMachFive.classList.remove('show');
        noMachFive.classList.add('hide');
        /** */
        noMachFour.classList.remove('hide');
        noMachFour.classList.add('show');
        /** */
        btnNextNoMach.classList.add('show');
        btnNextNoMach.classList.remove('hide');
    }
});

btnNextMach.addEventListener('click', function () {
    i++;
    if (i === 2) {
        /**numero de la biserie */
        numSet.innerHTML = i;
        /** */
        machOne.classList.remove('show');
        machOne.classList.add('hide');
        /** */
        machTwo.classList.remove('hide');
        machTwo.classList.add('show');
        /** */
        btnBackMach.classList.add('show');
        btnBackMach.classList.remove('hide');
    }
    if (i === 3) {
        /**numero de la biserie */
        numSet.innerHTML = i;
        /** */
        machTwo.classList.remove('show');
        machTwo.classList.add('hide');
        /** */
        machThree.classList.remove('hide');
        machThree.classList.add('show');
    }
    if (i === 4) {
        /**numero de la biserie */
        numSet.innerHTML = i;
        /** */
        machThree.classList.remove('show');
        machThree.classList.add('hide');
        /** */
        machFour.classList.remove('hide');
        machFour.classList.add('show');
    }
    if (i === 5) {
        /**numero de la biserie */
        numSet.innerHTML = i;
        /** */
        machFour.classList.remove('show');
        machFour.classList.add('hide');
        /** */
        machFive.classList.remove('hide');
        machFive.classList.add('show');
        /** */
        btnNextMach.classList.add('hide');
        btnNextMach.classList.remove('show');
    }
});

btnBackMach.addEventListener('click', function () {
    i--;
    if (i === 1) {
        /**numero de la biserie */
        numSet.innerHTML = i;
        /** */
        machTwo.classList.remove('show');
        machTwo.classList.add('hide');
        /** */
        machOne.classList.remove('hide');
        machOne.classList.add('show');
        /** */
        btnBackMach.classList.add('hide');
        btnBackMach.classList.remove('show');
    }
    if (i === 2) {
        /**numero de la biserie */
        numSet.innerHTML = i;
        /** */
        machThree.classList.remove('show');
        machThree.classList.add('hide');
        /** */
        machTwo.classList.remove('hide');
        machTwo.classList.add('show');
    }
    if (i === 3) {
        /**numero de la biserie */
        numSet.innerHTML = i;
        /** */
        machFour.classList.remove('show');
        machFour.classList.add('hide');
        /** */
        machThree.classList.remove('hide');
        machThree.classList.add('show');
    }
    if (i === 4) {
        /**numero de la biserie */
        numSet.innerHTML = i;
        /** */
        machFive.classList.remove('show');
        machFive.classList.add('hide');
        /** */
        machFour.classList.remove('hide');
        machFour.classList.add('show');
        /** */
        btnNextMach.classList.add('show');
        btnNextMach.classList.remove('hide');
    }
});

/******************************************** */

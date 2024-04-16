/*** */
const btnJoin = document.querySelector('#btn-joinus');

const btnBackBasic = document.querySelector('#btn-back-basic');
const btnNextBasic = document.querySelector('#btn-next-basic');

const basicOne = document.querySelector('#basic-one');
const basicTwo = document.querySelector('#basic-two');
const basicThree = document.querySelector('#basic-three');
const basicFour = document.querySelector('#basic-four');
const basicFive = document.querySelector('#basic-five');


var i = 0;

setInterval(() => {
    i++;
    if (i === 1) {
        /*** */
        basicOne.classList.add('show');
        basicOne.classList.remove('hide');
        /** */
        basicFive.classList.add('hide');
        basicFive.classList.remove('show');
    }
    if (i === 2) {
        /** */
        basicTwo.classList.add('show');
        basicTwo.classList.remove('hide');
        /** */
        basicOne.classList.add('hide');
        basicOne.classList.remove('show');
    }
    if (i === 3) {
        /** */
        basicThree.classList.add('show');
        basicThree.classList.remove('hide');
        /** */
        basicTwo.classList.add('hide');
        basicTwo.classList.remove('show');
    }
    if (i === 4) {
        /** */
        basicFour.classList.add('show');
        basicFour.classList.remove('hide');
        /** */
        basicThree.classList.add('hide');
        basicThree.classList.remove('show');
    }
    if (i === 5) {
        /** */
        basicFive.classList.add('show');
        basicFive.classList.remove('hide');
        /** */
        basicFour.classList.add('hide');
        basicFour.classList.remove('show');
        i = 0;
    }
}, 3000);

const btnJoinUs = document.querySelector('#btn-joinus');

btnJoin.addEventListener('click', () => {
    location.href = '/register';
});
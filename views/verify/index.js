//div
const right = document.querySelector('#right-veri');
const wrong = document.querySelector('#wrong-veri');
//p
const wrongP = document.querySelector('#wrong');

(async () => {
    try {
        const id = window.location.pathname.split('/')[2];
        const token = window.location.pathname.split('/')[3];
        const { data } = await axios.patch(`/api/users/${id}/${token}`);
        right.classList.add('show');
        right.classList.remove('hide');
        setTimeout(function () {
            window.location.pathname = '/login/';
        }, 3000);
    } catch (error) {
        wrong.classList.add('show');
        wrong.classList.remove('hide');
        wrongP.innerHTML = error.response.data.error;
    }
})();

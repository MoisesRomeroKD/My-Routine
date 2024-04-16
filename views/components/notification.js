/*** */
const body = document.querySelector('body');

export const createNotification = (isError, message) => {
  const div = document.createElement('div');
  div.setAttribute('id', 'noti-contain');
  if (isError) {
    /*** */
    div.classList.add('red-bg');
    div.classList.remove('green-bg');
    /*** */
    div.innerHTML = `
    <div id="close-contain">
      <a id="close-btn" >
        <ion-icon name="close-circle-outline"></ion-icon>
      </a>
    </div>
    <div id="noti-end">
      <p id="notification">${message}</p>
    </div>
    `;

    /*** */
    setTimeout(() => {
      body.removeChild(div);
    }, 10000);
  } else {
    /*** */
    div.classList.add('green-bg');
    div.classList.remove('red-bg');
    /*** */
    div.innerHTML = `
    <div id="close-contain">
      <a id="close-btn" >
        <ion-icon name="close-circle-outline"></ion-icon>
      </a>
    </div>
    <div id="noti-end">
      <p id="notification">${message}</p>
    </div>
    `;

  }

  body.appendChild(div);

  /*** */

  div.children[0].children[0].addEventListener('click', function () {
    body.removeChild(div);
  });

}

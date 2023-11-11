window.addEventListener('DOMContentLoaded', () => {
  const loginPopupEl = document.querySelector('.popup--login');
  const registerPopupEl = document.querySelector('.popup--register');
  const toggleAuthPopupBtnEl = document.querySelector('#toggle-auth-popup');
  const toggleRegisterPopupBtnEl = document.querySelector(
    '#toggle-register-popup'
  );
  const popupCloseBtnEls = document.querySelectorAll('.popup__close');

  const makeActive = (el, classname) => el.classList.add(classname);
  const makeInactive = (el, classname) => el.classList.remove(classname);

  toggleAuthPopupBtnEl.addEventListener('click', () => {
    makeInactive(registerPopupEl, 'active');
    makeActive(loginPopupEl, 'active');
  });

  popupCloseBtnEls.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      makeInactive(registerPopupEl, 'active');
      makeInactive(loginPopupEl, 'active');
    });
  });
  toggleRegisterPopupBtnEl.addEventListener('click', () => {
    makeActive(registerPopupEl, 'active');
    makeInactive(loginPopupEl, 'active');
  });
});

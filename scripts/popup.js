window.addEventListener('DOMContentLoaded', () => {
  const loginPopupEl = document.querySelector('.popup--login');
  const registerPopupEl = document.querySelector('.popup--register');
  const toggleAuthPopupBtnEl = document.querySelector('#toggle-auth-popup');
  const toggleRegisterPopupBtnEl = document.querySelector(
    '#toggle-register-popup'
  );

  const makeActive = (el, classname) => el.classList.add(classname);
  const makeInactive = (el, classname) => el.classList.remove(classname);

  toggleAuthPopupBtnEl.addEventListener('click', () => {
    makeInactive(registerPopupEl, 'active');
    makeActive(loginPopupEl, 'active');
  });
  toggleRegisterPopupBtnEl.addEventListener('click', () => {
    makeActive(registerPopupEl, 'active');
    makeInactive(loginPopupEl, 'active');
  });
});

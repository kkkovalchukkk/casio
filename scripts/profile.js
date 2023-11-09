window.addEventListener('DOMContentLoaded', () => {
  const profileEl = document.querySelector('#toggle-main-popup');
  const mainPopupEl = document.querySelector('.popup--window');
  const closeBtnEl = mainPopupEl.querySelector('.popup__close-btn');

  profileEl.addEventListener('click', () =>
    mainPopupEl.classList.add('active')
  );
  closeBtnEl.addEventListener('click', () =>
    mainPopupEl.classList.remove('active')
  );
});

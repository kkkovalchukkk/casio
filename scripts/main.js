window.addEventListener('DOMContentLoaded', () => {
  const addClass = (el, className) => el.classList.add(className);
  const removeClass = (el, className) => el.classList.remove(className);

  const profileEl = document.querySelector('#toggle-main-popup');
  const mainPopupEl = document.querySelector('.popup--window');
  const closeBtnEl = mainPopupEl.querySelector('.popup__close-btn');

  const toggleBurgerMenuBtnEl = document.querySelector('.burger-btn');
  const burgerMenuEl = document.querySelector('.burger-menu');
  const closeBurgerMenuBtnEl = burgerMenuEl.querySelector(
    '.burger-menu__close-btn'
  );

  const tabEls = document.querySelectorAll('.tab');
  const pageEls = document.querySelectorAll('.window__page');

  const burgerNavBtnEls = document.querySelectorAll('.burger-menu__nav-btn');

  const offScroll = () => document.body.classList.add('no-scroll');
  const onScroll = () => document.body.classList.remove('no-scroll');

  toggleBurgerMenuBtnEl.addEventListener('click', () => {
    burgerMenuEl.classList.add('burger-menu--active');
    offScroll();
  });

  closeBurgerMenuBtnEl.addEventListener('click', () => {
    burgerMenuEl.classList.remove('burger-menu--active');
    onScroll();
  });

  burgerNavBtnEls.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      burgerMenuEl.classList.remove('burger-menu--active');
      onScroll();
      tabEls.forEach((t) => removeClass(t, 'tab--active'));
      pageEls.forEach((p) => removeClass(p, 'window__page--active'));

      addClass(tabEls[idx], 'tab--active');
      addClass(pageEls[idx], 'window__page--active');
      mainPopupEl.classList.add('active');
    });
  });

  profileEl.addEventListener('click', () =>
    mainPopupEl.classList.add('active')
  );
  closeBtnEl.addEventListener('click', () =>
    mainPopupEl.classList.remove('active')
  );

  tabEls.forEach((t, i) => {
    t.addEventListener('click', () => {
      tabEls.forEach((t) => removeClass(t, 'tab--active'));
      pageEls.forEach((p) => removeClass(p, 'window__page--active'));
      addClass(t, 'tab--active');
      addClass(pageEls[i], 'window__page--active');
    });
  });
});

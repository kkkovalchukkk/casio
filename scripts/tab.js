window.addEventListener('DOMContentLoaded', () => {
  const addClass = (el, className) => el.classList.add(className);
  const removeClass = (el, className) => el.classList.remove(className);

  const tabEls = document.querySelectorAll('.tab');
  const pageEls = document.querySelectorAll('.window__page');

  tabEls.forEach((t, i) => {
    t.addEventListener('click', () => {
      tabEls.forEach((t) => removeClass(t, 'tab--active'));
      pageEls.forEach((p) => removeClass(p, 'window__page--active'));
      addClass(t, 'tab--active');
      addClass(pageEls[i], 'window__page--active');
    });
  });
});

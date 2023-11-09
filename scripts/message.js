window.addEventListener('DOMContentLoaded', () => {
  const messageEl = document.querySelector('.message-box');
  const messageCloseBtnEl = messageEl.querySelector('.message-box__close-btn');

  messageCloseBtnEl.addEventListener('click', () => {
    messageEl.classList.add('message-box--hidden');
  });
  messageEl.classList.remove('message-box--fade');
});

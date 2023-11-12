window.addEventListener('DOMContentLoaded', () => {
  let currentScale = 100;

  let isDragging = false;
  let startX, startY, initialX, initialY;

  const mapViewerEl = document.querySelector('.map-viewer');
  const mapViewerContentEl = mapViewerEl.querySelector('.map-viewer__content');
  const mapViewerSlideEls = mapViewerEl.querySelectorAll(
    '.map-viewer__content-item'
  );
  const mapViewerConrolsEl = document.querySelector('.map-viewer__controls');
  const mapViewerPlusScaleBtnEl =
    mapViewerConrolsEl.querySelector('#plus-scale-btn');
  const mapViewerMinusScaleBtnEl = document.querySelector('#minus-scale-btn');
  const mapViewerFullScreenScaleBtnEl = document.querySelector(
    '#fullscreen-scale-btn'
  );
  const mapViewerHintEls = mapViewerEl.querySelectorAll('.hint');

  mapViewerPlusScaleBtnEl.addEventListener('click', () => {
    if (currentScale === 160) return;
    currentScale += 10;
    mapViewerContentEl.style.transform = `scale(${currentScale}%)`;
  });
  mapViewerMinusScaleBtnEl.addEventListener('click', () => {
    if (currentScale === 100) return;
    currentScale -= 10;
    mapViewerContentEl.style.transform = `scale(${currentScale}%)`;
  });

  function startDrag(e) {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialX = mapViewerContentEl.offsetLeft;
    initialY = mapViewerContentEl.offsetTop;

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
  }

  function drag(e) {
    if (isDragging) {
      let deltaX = e.clientX - startX;
      let deltaY = e.clientY - startY;

      mapViewerContentEl.style.left = initialX + deltaX + 'px';
      mapViewerContentEl.style.top = initialY + deltaY + 'px';
    }
  }

  function stopDrag() {
    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
  }

  mapViewerContentEl
    .querySelectorAll('img')
    .forEach((img) =>
      img.addEventListener('mousedown', (e) => e.preventDefault())
    );

  mapViewerHintEls.forEach((h) => {
    h.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    h.addEventListener('mousedown', (e) => {
      e.stopPropagation();
    });
  });

  mapViewerContentEl.addEventListener('mousedown', startDrag);
});

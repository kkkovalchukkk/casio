window.addEventListener('DOMContentLoaded', () => {
  const mapViewerEl = document.querySelector('.map-viewer');
  const mapViewerContentEl = mapViewerEl.querySelector('.map-viewer__content');
  const mapViewerHomeSlideEl = mapViewerEl.querySelector('#home-map');
  const mapViewerCloseBtnEl = mapViewerEl.querySelector(
    '.map-viewer__close-btn'
  );
  const mapViewerOpenBtnEls = document.querySelectorAll('.map__name');
  const mapViewerConrolsEl = document.querySelector('.map-viewer__controls');
  const mapViewerPlusScaleBtnEl =
    mapViewerConrolsEl.querySelector('#plus-scale-btn');
  const mapViewerMinusScaleBtnEl = document.querySelector('#minus-scale-btn');
  const mapViewerFullScreenScaleBtnEl = document.querySelector(
    '#fullscreen-scale-btn'
  );
  const mapViewerHintEls = mapViewerEl.querySelectorAll('.hint');
  const mapViewerInsideLocationEls = mapViewerEl.querySelectorAll(
    '.map-viewer__location'
  );
  const mapViewerMenuEl = mapViewerEl.querySelector('.map-viewer__menu');
  const mapViewerGoBackBtnEl = mapViewerMenuEl.querySelector(
    '.map-viewer__go-back-btn'
  );
  const mapViewerCurrentLocationEl = mapViewerMenuEl.querySelector(
    '.map-viewer__current-location'
  );

  let currentScale = 100;
  let isDragging = false;
  let startX, startY, initialX, initialY;
  let hintTouched = false;

  const startDrag = (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;

    if (e.changedTouches && e.changedTouches.length) {
      startX = e.changedTouches[0].clientX;
      startY = e.changedTouches[0].clientY;
    }
    initialX = mapViewerContentEl.offsetLeft;
    initialY = mapViewerContentEl.offsetTop;

    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag);
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);
  };

  const drag = (e) => {
    if (isDragging) {
      let deltaX = e.clientX - startX;
      let deltaY = e.clientY - startY;

      if (e.changedTouches && e.changedTouches.length) {
        deltaX = e.changedTouches[0].clientX - startX;
        deltaY = e.changedTouches[0].clientY - startY;
      }

      mapViewerContentEl.style.left = initialX + deltaX + 'px';
      mapViewerContentEl.style.top = initialY + deltaY + 'px';
    }
  };

  const stopDrag = () => {
    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
  };

  mapViewerContentEl
    .querySelectorAll('img')
    .forEach((img) =>
      img.addEventListener('mousedown', (e) => e.preventDefault())
    );

  mapViewerHintEls.forEach((h, idx) => {
    h.addEventListener('click', (e) => {
      e.stopPropagation();

      if (e.pointerType === 'touch' && !hintTouched) {
        hintTouched = true;
        return;
      }
      currentScale = 100;
      mapViewerHomeSlideEl.classList.remove('map-viewer__content-item--active');
      mapViewerInsideLocationEls[idx].classList.add(
        'map-viewer__content-item--active'
      );
      mapViewerContentEl.style.left = 0 + 'px';
      mapViewerContentEl.style.top = 0 + 'px';
      mapViewerContentEl.style.transform = `scale(${currentScale}%)`;
      mapViewerMenuEl.classList.add('map-viewer__menu--active');
      mapViewerCurrentLocationEl.textContent = idx + 1 + ' палуба';
      hintTouched = false;
    });

    h.addEventListener('touch', () => {
      e.preventDefault();
    });

    h.addEventListener('mousedown', (e) => {
      e.stopPropagation();
    });
  });

  mapViewerOpenBtnEls.forEach((btn) =>
    btn.addEventListener('click', () => {
      mapViewerEl.classList.add('map-viewer--active');
    })
  );

  mapViewerCloseBtnEl.addEventListener('click', () => {
    currentScale = 100;
    mapViewerEl.classList.remove('map-viewer--active');
    mapViewerContentEl.style.left = 0 + 'px';
    mapViewerContentEl.style.top = 0 + 'px';
    mapViewerContentEl.style.transform = `scale(${currentScale}%)`;
    mapViewerInsideLocationEls.forEach((loc) =>
      loc.classList.remove('map-viewer__content-item--active')
    );
    mapViewerHomeSlideEl.classList.add('map-viewer__content-item--active');
    mapViewerEl.classList.remove('map-viewer--fullscreen');
  });

  mapViewerPlusScaleBtnEl.addEventListener('click', () => {
    if (currentScale === 160) return;
    currentScale += 20;
    mapViewerContentEl.style.transform = `scale(${currentScale}%)`;
  });
  mapViewerMinusScaleBtnEl.addEventListener('click', () => {
    if (currentScale === 40) return;
    currentScale -= 20;
    mapViewerContentEl.style.transform = `scale(${currentScale}%)`;
  });

  mapViewerGoBackBtnEl.addEventListener('click', () => {
    currentScale = 100;
    mapViewerMenuEl.classList.remove('map-viewer__menu--active');
    mapViewerInsideLocationEls.forEach((loc) =>
      loc.classList.remove('map-viewer__content-item--active')
    );
    mapViewerHomeSlideEl.classList.add('map-viewer__content-item--active');
    mapViewerContentEl.style.left = 0 + 'px';
    mapViewerContentEl.style.top = 0 + 'px';
    mapViewerContentEl.style.transform = `scale(${currentScale}%)`;
  });

  mapViewerFullScreenScaleBtnEl.addEventListener('click', () => {
    currentScale = 100;
    mapViewerEl.classList.toggle('map-viewer--fullscreen');
    mapViewerContentEl.style.left = 0 + 'px';
    mapViewerContentEl.style.top = 0 + 'px';
    mapViewerContentEl.style.transform = `scale(${currentScale}%)`;
  });

  mapViewerContentEl.addEventListener('mousedown', startDrag);
  mapViewerContentEl.addEventListener('touchstart', startDrag);
});

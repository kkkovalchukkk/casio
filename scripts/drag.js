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

  const container = document.getElementById('myPanzoom');

  new Panzoom(container, {
    //
  });

  let hintTouched = false;

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
      mapViewerHomeSlideEl.classList.remove('map-viewer__content-item--active');
      mapViewerInsideLocationEls[idx].classList.add(
        'map-viewer__content-item--active'
      );
      mapViewerMenuEl.classList.add('map-viewer__menu--active');
      mapViewerCurrentLocationEl.textContent = idx + 1 + ' палуба';
      hintTouched = false;
    });

    // h.addEventListener('touch', () => {
    //   e.preventDefault();
    // });

    // h.addEventListener('mousedown', (e) => {
    //   e.stopPropagation();
    // });
  });

  mapViewerOpenBtnEls.forEach((btn) =>
    btn.addEventListener('click', () => {
      mapViewerEl.classList.add('map-viewer--active');
    })
  );

  mapViewerFullScreenScaleBtnEl.addEventListener('click', () => {
    mapViewerEl.classList.toggle('map-viewer--fullscreen');
  });

  mapViewerCloseBtnEl.addEventListener('click', () => {
    mapViewerEl.classList.remove('map-viewer--active');
    mapViewerMenuEl.classList.remove('map-viewer__menu--active');
    mapViewerInsideLocationEls.forEach((loc) =>
      loc.classList.remove('map-viewer__content-item--active')
    );
    mapViewerHomeSlideEl.classList.add('map-viewer__content-item--active');
    mapViewerEl.classList.remove('map-viewer--fullscreen');
  });

  mapViewerGoBackBtnEl.addEventListener('click', () => {
    mapViewerMenuEl.classList.remove('map-viewer__menu--active');
    mapViewerInsideLocationEls.forEach((loc) =>
      loc.classList.remove('map-viewer__content-item--active')
    );
    mapViewerHomeSlideEl.classList.add('map-viewer__content-item--active');
  });
});

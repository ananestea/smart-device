const accordions = document.querySelectorAll('.accordion');
const accordionsToggles = document.querySelectorAll('.accordion__toggle');
const accordionsList = document.querySelectorAll('.accordion__list');

accordions.forEach(function (accordion) {
  const toggle = accordion.querySelector('.accordion__toggle');
  const list = accordion.querySelector('.accordion__list');
  list.classList.remove('accordion__list--no-js');
  toggle.classList.remove('accordion__toggle--no-js');

  toggle.addEventListener('click', function () {
    if (toggle.classList.contains('accordion__toggle--opened')) {
      toggle.classList.remove('accordion__toggle--opened');
    } else {
      accordionsToggles.forEach(function (accordiontoggle) {
        accordiontoggle.classList.remove('accordion__toggle--opened');
      });
      toggle.classList.add('accordion__toggle--opened');
    }
    if (list.classList.contains('accordion__list--opened')) {
      list.classList.remove('accordion__list--opened');
    } else {
      accordionsList.forEach(function (accordionList) {
        accordionList.classList.remove('accordion__list--opened');
      });
      list.classList.add('accordion__list--opened');
    }
  });
});

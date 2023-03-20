const aboutParent = document.querySelector('[data-accordion="parent"]');
const aboutElement = aboutParent.querySelector('[data-accordion="element"]');
const aboutButton = aboutParent.querySelector('[data-accordion="button"]');

const accordionButtonToggler = () => {
  if (!aboutElement.classList.contains('is-active')) {
    aboutButton.textContent = 'свернуть';
  } else {
    aboutButton.textContent = 'подробнее';
  }
};

const initReadMoreButon = () => {
  if (aboutParent && aboutButton && aboutElement) {
    aboutButton.addEventListener('click', accordionButtonToggler);
  }
};

export {initReadMoreButon};

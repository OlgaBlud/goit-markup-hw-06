// subscription

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-open');
//   }
// })();

// modal menu

(() => {
  const refs = {
    openModalBtn: document.querySelector('[menu-modal-open]'),
    closeModalBtn: document.querySelector('[menu-modal-close]'),
    modal: document.querySelector('[menu-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModalMenu);
  refs.closeModalBtn.addEventListener('click', toggleModalMenu);

  function toggleModalMenu() {
    refs.modal.classList.toggle('is-open');
  }
})();

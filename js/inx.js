const modal = document.querySelector('#moreInfo');
const overlay = document.querySelector('.overlay');

overlay.addEventListener('click', (e) => {
    const target = e.target;

    if(target.classList.contains('overlay') && modal.checked === true) {
        modal.checked = false;
    }
});


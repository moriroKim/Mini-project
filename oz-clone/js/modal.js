document.addEventListener("DOMContentLoaded", function() {
    const openModal = document.getElementById('modal-open');
    const modalLogin = document.getElementById('modalLogin');
    const closeModal = document.querySelector('.close-btn');
    const background = document.body;
    const wrapper = document.getElementById('wrap');

    openModal.addEventListener('click', function() {
        modalLogin.style.display = 'flex'
        modalLogin.classList.add('show');
        wrapper.classList.add('modal-blur');
        background.classList.add('lock-scroll')
    });

    closeModal.addEventListener('click', function() {
        modalLogin.classList.add('close');
        setTimeout(() => {
            modalLogin.classList.remove('close');
            modalLogin.classList.remove('show');
            wrapper.classList.remove('modal-blur');
            background.classList.remove('lock-scroll');
            modalLogin.style.display = 'none'
        }, 500); // 애니메이션이 끝난 후에(500ms) 적용되도록 함


    });
    
    // 모달창 드래그하면 display: none;되는 버그 수정
    modalLogin.addEventListener('click', function(event) {
        event.stopPropagation(); 
    });
});

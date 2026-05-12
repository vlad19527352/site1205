document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('modal');
    var modalConfirm = document.getElementById('modalConfirm');
    var modalCancel = document.getElementById('modalCancel');
    var modalClose = document.querySelector('.modal-close');

    function openModal(url) {
        modalConfirm.href = url;
        modal.classList.add('active');
    }

    function closeModal() {
        modal.classList.remove('active');
    }

    document.querySelectorAll('.card-btn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var url = btn.getAttribute('data-url');
            openModal(url);
        });
    });

    modalCancel.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Scroll reveal animation
    var revealElements = document.querySelectorAll('.card, .section-title, .section-desc');
    revealElements.forEach(function (el) { el.classList.add('reveal'); });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(function (el) { observer.observe(el); });
});

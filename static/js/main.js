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

    var galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(function (item) {
        item.addEventListener('click', function () {
            var title = item.querySelector('.gallery-overlay span');
            if (title) {
                var text = title.textContent;
                var msg = document.createElement('div');
                msg.textContent = '\uD83D\uDCF7 ' + text;
                msg.style.cssText =
                    'position:fixed;bottom:30px;left:50%;transform:translateX(-50%);' +
                    'background:#242424;color:#f0b429;padding:14px 28px;border-radius:50px;' +
                    'font-weight:600;z-index:300;box-shadow:0 8px 30px rgba(0,0,0,0.5);' +
                    'border:1px solid rgba(240,180,41,0.2);animation:fadeIn 0.3s ease;';
                document.body.appendChild(msg);
                setTimeout(function () { msg.remove(); }, 2000);
            }
        });
    });
});

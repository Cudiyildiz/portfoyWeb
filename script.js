document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function (event) {
            event.preventDefault();

            const projectId = card.getAttribute('data-id');
            const isBlogPage = window.location.pathname.includes('blog.html');
            
            window.location.href = isBlogPage 
                ? `blog_detay.html?id=${projectId}` 
                : `proje_detay.html?id=${projectId}`;
        });
    });

    // URL'den 'id' parametresini al
    const urlParams = new URLSearchParams(window.location.search);
    const blockId = urlParams.get('id');

    if (blockId) {
        // Tüm detay bölümlerini gizle
        document.querySelectorAll('.project-detail, .block-detail').forEach(detail => {
            detail.classList.add('d-none');
        });

        // Proje veya blog detayını göster
        const projectSection = document.getElementById(`project${blockId}`);
        const blockSection = document.getElementById(`block${blockId}`);

        if (projectSection) {
            projectSection.classList.remove('d-none');
        } else if (blockSection) {
            blockSection.classList.remove('d-none');
        } else {
            console.error('Detay bulunamadı:', blockId);
        }
    }
});

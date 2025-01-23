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
//iletişim
// EmailJS kütüphanesini yükle
(function() {
    emailjs.init("zO6pAXxLx3Bs9J1nQjiVn"); // Private Key'inizi buraya ekleyin
})();

// Form gönderildiğinde çalışacak fonksiyon
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun otomatik gönderilmesini engelle

    // Form verilerini EmailJS ile gönder
    emailjs.sendForm('service_1pp0ete', 'template_mkeiwd8', this) // Service ID ve Template ID'yi buraya ekleyin
        .then(function(response) {
            alert('Mesajınız başarıyla gönderildi!'); // Başarılı mesajı göster
            document.getElementById('contact-form').reset(); // Formu temizle
        }, function(error) {
            alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'); // Hata mesajı göster
        });
});

});



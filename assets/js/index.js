

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const mobileNav = document.getElementById('mobileNav');
    const callbackModal = document.getElementById('callbackModal');
    const openCallbackButtons = document.querySelectorAll('.btn-callback');
    const closeModal = document.querySelector('.modal .close');

    // Управление бургером и мобильным меню
    burger.addEventListener('click', () => {
        const isActive = burger.classList.toggle('active');
        mobileNav.classList.toggle('open', isActive);
    });

    // Закрытие мобильного меню при клике на ссылку
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            mobileNav.classList.remove('open');
        });
    });

    // Открытие модального окна и закрытие меню
    openCallbackButtons.forEach(button => {
        button.addEventListener('click', () => {
            callbackModal.style.display = 'flex';
            burger.classList.remove('active');
            mobileNav.classList.remove('open');
        });
    });

    // Закрытие модального окна по крестику
    closeModal.addEventListener('click', () => {
        callbackModal.style.display = 'none';
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', (e) => {
        if (e.target === callbackModal) {
            callbackModal.style.display = 'none';
        }
    });
});








window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});





document.querySelectorAll('.home-link ').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.site-header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('.about');
    if(aboutSection){
        const onScroll = () => {
            const sectionTop = aboutSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                aboutSection.classList.add('visible');
                window.removeEventListener('scroll', onScroll);
            }
        };

        window.addEventListener('scroll', onScroll);
        onScroll();
    }


});

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    const faqSection = document.querySelector('.faq');
    if(faqSection){
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });

        const onScroll = () => {
            const sectionTop = faqSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                faqSection.classList.add('visible');
                window.removeEventListener('scroll', onScroll);
            }
        };

        window.addEventListener('scroll', onScroll);
        onScroll();
    }



});




document.addEventListener('DOMContentLoaded', () => {
    const cookieBlock = document.getElementById('cookieConsent');
    const acceptButton = document.getElementById('cookieAccept');

    if (!localStorage.getItem('cookieAccepted')) {
        setTimeout(() => {
            cookieBlock.classList.add('visible');
        }, 1000); // Появление через 1 секунду после загрузки страницы
    }

    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookieAccepted', 'true');
        cookieBlock.classList.remove('visible');
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const digitalArtSection = document.querySelector('.digital-art');
    if(digitalArtSection){
        const onScroll = () => {
            const sectionTop = digitalArtSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                digitalArtSection.classList.add('visible');
                window.removeEventListener('scroll', onScroll);
            }
        };

        window.addEventListener('scroll', onScroll);
        onScroll();
    }
   });


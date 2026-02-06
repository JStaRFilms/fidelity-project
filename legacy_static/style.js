document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('#mainNav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
        const isOpen = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    const triggers = nav.querySelectorAll('.nav-trigger');

    function closeAllDropdowns(exceptItem) {
        nav.querySelectorAll('.nav-item.is-open').forEach(function (item) {
            if (exceptItem && item === exceptItem) return;
            item.classList.remove('is-open');
            const t = item.querySelector('.nav-trigger');
            if (t) t.setAttribute('aria-expanded', 'false');
        });
    }

    triggers.forEach(function (trigger) {
        trigger.setAttribute('aria-expanded', 'false');

        trigger.addEventListener('click', function (e) {
            // Only handle clicks on mobile (tablet and below)
            if (window.innerWidth > 768) return;

            e.preventDefault();
            const item = trigger.closest('.nav-item');
            if (!item) return;

            const willOpen = !item.classList.contains('is-open');
            closeAllDropdowns(item);

            item.classList.toggle('is-open', willOpen);
            trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        });
    });

    document.addEventListener('click', function (e) {
        if (window.innerWidth > 768) return;
        if (!nav.classList.contains('is-open')) return;
        if (nav.contains(e.target) || toggle.contains(e.target)) return;
        closeAllDropdowns();
    });

    const subTriggers = nav.querySelectorAll('.dropdown-subtrigger');

    function closeAllSubmenus(exceptItem) {
        nav.querySelectorAll('.dropdown-item--submenu.is-open').forEach(function (item) {
            if (exceptItem && item === exceptItem) return;
            item.classList.remove('is-open');
            const t = item.querySelector('.dropdown-subtrigger');
            if (t) t.setAttribute('aria-expanded', 'false');
        });
    }

    subTriggers.forEach(function (trigger) {
        trigger.setAttribute('aria-expanded', 'false');

        trigger.addEventListener('click', function (e) {
            if (window.innerWidth > 768) return;

            e.preventDefault();
            const item = trigger.closest('.dropdown-item--submenu');
            if (!item) return;

            const willOpen = !item.classList.contains('is-open');
            closeAllSubmenus(item);
            item.classList.toggle('is-open', willOpen);
            trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        });
    });

    // Slideshow functionality
    const slideshowBtns = document.querySelectorAll('.slideshow-btn');
    const slides = document.querySelectorAll('.slide');

    function showSlide(slideIndex) {
        // Hide all slides
        slides.forEach(function (slide) {
            slide.classList.remove('active');
        });

        // Remove active class from all buttons
        slideshowBtns.forEach(function (btn) {
            btn.classList.remove('active');
        });

        // Show selected slide
        const targetSlide = document.querySelector('.slide[data-slide="' + slideIndex + '"]');
        const targetBtn = document.querySelector('.slideshow-btn[data-slide="' + slideIndex + '"]');
        
        if (targetSlide) {
            targetSlide.classList.add('active');
        }
        
        if (targetBtn) {
            targetBtn.classList.add('active');
        }
    }

    // Add click handlers to slideshow buttons
    slideshowBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const slideIndex = btn.getAttribute('data-slide');
            showSlide(slideIndex);
        });
    });
});
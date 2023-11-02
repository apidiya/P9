jQuery(document).ready(function($) {
    $(document).ready(function() {
        $(window).scroll(function() {
            $('.fade-in').each(function() {
                var elementTop = $(this).offset().top;
                var windowHeight = $(window).height();
                var scrollPosition = $(window).scrollTop();

                if (elementTop < scrollPosition + windowHeight) {
                    $(this).addClass('active');
                }
            });
        });
    });
});

module.exports =
    prod:
        options:
            mangle: false

        files:
            'src/assets/js/core.min.js': ['src/assets/libs/js/jquery/*.js', 
                                          'src/assets/libs/js/transition.js',
                                          'src/assets/libs/js/alert.js',
                                          'src/assets/libs/js/button.js',
                                          'src/assets/libs/js/carousel.js',
                                          'src/assets/libs/js/collapse.js',
                                          'src/assets/libs/js/dropdown.js',
                                          'src/assets/libs/js/modal.js',
                                          'src/assets/libs/js/tooltip.js',
                                          'src/assets/libs/js/popover.js',
                                          'src/assets/libs/js/scrollspy.js',
                                          'src/assets/libs/js/tab.js',
                                          'src/assets/libs/js/affix.js',
                                          'src/assets/libs/js/jquery/bigvid/*.js',
                                          'src/assets/libs/js/jquery/tubeplayer/*.js',
                                          'src/assets/js/**/*.js']
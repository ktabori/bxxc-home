module.exports = 
    scripts_dev:
        options:
            startTag: '<!-- scripts start -->'
            endTag:   '<!-- scripts end -->'
            fileTmpl: '<script src="%s"></script>'
            appRoot:  'src'

        files:
            'src/app/views/layouts/_scripts.dust': ['src/assets/libs/js/jquery/*.js', 
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
                                                    'src/assets/libs/js/jquery/tabular/*.js',
                                                    'src/assets/js/**/*.js']

    scripts_prod:
        options:
            startTag: '<!-- scripts start -->'
            endTag:   '<!-- scripts end -->'
            fileTmpl: '<script src="%s"></script>'
            appRoot:  'src'

        files:
            'src/app/views/layouts/_scripts.dust': ['src/assets/js/core.min.js']

    styles_dev:
        options:
            startTag: '<!-- styles start -->'
            endTag:   '<!-- styles end -->'
            fileTmpl: '<link rel="stylesheet" href="%s" />'
            appRoot:  'src'

        files:
            'src/app/views/layouts/_head.dust': ['src/assets/css/**/*.css', 'src/assets/libs/css/**/*.css']

    styles_prod:
        options:
            startTag: '<!-- styles start -->'
            endTag:   '<!-- styles end -->'
            fileTmpl: '<link rel="stylesheet" href="%s" />'
            appRoot:  'src'

        files:
            'src/app/views/layouts/_head.dust': ['src/assets/css/**/*.min.css']

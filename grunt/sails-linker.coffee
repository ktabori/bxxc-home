module.exports = 
    scripts_dev:
        options:
            startTag: '<!-- scripts start -->'
            endTag:   '<!-- scripts end -->'
            fileTmpl: '<script src="%s"></script>'
            appRoot:  'src'

        files:
            'src/app/views/layouts/_scripts.dust': ['src/assets/js/**/*.js', 'src/assets/libs/js/**/*.js']

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

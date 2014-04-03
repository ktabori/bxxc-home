module.exports =
    dev:
        options:
            strictMath: true,
            sourceMap: true
            outputSourceFiles: true
            sourceMapFilename: 'core.css.map'
            sourceMapURL: 'http://localhost:3000/assets/css/core.css.map'

        files:
            'src/assets/css/core.css': ['src/assets/less/core.less']

    prod:
        options:
            cleancss: true,
            report: 'min'
        files:
            'src/assets/css/core.css': ['src/assets/less/core.less']

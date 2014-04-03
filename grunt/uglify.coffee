module.exports =
    prod:
        options:
            mangle: false

        files:
            'src/assets/js/core.min.js': ['src/assets/libs/js/**/*.js']
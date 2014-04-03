module.exports =
    server:
        options:
            bare: true

        files:
            'src/app.js': [
                'src/app/config/config.coffee',
                'src/app/config/cron.coffee',
                'src/app/data.coffee',
                'src/app/app.coffee',
                'src/app/controllers/**/*.coffee',
                'src/app/router.coffee',
                'src/app/views/helpers/**/*.coffee',
                'src/app/config/express.coffee'
            ]

    client:
        options:
            bare: true
            sourceMap: true

        files: [
            {
                expand: true
                cwd: 'src/assets/coffee/'
                src: ['**/*.coffee']
                dest: 'src/assets/js/'
                ext: '.js'
            }
        ]

    client_prod:
        options:
            bare: true

        files:
            'src/assets/js/core.js': ['src/assets/coffee/**/*.coffee']
module.exports = 
    options:
        livereload: true
        spawn: false

    coffee_server:
        files: ['src/app/**/*.coffee']
        tasks: ['coffee:server']

    coffee_client:
        files: ['src/assets/coffee/**/*.coffee']
        tasks: ['coffee:client']

    styles:
        files: ['src/assets/less/**/*.less']
        tasks: ['less']

    views:
        files: ['src/app/views/**/*.dust']
module.exports = (grunt) ->

	config =
    connect:
      server:
        options:
          keepalive: true

    require:
      default:
        options:
          mainConfigFile: 'app/require_config.js'
          out: 'index.js'
          wrap: false
          almond: true

    handlebars:
      compile:
        optons:
          namespace: false
          amd: ['handlebars', 'handlebars.helpers']
          processName: (filePath) ->
            filePath.split('templates/').pop()
        files: 
          'templates/templates.js': ['src/app/templates/**/*.hbs']
    
	grunt.initConfig(config)

	grunt.loadNpmTasks('grunt-contrib-connect')

	grunt.registerTask 'default', [
		'connect'
	]
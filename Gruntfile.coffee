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
   
  grunt.initConfig(config)
  grunt.loadNpmTasks('grunt-contrib-connect')

  grunt.registerTask 'default', [
    'connect'
  ]
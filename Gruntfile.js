module.exports = function(grunt) {
  grunt.initConfig({
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    express: {
      server: {
        options: {
          bases: ["app", "bower_components"],
          livereload: true
        }
      }
    },

    open: {
      all: {
        path: 'http://localhost:3000'
      }
    },

    clean: {
      icons: ['svg-icons-out/**/*']
    },

    watch: {
      css: {
        files: ['app/sass/**/*.scss'],
        tasks: ['compass']
      },

      livereload: {
        files: ['app/*.html', 'app/css/*.css', 'app/scripts/**/*.js'],
        options: {
          livereload: true
        }
      }
    },

    grunticon: {
      icons: {
        files: [
          {
            expand: true,
            cwd: 'svg-icons-src',
            src: ['*.svg'],
            dest: 'svg-icons-out'
          }
        ],
        options: {}
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('default', ['compass', 'express', 'open', 'watch', 'express-keepalive']);
  grunt.registerTask('icons', ['clean:icons', 'grunticon']);
};
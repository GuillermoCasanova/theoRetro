'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        app: 'app',
        dist: 'sqs_template',
        sass: {
            dist: {
                options: {
                    style: 'expanded', // expanded or nested or compact or compressed
                    loadPath: '<%= app %>/scripts/bower_components/foundation/scss',
                    compass: true,
                    quiet: true,
                    update: true,
                    lineNumbers: true
                },
                files: {
                    '<%= app %>/styles/app.css': '<%= app %>/scss/app.scss'
                }
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= app %>/js/**/*.js'
            ]
        },

        clean: {
            dist: {
                src: ['<%= dist %>/*']
            },
            done: {
                src: ['<%= dist %>/scripts/bower_components', '<%= dist %>/scss', '<%= dist %>/sftp-config.json']
            }

        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd:'<%= app %>/',
                    src: ['*', 'assets/**/**','blocks/*','collections/*','pages/*','fonts/**', 'styles/*', '!**/*.scss', '!bower_components/**', 'data/**'],
                    dest: '<%= dist %>/'
                }]
            },
        },

        imagemin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '<%= app %>/images/',
                    src: ['**/*.{jpg,gif,svg,jpeg,png}'],
                    dest: '<%= dist %>/images/'
                }]
            }
        },

        uglify: {
            options: {
                preserveComments: 'some',
                mangle: false
            }
        },

        useminPrepare: {
            html: ['<%= app %>/*.region'],
            options: {
                dest: '<%= dist %>'
            }
        },

        usemin: {
            html: ['<%= dist %>/**.region', '!<%= app %>scripts/bower_components/**'],
            css: ['<%= dist %>/styles/**.css'],
            options: {
                dirs: ['<%= dist %>']
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['sass']
            },
            sass: {
                files: '<%= app %>/scss/**/*.scss',
                tasks: ['sass']
            }
        },

        wiredep: {
            target: {
                src: [
                    '<%= app %>/site.region'
                ],
                exclude: [
                    'modernizr',
                    'jquery-placeholder',
                    'foundation'
                ]
            },
            options: {
                bowerJson: require('./bower.json')
            }
        },

        cssmin: {
          target: {
            files: {
              '<%= dist %>/styles/app.min.css': ['<%= dist %>/styles/app.css']
            }
          }
        }, 

        open:  {

            dev:  {

                path: 'https://ted-massena-wev7.squarespace.com/',
                app: 'Google Chrome',

                options: {

                    delay: 500


                }
            }

        }

    });




    grunt.registerTask('compile-sass', ['sass']);
    
    grunt.registerTask('bower-install', ['wiredep']);

    grunt.registerTask('default', ['compile-sass', 'open:dev', 'watch']);


   //grunt.registerTask('dev-publish', ['compile-sass', 'clean:dist', 'copy:dist', 'concat', 'usemin', 'clean:done']);

   grunt.registerTask('publish', ['compile-sass', 'clean:dist', 'useminPrepare', 'copy:dist',  'concat', 'uglify', 'usemin', 'cssmin', 'clean:done']);



    //grunt.registerTask('validate-js', ['jshint']);
  

     //g/runt.registerTask('publish-noimg', ['compile-sass', 'clean:dist', 'validate-js', 'useminPrepare', 'copy:dist', 'concat', 'cssmin', 'uglify', 'usemin']);
    
    //grunt.registerTask('publish', ['compile-sass', 'clean:dist', 'validate-js', 'useminPrepare', 'copy:dist', 'newer:imagemin', 'concat', 'cssmin', 'uglify', 'usemin']);

};

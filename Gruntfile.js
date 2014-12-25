/**
 * Untu SMVC.
 * Grunt Definitions.
 * Language: Javascript.
 * Created by mahdaen on 12/8/14.
 * License: GNU General Public License v2 or later.
 */

/* Gunt Module */
module.exports = function(grunt) {
    var source = 'source/';
	var libs = 'libraries/';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            core: {
                files: {
                    'index.js': [
                        /* Header. */
                        source + 'header.js',

                        /* Modules */
                        source + 'com.data-type.js',
                        source + 'com.iterator.js',
                        source + 'com.private.js',
                        source + 'com.circler.js',
                        //source + 'com.objectpath.js',

                        /* Alternatives */
                        //source + 'com.object.js'
                    ]
                }
            }
        },

        uglify: {
            options: {
                mangle: false,
                banner: '/* \n' +
                '\t <%= pkg.name %> - v<%= pkg.version %> \n' +
                '\t Included libraries: \n' +
                '\t jQuery, Enquire. \n' +
                '*/\n'
            },
            build: {
                files: {
                    'index.min.js': 'build/index.js'
                }
            }
        },
        watch: {
            options: {
                livereload: 4334
            },
            core: {
                files: [source + '**/*.js'],
                tasks: ['concat']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat:core', 'watch']);
    grunt.registerTask('build', ['concat:build', 'uglify:build']);
}

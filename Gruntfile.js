
module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: false,
                    optimization: 2
                },

                files: {
                'dist/styles.css': 'src/css/styles.less'
                },

                cssmin: {
                    target: {
                        files: {
                            expand: true,
                                cwd: 'dist',
                                src: ['*.css', '!*,min.css'],
                                dest: 'dist',
                                ext: '.min.css'
                        }
                    }
                }
            }
        },
        watch: {
            styles: {
                files: ['crs/css/*.less'],
                tasks: ['less', 'cssmin']
            }
        }
    });

    grunt.registerTask('default', ['less', 'cssmin', 'watch']); // , 'cssmin'
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
};


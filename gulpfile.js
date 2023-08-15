
const gulp = require('gulp');
const less = require('gulp-less');
// const path = require('path');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

exports.less = function () {
        return gulp.src('./src/css/*.less')
            .pipe(less())
            .pipe(cssmin())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./dist'));
    };





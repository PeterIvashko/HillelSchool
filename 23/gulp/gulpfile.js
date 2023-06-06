const { task, src, dest } = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');

task('js', () => {
    return src('./src/index.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('dist'))
})

task('css', () => {
  return src(['./src/styles/**/*.scss', './src/styles/**/*.less'])
    .pipe(sass().on('error', sass.logError))
    .pipe(less())
    .pipe(concat('styles.min.css'))
    .pipe(cleanCSS())
    .pipe(dest('dist'));
});


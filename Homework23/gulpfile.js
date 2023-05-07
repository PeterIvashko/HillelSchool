const gulp = require('gulp');
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');
const uglify = require('gulp-uglify');

gulp.task('minify-css', () => {
  return gulp.src('src/**/*.css')
    .pipe(concat('styles.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-js', () => {
  return gulp.src('src/**/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', gulp.parallel('minify-css', 'minify-js'));

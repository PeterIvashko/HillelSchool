const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const less = require('gulp-less');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');

// Компіляція Sass в CSS
gulp.task('sass', function() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

// Компіляція Less в CSS
gulp.task('less', function() {
  return gulp.src('./src/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./src/css'));
});

// Конкатенація та мінімізація JS коду
gulp.task('scripts', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

// Очистка папки з готовим проектом
gulp.task('clean', function() {
  return del(['./dist/**/*']);
});

// Спостереження за змінами в файлах
gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/less/**/*.less', gulp.series('less'));
  gulp.watch('./src/js/**/*.js', gulp.series('scripts'));
});

// Запуск режиму розробки
gulp.task('default', gulp.series('clean', gulp.parallel('sass', 'less', 'scripts'), 'watch'));

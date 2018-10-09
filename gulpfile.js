var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    gulp.src('./assets/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('./assets/scss/main.scss', ['sass']);
    gulp.watch('./assets/css/main.css').on('change', browserSync.reload);
});
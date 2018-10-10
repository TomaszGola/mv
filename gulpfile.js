var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () =>
    gulp.src('./assets/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
);

gulp.task('autoprefixer', () =>
    gulp.src('./assets/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./assets/css'))
);

gulp.task('browser-sync', () =>
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
);

gulp.task('watch', ['browser-sync', 'sass'], () => {
    gulp.watch('./assets/scss/main.scss', ['sass']);
    gulp.watch('./assets/css/main.css', ['autoprefixer']).on('change', browserSync.reload)
});
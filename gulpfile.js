const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename');


gulp.task('scss', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('out/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function(){
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('out'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function(){
    return gulp.src('app/js/**/*.js')
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('out/js'))
        .pipe(browserSync.reload({stream: true}))
});


// switch on, if necessary
// gulp.task('js', function(){
//     return gulp.src([
//         'node_modules/slick-carousel/slick/slick.js',
//         'node_modules/magnific-popup/dist/jquery.magnific-popup.js'
//     ])
//         .pipe(concat('libs.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('out/js'))
//         .pipe(browserSync.reload({stream: true}))
// });

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "out/"
        }
    });
});

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('app/**/*.html', gulp.parallel('html'));
    gulp.watch('app/js/**/*.js', gulp.parallel('script'));
});


// add 'js', if necessary
gulp.task('default', gulp.parallel('html', 'scss', 'script', 'browser-sync', 'watch'));
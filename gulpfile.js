const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del');


gulp.task('del', async function(){
    del.sync('out')
});

gulp.task('scss', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 3 versions']
        }))
        .pipe(concat('style.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('out/css'))
        .pipe(browserSync.reload({stream: true}))
});


// switch on, if necessary
// gulp.task('style', function(){
//     return gulp.src([
//         'node_modules/slick-carousel/slick/slick.js',
//         'node_modules/magnific-popup/dist/jquery.magnific-popup.js'
//     ])
//         .pipe(concat('libs.scss'))
//         .pipe(gulp.dest('out/css'))
//         .pipe(browserSync.reload({stream: true}))
// });

gulp.task('html', function(){
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('out'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){
    return gulp.src('app/js/**/*.js')
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('out/js'))
        .pipe(browserSync.reload({stream: true}))
});


// switch on, if necessary
// gulp.task('script', function(){
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


// task to make a project to send to a server
// gulp.task('build', async function(){
//     let buildHTML = gulp.src('app/**/*.html')
//         .pipe(gulp.dest('another_folder'))
//     let buildCss = gulp.src('app/scss/**/*.scss')
//         .pipe(sass())
//         .pipe(concat('style.css'))
//         .pipe(gulp.dest('another_folder/css'))
//     let buildJs = gulp.src('app/js/**/*.js')
//         .pipe(concat('main.js'))
//         .pipe(gulp.dest('another_folder/js'))
//     let buildFonts = gulp.src('app/fonts/**/*.*')
//         .pipe(gulp.dest('another_folder/fonts'))
//     let buildImg = gulp.src('app/img/**/*.*')
//         .pipe(gulp.dest('another_folder/img'))
// });

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('app/**/*.html', gulp.parallel('html'));
    gulp.watch('app/js/**/*.js', gulp.parallel('js'));
});


// add 'script', if necessary
// add 'style', if necessary
gulp.task('default', gulp.parallel('html', 'scss', 'js', 'browser-sync', 'watch'));

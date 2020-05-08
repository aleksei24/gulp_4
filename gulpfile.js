const projectFolder = 'dist',
    sourceFolder = 'app';

let path = {
    build: {
        html: projectFolder + '/',
        css: projectFolder + '/css/',
        js: projectFolder + '/js/',
        img: projectFolder + '/img/',
        fonts: projectFolder + '/fonts/',
    },
    src: {
        html: [sourceFolder + '/*.html', '!' + sourceFolder + '/_*.html'],
        css: sourceFolder + '/scss/style.scss',
        js: sourceFolder + '/js/script.js',
        img: sourceFolder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
        fonts: sourceFolder + '/fonts/*.{woff,woff2}',
    },
    watch: {
        html: sourceFolder + '/**/*.html',
        css: sourceFolder + '/scss/**/*.scss',
        js: sourceFolder + '/js/**/*.js',
        img: sourceFolder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
    },
    clean: './' + projectFolder + '/',
};

let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browser = require('browser-sync').create(),
    fileinclude = require('gulp-file-include');

function browserSync(par) {
    browser.init({
        server: {
            baseDir: './' + projectFolder + '/',
        },
        port: 3000,
        notify: false,
    });
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browser.stream());
}

function watchFiles(params) {
    gulp.watch([path.watch.html], html);
}

let build = gulp.series(html);
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;

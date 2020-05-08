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
        js: sourceFolder + '/js/main.js',
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
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    groupmedia = require('gulp-group-css-media-queries'),
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglifyes = require('gulp-uglify-es').default,
    imagemin = require('gulp-imagemin');

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

function css(params) {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: 'expanded',
            })
        )
        .pipe(groupmedia())
        .pipe(
            autoprefixer({
                overrideBrowserlist: ['last 5 versions'],
                cascade: true,
            })
        )
        .pipe(dest(path.build.css))
        .pipe(cleancss())
        .pipe(
            rename({
                extname: '.min.css',
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browser.stream());
}

function js() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(uglifyes())
        .pipe(
            rename({
                extname: '.min.js',
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browser.stream());
}

function images() {
    return src(path.src.img)
        .pipe(
            imagemin({
                interlaced: true,
                progressive: true,
                optimizationLevel: 5,
                svgoPlugins: [
                    {
                        removeViewBox: false,
                    },
                ],
            })
        )
        .pipe(dest(path.build.img))
        .pipe(browser.stream());
}

function watchFiles(params) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

function clean(params) {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js, css, html, images));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;

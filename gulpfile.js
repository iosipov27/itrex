let gulp = require('gulp'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify'),
    inject = require('gulp-inject'),
    es = require('event-stream'),
    cleanCSS = require('gulp-clean-css');


let scriptsList = [
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/angular/angular.min.js',
    './node_modules/angular-route/angular-route.min.js',
    './node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',

    './app/app.module.js',
    './app/app.config.js',
    './app/shared/shared.module.js',
    './app/app.controller.js',
    './app/components/components.module.js',

    './app/components/shared/services/*.js',
    './app/components/shared/directives/*.js',
    './app/components/shared/filters/*.js',

    './app/components/**/*.js'
];

let stylesList = [
    './app/style.css',
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    './node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
    './node_modules/font-awesome/css/font-awesome.min.css'
];

let fontsList = [
    'node_modules/font-awesome/fonts/fontawesome-webfont.woff',
    'node_modules/font-awesome/fonts/fontawesome-webfont.woff2',
    'node_modules/font-awesome/fonts/fontawesome-webfont.ttf'
]

let dest = './dist';


let scriptsStream = gulp.src(scriptsList)
    .pipe(concat('app.js'))
    .pipe(minify({noSource: true}))
    .pipe(gulp.dest(dest));

gulp.task('fonts', () => {
    gulp.src(fontsList)
        .pipe(gulp.dest(dest + '/fonts'));
});

let stylesStream = gulp.src(stylesList)
    .pipe(concat('styles.css'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest(dest));

gulp.task('html', () => {
    gulp.src('./app/components/**/*.html')
        .pipe(gulp.dest(dest));
});

gulp.task('inject', function () {
    gulp.src('./app/index.html')
        .pipe(inject(es.merge(stylesStream, scriptsStream), { ignorePath: 'dist' }))
        .pipe(gulp.dest(dest));
});

gulp.task('default', ['fonts', 'html', 'inject']);
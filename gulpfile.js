let gulp = require('gulp'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate')
    eslint = require('gulp-eslint')
    inject = require('gulp-inject');


let scriptsList = [
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/angular/angular.min.js',
    './node_modules/angular-route/angular-route.min.js',
    './node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',

    './app/app.module.js',
    './app/app.config.js',
    './app/shared/shared.module.js',
    './app/app.controller.js',
    './components/components.module.js',

    './app/shared/services/*.js',

    './app/shared/directives/*.js',

    './app/shared/filters/*.js',

    './app/components/**/*.js'
];

let stylesList = [
    './app/style.css',
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    './node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css'
];


gulp.task('scripts', () => {
    gulp.src(scriptsList)
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('lint', function () {
    return gulp.src(['**/*.js', '!node_modules/**'])
        .pipe(eslint({
            'rules': {
                'quotes': [1, 'single'],
                'semi': [1, 'always']
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('css', () => {
    gulp.src(stylesList)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('html', () => {
    gulp.src([
        './app/components/**/*.html'
    ])
        .pipe(gulp.dest('./dist'));
});

gulp.task('inject', function () {
    gulp.src('./app/index.html')
        .pipe(inject(gulp.src(['./dist/app.js', './dist/styles.css'], { read: false }), { ignorePath: 'dist' }))
        .pipe(gulp.dest('./dist'));
});


gulp.task('default', ['scripts', 'css', 'html', 'inject']);
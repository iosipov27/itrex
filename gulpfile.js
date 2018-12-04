let gulp = require('gulp'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate')
    inject = require('gulp-inject');


gulp.task('scripts', () => {
    gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/angular/angular.min.js',
        './node_modules/angular-route/angular-route.min.js',
        './node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
        './app/shared/shared.module.js',
        './components/components.module.js',
        './app/app.module.js',
        './app/app.config.js',
        './app/shared/services/*',
        './app/app.controller.js',
        
        './app/shared/directives/*',
        './app/shared/filters/*',
        './app/components/**/*.js'
    ])
    .pipe(ngAnnotate())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./prod'));
});

gulp.task('css', () => {
    gulp.src([
        './app/style.css',
        './node_modules/bootstrap/dist/css/bootstrap.min.css',
        './node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css'
    ])
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./prod'));
});

gulp.task('html', () => {
    gulp.src([
        './app/components/**/*.html'
    ])
    .pipe(gulp.dest('./prod'));
});

gulp.task('inject', function () {
    var target = gulp.src('./app/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./prod/app.js', './prod/styles.css'], {read: false});
   
    return target.pipe(inject(sources))
      .pipe(gulp.dest('./prod'));
  });

gulp.task('default', ['scripts', 'css', 'html', 'inject']);
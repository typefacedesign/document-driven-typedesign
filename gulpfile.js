'use strict';

var browserify = require('browserify'),
    connect = require('gulp-connect'),
    eslint = require('gulp-eslint'),
    gulp = require('gulp'),
    ngannotate = require('gulp-ng-annotate'),
    source = require('vinyl-source-stream'),
    streamify = require('gulp-streamify'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    less = require('gulp-less');

/*
 * Useful tasks:
 * - gulp fast:
 *   - linting
 *   - unit tests
 *   - browserification
 *   - no minification, does not start server.
 * - gulp watch:
 *   - starts server with live reload enabled
 *   - lints, unit tests, browserifies and live-reloads changes in browser
 *   - no minification
 * - gulp:
 *   - linting
 *   - unit tests
 *   - browserification
 *   - minification and browserification of minified sources
 *   - start server for e2e tests
 *   - run Protractor End-to-end tests
 *   - stop server immediately when e2e tests have finished
 *
 * At development time, you should usually just have 'gulp watch' running in the
 * background all the time. Use 'gulp' before releases.
 */

gulp.task('clean', function(cb) {
    del(['build/**'], cb);
});

gulp.task('lint', function() {
    return gulp.src([
        'gulpfile.js',
        'ddt/**/*.js'
    ])
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('browserify', function() {
    // This used to be bundle({debug: true}). That option is deprecated now.
    return browserify('./ddt/app/app.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./build/dist/'))
        .pipe(connect.reload());
});

gulp.task('ngannotate', ['lint', 'copy:vendor_js'], function() {
    return gulp.src(['./ddt/**/*.js'])
        .pipe(ngannotate({add: true}))
        .pipe(gulp.dest('./build/ngannotate/'));
});

gulp.task('browserify-min', ['ngannotate'], function() {
    return browserify('./build/ngannotate/app/app.js')
        .bundle()
        .pipe(source('app.min.js'))
        .pipe(streamify(uglify({mangle: false})))
        .pipe(gulp.dest('./build/dist/'));
});

gulp.task('server', ['browserify', 'copy:app_html', 'compile:less'], function() {
    connect.server({
        root: 'build/dist',
        livereload: false
    });
});

gulp.task('watch', function() {
    gulp.start('server');
    gulp.watch([
        'ddt/**/*.js'
    ], ['fast']);
});

gulp.task('fast', ['clean', 'copy:app_html', 'compile:less'], function() {
    gulp.start('browserify');
});

gulp.task('copy:app_html', function() {
    return gulp.src(['ddt/**/*.html'], {base: './ddt/'})
        .pipe(gulp.dest('build/dist/'));
});

gulp.task('copy:vendor_js', function() {
    return gulp.src(['vendor/**/*.js'], {base: './'})
        .pipe(gulp.dest('build/'));
});

gulp.task('compile:less', function() {
    return gulp.src('ddt/ddt.less')
        .pipe(less())
        .pipe(gulp.dest('build/dist/'))
        .pipe(gulp.dest('build/ngannotate/'));
});

gulp.task('default', ['clean'], function() {
    gulp.start('browserify', 'browserify-min', 'copy:app_html', 'compile:less');
});

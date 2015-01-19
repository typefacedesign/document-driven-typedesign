'use strict';

var browserify = require('browserify'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    gulp = require('gulp'),
    ngannotate = require('gulp-ng-annotate'),
    source = require('vinyl-source-stream'),
    streamify = require('gulp-streamify'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    less = require('gulp-less'),
    shell = require('gulp-shell'),
    git = require('gulp-git');


gulp.task('clean', function(cb) {
    del(['build/**'], cb);
});

gulp.task('lint', function() {
    gulp.src([
        'gulpfile.js',
        'ddt/**/*.js'
    ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('compile:browserify', ['clean'], function() {
    return browserify('./ddt/app.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./build/debug/'))
        .pipe(connect.reload());
});

gulp.task('ngannotate', ['lint', 'copy:vendor_js'], function() {
    return gulp.src(['./ddt/**/*.js'])
        .pipe(ngannotate({add: true}))
        .pipe(gulp.dest('./build/ngannotate/'));
});

gulp.task('compile:browserify-min', ['ngannotate'], function() {
    return browserify('./build/ngannotate/app.js')
        .bundle()
        .pipe(source('app.min.js'))
        .pipe(streamify(uglify({mangle: false})))
        .pipe(gulp.dest('./build/debug/'));
});

gulp.task('server', function() {
    connect.server({
        root: 'build/debug',
        livereload: false
    });
});

gulp.task('copy:app_html', ['clean'], function() {
    return gulp.src(['ddt/**/*.html'], {base: './ddt/'})
        .pipe(gulp.dest('build/debug/'));
});

gulp.task('copy:vendor_js', ['clean'], function() {
    return gulp.src(['vendor/**/*.js'], {base: './'})
        .pipe(gulp.dest('build/'));
});

gulp.task('copy:glyphicons', ['clean'], function() {
    return gulp.src(['node_modules/bootstrap/fonts/**'])
        .pipe(gulp.dest('build/debug/fonts/'));
});

gulp.task('compile:less', ['clean'], function() {
    return gulp.src('ddt/ddt.less')
        .pipe(less())
        .pipe(gulp.dest('build/debug/'));
});

gulp.task('copy', ['copy:app_html', 'copy:glyphicons']);

gulp.task('compile', ['compile:browserify', 'compile:less']);

gulp.task('debug', ['lint', 'compile', 'copy']);

gulp.task('gh-pages:stash', ['debug'], shell.task('git stash'));

gulp.task('gh-pages:checkout-gh-pages', ['debug', 'gh-pages:stash'], function(cb) {
    git.checkout('gh-pages', function(err) {
        if (err) {
            cb(err);
        } else {
            cb(null);
        }
    });
});

gulp.task('gh-pages:clean', ['debug', 'gh-pages:checkout-gh-pages'], function(cb) {
    del(['demo/**'], cb);
});

gulp.task('gh-pages:copy', ['debug', 'gh-pages:clean'], function() {
    return gulp.src('build/debug/**', {base: './build/debug/'})
        .pipe(gulp.dest('demo/'));
});

gulp.task('gh-pages:add', ['debug', 'gh-pages:copy'], function() {
    return gulp.src('./demo/*')
        .pipe(git.add());
});

gulp.task('gh-pages:commit', ['debug', 'gh-pages:add'], function() {
    return gulp.src('./demo/*')
        .pipe(git.commit('Committing built files for the DDT demo.'));
});

gulp.task('gh-pages:push', ['debug', 'gh-pages:commit'], function(cb) {
    git.push('origin', 'gh-pages', function(err) {
        if (err) {
            cb(err);
        } else {
            cb(null);
        }
    });
});

gulp.task('gh-pages:checkout-master', ['debug', 'gh-pages:push'], function(cb) {
    git.checkout('master', function(err) {
        if (err) {
            cb(err);
        } else {
            cb(null);
        }
    });
});

gulp.task('gh-pages:pop-stash', ['debug', 'gh-pages:checkout-master'], shell.task('git stash pop'));

gulp.task('gh-pages', ['gh-pages:pop-stash']);

gulp.task('default', ['debug']);

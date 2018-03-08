/* eslint-disable */
'use strict'

console.log('i am run...');
var time = Date.now();
var startTime = Date.now();

const gulp = require('gulp');
checkTime('gulp');

const concat = require('gulp-concat');
checkTime('gulp-concat');

const uglify = require('gulp-uglify');
checkTime('gulp-uglify');

const watch = require('gulp-watch');
checkTime('gulp-watch');

const sourcemaps = require('gulp-sourcemaps');
checkTime('gulp-sourcemaps');

const babel = require("gulp-babel");
checkTime('gulp-babel');

const connect = require('gulp-connect');
checkTime('gulp-connect');

getSummaryTime();

gulp.task('connect', () => {
  connect.server({
    port: 8080,
    livereload: true,
    root: 'public'
  });
});

gulp.task('content', () => {
  gulp.src('assets/**/*')
    .pipe(gulp.dest('public/assets/'))
    .pipe(connect.reload());
});

gulp.task('html', () => {
  gulp.src('pages/**/*.html')
    .pipe(gulp.dest('public'))
    .pipe(connect.reload());
});

gulp.task('js', () => {
  const src = [
    'src/fix.js',

    'src/engine/engine.js',
    'src/engine/service/*.js',
    'src/engine/service.js',

    'src/boot/**/*.js',
    'src/loader/**/*.js',

    'src/menu/ui/*.js',
    'src/menu/menu.js',

    'src/shop/ui/*.js',
    'src/shop/shop.js',

    'src/settings/ui/*.js',
    'src/settings/settings.js',

    'src/game/components/generator.js',
    'src/game/components/**/*.js',
    'src/game/actors/enemy.js',
    'src/game/actors/**/*.js',
    'src/game/gui/**/*.js',
    'src/game/game.js',

    'src/app.js',
  ];

  gulp.src(src)
    // .pipe(sourcemaps.init())
    .on('error', err => {
      console.error('Error in compress task', err.toString());
    })
    .pipe(babel({
      "presets": ["es2015"]
    }))
    .on('error', err => {
      console.error('Error in babel task', err.toString());
    })
    // .pipe(sourcemaps.write())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public'))
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  watch('src/**/*.js', () => {
    gulp.start('js');
  });
  watch('pages/**/*.html', () => {
    gulp.start('html');
  });
  watch('assets/**/*', () => {
    gulp.start('content');
  });
});

gulp.task('default', ['js', 'html', 'content', 'connect', 'watch']);

function checkTime(name) {
  console.log('[' + new Date().toLocaleTimeString() + ']', 'Run Time Module ' + name + ':', Date.now() - time, 'ms.');
  time = Date.now();
}

function getSummaryTime() {
  console.log('[' + new Date().toLocaleTimeString() + ']', 'Summary time:', Date.now() - startTime, 'ms.');
}

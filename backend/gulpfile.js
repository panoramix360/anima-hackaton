const gulp = require('gulp');
const gutil = require('gulp-util');
const eslint = require('gulp-eslint');
const sizereport = require('gulp-sizereport');
const check = require('gulp-check');
const rename = require("gulp-rename");
const es = require('event-stream');

const compiledfolder = 'tmp';
const distfolder = 'dist';

const configfolder = 'config/**';
const assetsfolder = 'assets/**';
const packagejson = 'package.json';
const ignoredfolders = [
  '!node_modules/**',
  '!test/**/**',
  '!gulpfile.js',
  '!dist/**',
  `!${compiledfolder}/**`,
  `!${assetsfolder}`,
  `!${configfolder}`,
  '!package-lock.json'
]

const jsSRC = [
  ...ignoredfolders,
  '**/**/*.js'
];

const compiledsrc = `${compiledfolder}/**`;


gulp.task('lint', () =>
  gulp
  .src(jsSRC)
  .pipe(check(/console\.log/)).on('error', err => gutil.log(gutil.colors.red(err)))
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
);

//Build task

gulp.task('build',['build:files'], () =>
  gulp
    .src(compiledsrc)
    .pipe(sizereport())
);

gulp.task('build:files', () =>
  es.merge([
    gulp.src(configfolder).pipe(rename(path => (path.dirname = './config'))),
    gulp.src(assetsfolder).pipe(rename(path => (path.dirname = './assets'))),
    gulp.src(packagejson)
  ]).pipe(gulp.dest(compiledfolder))
);

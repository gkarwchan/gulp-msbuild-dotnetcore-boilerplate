let gulp = require('gulp');
const compile = require('./compile');
const clean = require('./clean');
const assemblyInfo = require('./assemblyInfo');
const version = require('./version');


gulp.task('clean', clean);
gulp.task('assemblyInfo', gulp.series(assemblyInfo, (done) => { done(); }));
gulp.task('compile', gulp.series(clean, version, assemblyInfo, compile, (done) => { done(); }));
gulp.task('default', gulp.series(clean, version, assemblyInfo, compile));
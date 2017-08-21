let gulp = require('gulp');
const compile = require('./compile');


gulp.task('compile', compile);
gulp.task('default', gulp.series('compile'));
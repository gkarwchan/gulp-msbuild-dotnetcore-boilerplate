let gulp = require('gulp');
const msbuild = require('gulp-msbuild');


function compile (done) {
    console.log('Compile ......');
    return gulp.src('../metropolis/Metropolis.sln')
        .pipe(msbuild({
            toolsVersion : 'auto',
            stdout : true,
            stderr : true,
            nologo : true,
            errorOnFail: true
        }));
}

module.exports = compile;
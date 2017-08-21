let gulp = require('gulp');
const assemblyInfoPlugin = require('gulp-dotnet-assembly-info');

function assemblyInfo (done) {
    var package = require('../package.json');
    version = package.version;
    console.log('Version Number: ' + version);

     return gulp.src('**/AssemblyInfo.cs')
        .pipe(assemblyInfoPlugin({
            title: 'Metropolis',
            description: 'A code review and visualization tool', 
            configuration: 'Release', 
            company: 'Dahood.io', 
            product: 'Metropolis', 
            copyright: 'Copyright © Jonathan McCracken, Greg Cook, and Richard Hurst 2016', 
            trademark: 'Dahood.io', 
            version: '0.' + version,
            fileVersion: '0.' + version}))
        .pipe(gulp.dest('.'));
}

module.exports = assemblyInfo;
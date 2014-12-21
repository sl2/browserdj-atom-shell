var gulp = require('gulp');
var gulpAtom = require('gulp-atom');
var zip = require('gulp-zip');

var version = 'v0.20.1';
var platforms = ['win32-ia32', 'darwin-x64', 'linux-x64'];

// build only
gulp.task('build', function() {
    return gulpAtom({
        srcPath: './src',
        releasePath: './release',
        cachePath: './cache',
        version: version,
        rebuild: false,
        platforms: platforms
    });
});

// create zip
gulp.task('default', ['build'], function() {
    for (i in platforms) {
        var os = platforms[i];
        gulp.src('./release/'+version+'/'+os+'/*')
            .pipe(zip('browserdj'+'_'+version+'_'+os+'.zip'))
            .pipe(gulp.dest('./dist'));
    }
});



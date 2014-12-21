var gulp = require('gulp');
var gulpAtom = require('gulp-atom');
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');

var version = 'v0.20.1';
var platforms = ['darwin-x64', 'win32-ia32', 'linux-x64'];

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
        if (os != 'darwin-x64'){
            var base = './release/'+version+'/'+os+'/**';
            var tar_name = 'browserdj'+'_'+version+'_'+os+'.tar';
            gulp.src(base)
                .pipe(tar(tar_name))
                .pipe(gzip())
                .pipe(gulp.dest('./dist'));
        }
    }
});



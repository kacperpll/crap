var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var bulkSass = require('gulp-sass-bulk-import');

gulp.task('reload', function() {
    browserSync.reload();
});

gulp.task('serve', ['sass'], function() {
    browserSync({
    proxy: "frontekozone.local/src"

//     browserSync({
//     server: {
//         baseDir: "src",
//     routes: {
//         "/bower_components": "bower_components"
//     }
// }
    })
    gulp.watch('src/*.html', ['reload']);
    gulp.watch('src/*.php', ['reload']);
    gulp.watch('src/styles/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
    return gulp.src('src/styles/scss/styles.scss')
        .pipe(bulkSass())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/styles/css'))
        .pipe(browserSync.stream());
});

gulp.task('css', function() {
    return gulp
            .src(srcDir + 'src/styles/*.scss')
            .pipe(bulkSass())
            .pipe(
                sass({
                    includePaths: ['src/styles/']
                }))
            .pipe( gulp.dest('src/styles/css/') );
});

gulp.task('default', ['serve']);

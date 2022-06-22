
  // Fetch required plugins
const gulp = require('gulp');
const sass = require('gulp-sass');
const minify = require('gulp-minify');

gulp.task( 'styles' , () => {
    return gulp.src('app/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
})
gulp.task( 'dev', () => {
    return gulp.watch('app/scss/*.scss', (done) => {
        gulp.series(['styles']) (done)
    })
})
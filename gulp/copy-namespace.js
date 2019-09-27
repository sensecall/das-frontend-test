const gulp = require('gulp');

gulp.task('copy-namespace', () => {
  return gulp.src([
      'src/das/namespace.js'
    ])
    .pipe(gulp.dest('public/javascripts/'));
});
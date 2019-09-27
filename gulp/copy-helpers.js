const gulp = require('gulp');

gulp.task('copy-helpers', () => {
  return gulp.src([
      'src/das/helpers.js'
    ])
    .pipe(gulp.dest('public/javascripts/'));
});
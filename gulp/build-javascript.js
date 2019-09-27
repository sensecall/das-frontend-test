const gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('build:javascript', () => {
  return gulp.src([
      'src/das/namespace.js',
      'src/das/helpers.js',
      'src/das/components/**/*.js'
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('package/das/'));
});

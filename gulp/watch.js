const gulp = require('gulp');

gulp.task('watch-sass', (done) => {
  gulp.watch([
    'src/das/assets/images/**',
    'src/das/settings/**/*.scss',
    'src/das/objects/**/*.scss',
    'src/das/helpers/**/*.scss',
    'src/das/utilities/**/*.scss',
    'src/das/components/**/*.scss',
    'src/das/components/**/*.js',
    'src/das/namespace.js',
    'src/das/helpers.js',
    'app/assets/sass/*.scss'
  ], gulp.series('sass', 'copy-component-javascript', 'copy-namespace', 'copy-helpers'));
  done();
});

gulp.task('watch-assets', (done) => {
  gulp.watch([
    'app/assets/images/**',
    'app/components/**',
    'app/assets/javascripts/**'], {cwd: './'}, gulp.task('copy-assets'));
  done();
});

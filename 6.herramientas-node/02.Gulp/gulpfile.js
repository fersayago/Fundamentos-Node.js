const gulp = require('gulp');
const server = require('gulp-server-livereload');

//npm run gulp-build
gulp.task('build', (cb) => {
  console.log('building site...');
  setTimeout(cb, 1200);
})

//npm run gulp-serve
gulp.task('serve', (cb) => {
  gulp.src('www')
    .pipe(server({
      livereload: true,
      open: true,
    }));
})

//npm run gulp-start
gulp.task('default', gulp.series('build', 'serve'));
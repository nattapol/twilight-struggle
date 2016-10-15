var gulp 		= require('gulp');
var browserSync = require('browser-sync').create();
var sass		= require('gulp-ruby-sass');

// Static Server + watching scss/html files
gulp.task('server', ['sass'], function() {
	browserSync.init({
		server: "./"
	});

	gulp.watch("/css/*.scss", ['sass']);
	gulp.watch("app/*.html").on('change', browserSync.reload);
});

/**
 * Complie with gulp-ruby-sass + source maps
 */
gulp.task('sass', function () {

	return sass('css', {sourcemap: true})
		.on('error', function (err) {
			console.error('Error!', err.message);
		})
		.pipe(sourcemaps.write('./', {
			includeContent: false,
			sourceRoot: 'css'
		}))
});

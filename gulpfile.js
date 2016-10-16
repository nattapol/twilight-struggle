var gulp 		= require('gulp');
var sass		= require('gulp-ruby-sass');
var browserSync	= require('browser-sync');

gulp.task('sass', function () {
	return sass('scss/styles.scss', {
			compass: true,
			style: 'compressed'
		})
		.pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "./"
		}
	});
});

gulp.task('default', ['sass', 'browser-sync'], function() {
	
	gulp.watch(['**/*.html'], browserSync.reload);
	gulp.watch(['css/styles.css'], browserSync.reload);

	gulp.watch("scss/**/*.scss", ['sass']);
});

var gulp = require('gulp');
var browserSync = require("browser-sync").create();

gulp.task('browser-sync', function() {
	    browserSync.init({
	        server: {
	            baseDir: "./"
	        }

	    });
	gulp.watch(["*.html","*.css","*.js"])
		.on('change',browserSync.reload);
	});	

   
 
// gulp.task('watch', function () {
// 	gulp.watch('js/*.js', ['browser-sync', 'lint'])
// });
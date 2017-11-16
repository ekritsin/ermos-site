var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync');

gulp.task('watch', function(){
    
        browserSync.init({
            notify: false,
            server: {
              baseDir: "app"
            }
          });
        
    
        watch('./app/index.html', function(){
            browserSync.reload();
        });
    
        watch('./app/assets/styles/**/*.css', function(){
            gulp.start('cssInject');
        });
    
    });

    gulp.task('cssInject', ['styles'], function() { //injects new changes when reloads, but first runs styles
        return gulp.src('./app/temp/styles/styles.css') //gulp.src is an async function --> return 
          .pipe(browserSync.stream());
      });
    
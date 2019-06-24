/*

Author: Vikram "AJ" Gopal
Current Version: 1.0.0

---------------------------------------------------------------------------------------
Change Log
---------------------------------------------------------------------------------------
Date        Description                                                         Version
_______________________________________________________________________________________
6/22/2019   Initial Version                                                      1.0.0
             - Function for:            
              - compiling sass to css
              - Injecting css on file change into browser using browsersync         
            - Function to run browsersync
            - Function for: 
              - Reloading browser on change to 'html', 
              'scss/css' and 'js' files using browsersync.reload   
_______________________________________________________________________________________
*/


var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require("autoprefixer");

gulp.task('sass', function (){
    return gulp.src('app/css/!(_)*.scss')
    .pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream())
})

function reload(done) {
    browserSync.reload();
    done();
  }

// Static Server and watching scss/html files
gulp.task('server', function (done) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    
    gulp.watch('app/css/**/*.scss', gulp.series('sass'));
    // gulp.src('app/css/styles.css')
    //     .pipe(autoprefixer({
    //         browsers: ['last 2 versions'],
    //         cascade: false
    //     }))
    //     .pipe(gulp.dest('app/css'))
    gulp.watch("./index.html", reload);
    gulp.watch("./app/js/**/*.js", reload);
    done();
});

gulp.task('default', gulp.series('sass', 'server'));


















// gulp.task('sass', function (){
//     return gulp.src('app/css/**/!(_)*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('app/css'))
//     .pipe(browserSync.reload({
//         stream: true
//       }))
// })

// gulp.task('browserSync', function() {
//     browserSync.init({
//       server: {
//         baseDir: 'app'
//       },
//     })
// })

// gulp.task('watch', gulp.series('browserSync', 'sass'), function (){
//     gulp.watch('app/css/**/*.scss', gulp.series('sass'));
// });
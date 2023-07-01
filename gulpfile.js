const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
//const imagemin = require('gulp-imagemin');

var styleSrc = './src/style/*.scss';
var styleDest = './dist/css';

function styles(){
    return gulp.src(styleSrc)
        .pipe(sass({outputStyle: 'compressed' }))
        .pipe(gulp.dest(styleDest));
}

//function images(){
//    return gulp.src('./src/images/**/*')
//        .pipe(imagemin())
//        .pipe(gulp.dest('./dist/images'));
//}

exports.default = gulp.parallel(styles);
exports.watch = function(){
    gulp.watch('./src/style/*.scss', gulp.parallel(styles))
}
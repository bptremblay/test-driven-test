var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('default', function () {
    return gulp.src('test/spec.js')
        .pipe(jasmine());
});



//var gulp = require('gulp');
//var jasmine = require('gulp-jasmine');
//var reporters = require('jasmine-reporters');
//
//gulp.task('default', function () {
//    return gulp.src('spec/test.js')
//        .pipe(jasmine({
//            reporter: new reporters.JUnitXmlReporter()
//        }));
//});
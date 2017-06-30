let gulp = require('gulp')
let sass = require('gulp-sass')
let csso = require('gulp-csso')
let minify = require('gulp-minify')

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
})

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass'])
})

gulp.task('minify-sass', function () {
    return gulp.src('./css/**/*.css')
        .pipe(csso())
        .pipe(gulp.dest('./dist'))
})

gulp.task('minify-js', function () {
    gulp.src('js/*.js')
        .pipe(minify({
            ext: {
                src: '-debug.js',
                min: '.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('dist'))
})
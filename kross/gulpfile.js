var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify-es').default,
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '>1%', 'ie 8', 'ie 7'], { cascade: true}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

function bsReload(done) { browserSync.reload(); done(); };

gulp.task('scripts', function() {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/owl.carousel/dist/owl.carousel.min.js',
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));
});

gulp.task('code', function() {
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('css-libs', function() {
    return gulp.src('app/sass/*.sass')
        .pipe(sass())
        .pipe(cleancss( {level: { 1: { specialComments: 0 } } }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

gulp.task('clean', async function() {
    return del.sync('dist');
});

gulp.task('prebuild', async function() {
    var buildCss = gulp.src([
        'app/css/main.css',
        'app/css/main.min.css'
    ])
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulpd.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.sass', gulp.series('sass'));
    gulp.watch(['libs/**/*.js', 'app/js/common.js'], gulp.parallel('scripts'));
    gulp.watch('app/*.html', gulp.parallel('code'));
});

gulp.task('default', gulp.parallel('css-libs', 'sass', 'scripts','browser-sync', 'watch'));

// после sass 'scripts'
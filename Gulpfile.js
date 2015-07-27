var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    livereload  = require('gulp-livereload'),
    cssmin      = require('gulp-cssmin'),
    webserver   = require('gulp-webserver'),
    sass        = require('gulp-sass'),
    opn         = require('opn'),
    $           = require('gulp-load-plugins')(),
    source      = require('vinyl-source-stream'),
    browserify  = require('browserify'),
    watchify    = require('watchify'),
    reactify    = require('reactify')

var DOMAIN = '192.168.2.17',
    PORT = 100;

var paths = {
    js: 'www/js/*.js',
    css: 'www/css/*.css',
    sass: 'www/scss/*.scss'
};

gulp.task('scripts', function () {
  var bundler = watchify(browserify({
    'cache': {},
    'packageCache': {},
    'transform': [reactify]
  }))
  bundler.add('./www/js/app.js')
  bundler.on('log', function (msg) {
    console.log(msg);
  })
  bundler.on('update', rebundle)

  function rebundle () {
    return bundler.bundle()
      // log errors if they happen
      .on('error', function (msg) {
        console.log(msg);
      })
      .pipe(source('app.js'))
      .pipe(gulp.dest('./www/dist/'))
      .pipe(livereload())
  }

  return rebundle()
})


gulp.task('sass', function () {
  gulp.src(paths.sass)
    .pipe(sass({
        errLogToConsole: true,
        sourceComments : 'normal'
    }))
    .pipe(gulp.dest('./www/css/'));
});


gulp.task('styles', function () {
    gulp.src(paths.css)
        .pipe(cssmin())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./www/dist/'))
        .pipe(livereload());
});

gulp.task('watch', function(){
    gulp.watch(paths.js, function() {
        gulp.run('scripts');
    });
    gulp.watch(paths.sass, function() {
        gulp.run('sass');
    });
});

gulp.task('openbrowser', function() {
  opn('http://'+ DOMAIN + ':' + PORT);
});

gulp.task('webserver', function() {
  gulp.src('./www/')
    .pipe(webserver({
      host:             DOMAIN,
      port:             PORT,
      livereload:       true,
      fallback:         'index.html'
    }));
});

gulp.task('default', ['webserver', 'watch', 'scripts', 'openbrowser']);
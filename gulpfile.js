var gulp = require('gulp'),
    spawn = require('child_process').spawn,
    browserSync = require('browser-sync'),
    notifier = require('node-notifier');

var Logger = function() {
  var logger = function() {
  };

  var _log = function(message) {
    console.log(message);
  };

  var _notify = function(title, message) {
    notifier.notify({
      title: title,
      message: message
    });
  };

  logger.prototype = {
    log : _log,
    notify : _notify
  };
  return logger;
}();


gulp.task('jekyll', function () {
  var jekyll = spawn('jekyll', ['build']);
  var logger = new Logger();

  jekyll.stderr.on('data', function(data) {
    logger.log("" + data);
    logger.notify('Build Error', data);
  });

  jekyll.on('exit', function (code) {
    var message = code ? 'error' : 'success';
    logger.log('Finished Jekyll Build : ' + message);
    browserSync.reload();
  });
});

gulp.task('serve', function() {
  browserSync.init(null, {
    server: {baseDir: './_site'}
  });
});

gulp.task('watch', function () {
  gulp.watch(['_data/**/*.yml', '**/*.html', '**/*.md', '**/*.scss', '**/*.css', '**/*.js', '!_site/**/*', '!node_modules/**/*'], ['jekyll']);
});

gulp.task('default', ['jekyll', 'serve', 'watch']);

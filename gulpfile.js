var globby = require('globby');
var gulp = require('gulp');
var SwaggerParser = require('swagger-parser');

gulp.task('test', function() {
  globby(['./specifications/**/*.json']).then(function(entries) {
    for (var i = 0; i < entries.length; i++) {
      SwaggerParser.validate(entries[i], function(err, data) {
        if (err) { throw err; }
      });
    }
  });
});

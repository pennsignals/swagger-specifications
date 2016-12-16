var globby = require('globby');
var gulp = require('gulp');
var SwaggerParser = require('swagger-parser');

gulp.task('test', function() {
  globby(['./specifications/**/*.json']).then(function(specifications) {
    specifications.forEach(function(specification) {
      SwaggerParser.validate(specification, function(err, data) {
        if (err) { throw err; }
      });
    });
  });
});

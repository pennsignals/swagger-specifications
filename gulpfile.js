var globby = require('globby');
var gulp = require('gulp');
var SwaggerParser = require('swagger-parser');

gulp.task('test', function() {
  var patterns = ['./specifications/*/swagger.{json,yml,yaml}'];
  globby(patterns).then(function(specifications) {
    specifications.forEach(function(specification) {
      SwaggerParser.validate(specification, function(err, data) {
        if (err) { throw err; }
        console.log(specification);
        console.log(data);
      });
    });
  });
});

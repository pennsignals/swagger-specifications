const globby = require('globby');
const gulp = require('gulp');
const SwaggerParser = require('swagger-parser');

gulp.task('test', () => {
  const patterns = ['./specifications/*/swagger.{json,yml,yaml}'];
  globby(patterns).then(specifications => {
    specifications.forEach(specification => {
      SwaggerParser.validate(specification, (err, data) => {
        if (err) {
          throw err;
        }
        console.log(specification);
        console.log(data);
      });
    });
  });
});

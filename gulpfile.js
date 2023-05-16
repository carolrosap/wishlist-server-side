const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

// Tarefa para compilar o Sass
gulp.task('sass', () => {
  return gulp.src('src/app/views/styles/**/*.scss') // Caminho dos arquivos Sass de entrada
    .pipe(sass()) // Compila o Sass para CSS
    .pipe(autoprefixer()) // Aplica os prefixos de vendor
    .pipe(gulp.dest('public/css')); // Diretório de saída para os arquivos CSS
});

// Tarefa padrão do Gulp
gulp.task('default', gulp.series('sass'));

/*
   ERROS:
        gulp-sass
            NO BOILERPLATE, O FILE _columns_bootstrap.scss TINHA UM COMMENT MULTILINE COM UMA VAR:
            extend #{$extend};    DÁ ERRO

        gulp compass
            https://www.npmjs.com/package/gulp-compass
            TAMBÉM DÁ O ERRO ANTERIOR,
            O ERRO DA VAR extend #{$extend}; EM COMMENT MULTILINE MANTÉM-SE

   UTILIZAÇÃO:
       gulp-sass
        FILE DEVE TER NOME gulpfile.js;
        DEVE ESTAR NA PASTA N:\E\www\Gulp;
        var url_base = »»» ALTERAR PARA O PATH DO PROJECTO;
        //............ »»» SASS PARA ACTIVAR
        //............ SERÁ O 'estilos.scss' O MAIS FREQUENTE, 
        //............ MAS TAMBÉM PODEM SER AS COMPONENTES OU OS DE TESTE, 
        //............ DA PASTA html_files/...
        var sass_file = 'estilos.scss';                 
        var sass_file = 'exemplo_bootstrap_menu.scss';
        ...       
        
        COMMAND LINE;
        IR PARA cd N:\E\www\Gulp
        ACTIVAR gulp serve

        CSS
            fica com o nome estilos.css
        watch PARA .js, .html, .scss    

FORMA DE TER APENAS UMA COMMAND LINE PARA ACTIVAR SASS + BROSERSyNC;
IMPLICA A EXISTÊNCIA DO GULPFILE, gulpfile.js, NA PASTA N:\E\www\Gulp;
NESTE FILE, O PATH PARA CADA PROJECTO TEM DE SER ACTUALIZADO;
NÃO FOI ENCONTRADA UMA FORMA DE TER O FILE EM CADA PASTA DE PROJECTO,
E ACTIVAR A PARTIR DAÍ (http://stackoverflow.com/questions/36491709/access-node-modules-from-another-folder) 
*/

//gulp serve
//gulp styles
//gulp compass

//npm install browser-sync gulp --save-dev
//npm install sass gulp --save-dev
//npm install gulp-compass --save-dev    https://www.npmjs.com/package/gulp-compass

//===================== PASTA PRINCIPAL DO PROJECTO
//var url_base = 'N:/E/www/_TemplateNovosExercicios/';
//var url_base = 'N:/E/www/Boilerplate_minisite2/';
//var url_base = 'N:/E/www/Gulp_BrowserSync_SASS/';
var url_base = 'N:/E/www/CSS_position_center/';


//===================== SASS PARA ACTIVAR
//............ SERÁ O 'estilos.scss' O MAIS FREQUENTE, 
//............ MAS TAMBÉM PODEM SER AS COMPONENTES OU OS DE TESTE, 
//............ DA PASTA html_files/...;
/*
    "sass/estilos.scss"
    "sass/exemplo_componentes.scss"
    "sass/exemplo_bootstrap_menu.scss"
    "sass/exemplo_menu_rwd_sem_js.css"
    "sass/exemplo_form.css"
*/
var sass_file = "sass/estilos.scss";  

//===================== 
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

var compass     = require('gulp-compass');
var minifyCSS   = require('gulp-minify-css');
var concatCss  = require('gulp-concat-css');

//var estilos_final_name = 'estilos.css';

//===================== gulp serve
gulp.task('serve', ['styles'],  function() 
{
    browserSync.init(
    {
        server: {
            baseDir: url_base
            //files: "*.html,*.htm, css/*.css, js/*.js"
        }
	});    
	
	gulp.watch(url_base + "sass/**/*.scss", ['styles']);
	gulp.watch(url_base + "*.html").on('change', browserSync.reload);
    gulp.watch(url_base + "js/*.js").on('change', browserSync.reload);    
   
});

//=====================  Compile sass into CSS & auto-inject into browsers
gulp.task('styles', function() 
{
    return gulp.src(url_base + sass_file)
        .pipe(sass({outputStyle: 'compressed' 
            //includePaths: [url_base + 'sass/comp/']
        }).on('error', sass.logError))
        .pipe(gulp.dest(url_base + "css/"))
        .pipe(browserSync.stream());
});

//===================== gulp compass
gulp.task('compass', function() 
{
    gulp.src(url_base + 'sass/estilos.scss')
        .pipe(compass({
                      config_file: url_base + 'config.rb',
                      css: 'css_temp',
                      sass: 'sass',
                      project: url_base
        }))
        .pipe(concatCss('estilos.css'))    
        .pipe(minifyCSS({aggressiveMerging:false, advanced:false}))    
        .pipe(gulp.dest(url_base + 'css/'))
        .pipe(browserSync.stream());
});
//===================== gulp compass2
gulp.task('compass2', function() 
{
    gulp.src(url_base + 'css_temp/estilos.css')    
        .pipe(concatCss('estilos.css'))    
        .pipe(minifyCSS({aggressiveMerging:false, advanced:false}))    
        .pipe(gulp.dest(url_base + 'css/'));
});

/*
//===================== AUX, RETIRADO DE OUTRO GULPFILE.JS
gulp.task('styles', function() 
    {
        gulp.src(path_css)
            .pipe(concatCss(estilos_final_name))
            .pipe(minifyCSS({aggressiveMerging:false, advanced:false}))
            .pipe(gulp.dest(path_css_dest));
    });
*/

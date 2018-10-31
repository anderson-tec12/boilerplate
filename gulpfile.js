
//modulos

let gulp = require('gulp')
let svgSprite = require('gulp-svg-sprite')


// parametros de configuração do  gulp-svg-sprite

let config = {
    mode:{ 
        symbol:{
            dest:'sprite', 
            sprite: 'sprite.svg', 
            example: true 
        },
        svg:{
            xmlDeclaration:false, 
            doctypeDeclaration:false 
        }
    }
}


//tarefa 

gulp.task('sprites',() =>{

    gulp.src('icons/**/*.svg') 
    .pipe(svgSprite(config)) 
    .pipe(gulp.dest('.')) 
})


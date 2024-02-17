import dartSass from 'sass'
import gulpSass from 'gulp-sass'

import cleancss from 'gulp-clean-css'
import webpcss from 'gulp-webpcss'
import autoprefixer from 'gulp-autoprefixer'
import groupCssMedia from 'gulp-group-css-media-queries'

const sass = gulpSass(dartSass)

export function scss(){
    return app.gulp.src(app.path.src.scss)
    .pipe(app.plugins.plumberNotify('SCSS'))
    .pipe(app.plugins.if(
        app.isDev,
        app.plugins.sourcemaps.init()
        )
    )
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(app.plugins.if(
        app.isBuild,
        groupCssMedia()
    ))
    .pipe(app.plugins.if(
        app.isBuild,
        webpcss({
            webpClass: '.webp',
            noWebpClass: '.no-webp'
        })
    ))
    .pipe(app.plugins.if(
        app.isBuild,
        autoprefixer({
            grid: true,
            overrideBrowserslist: ['last 3 versions'],
            cascade: true
    })))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.if(
        app.isBuild,
        cleancss()))
    .pipe(app.plugins.rename({
        extname: '.min.css'
    }))
    .pipe(app.plugins.if(
        app.isDev,
        app.plugins.sourcemaps.write()
        )
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}

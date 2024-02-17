import babel from 'gulp-babel'
import webpack from 'webpack-stream'

export function js(){
    return app.gulp.src(app.path.src.js)
    .pipe(app.plugins.plumberNotify('JS'))
    .pipe(babel())
    .pipe(app.plugins.if(
        app.isDev,
        app.plugins.sourcemaps.init()
        )
    )
    .pipe(webpack({
        mode: app.isBuild ? 'production' : 'development',
        output: {
            filename: 'app.min.js'
        }
    }))
    .pipe(app.plugins.if(
        app.isDev,
        app.plugins.sourcemaps.write()
        )
    )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())
}


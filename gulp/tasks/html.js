import include from 'gulp-file-include'
import webpHtmlNosvg from 'gulp-webp-html-nosvg'
import versionNumber from 'gulp-version-number'

export function html(){
    return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumberNotify('HTML'))
    .pipe(include())
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(app.plugins.if(
        app.isBuild, webpHtmlNosvg())
    )
    .pipe(app.plugins.if(
        app.isBuild,
        versionNumber({
        'value': '%DT%',
        'append': {
            'key': '_v',
            'cover': 0,
            'to': [
                'css', 
                'js', 
            ]
        },
        'output': {
            'file': 'gulp/version.json'
        }
    })))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}
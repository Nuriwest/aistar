import replace from 'gulp-replace';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename'
import browsersync from 'browser-sync';
import newer from 'gulp-newer';
import ifPlugin from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';

export const plugins = {
    replace,
    rename,
    browsersync,
    newer,
    if: ifPlugin,
    sourcemaps,
    plumberNotify
}

function plumberNotify (title) {
    return plumber(notify.onError({
            title,
            message: "Error: <%= error.message %>"
        })
    )
}
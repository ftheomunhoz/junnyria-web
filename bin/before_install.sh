function init() {
    cd ../
}

function defineSettings() {
    cd app/config
    rm 'settings.js'
    mv 'settings'+$env+'.js' 'settings.js'
}
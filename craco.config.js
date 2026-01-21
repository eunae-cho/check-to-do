const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@app' : path.resolve(__dirname, 'src/app'),
            '@pages' : path.resolve(__dirname, 'src/pages'),
            '@components' : path.resolve(__dirname, 'src/components'),
            '@styles' : path.resolve(__dirname, 'src/styles'),
            '@hooks' : path.resolve(__dirname, 'src/hooks'),
            '@utils' : path.resolve(__dirname, 'src/utils'),
            '@types' : path.resolve(__dirname, 'src/types'),
        }
    }
}
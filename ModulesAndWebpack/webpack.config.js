const path = require('path');
module.export = {

    entry: '/.src.index.ts',
    output: {
        module:{
            rules: [
                {

                    test: /\.ts$/,
                    use: 'ts-loader',
                    include: [path.resolve(__dirname, 'src')]

                }
            ]
        },

        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')

    }

}
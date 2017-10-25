const express = require('express');
const webpack = require('webpack');
const wdm = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(wdm(compiler, {
    publicPath: config.output.publicPath
}));

app.listen(3000, function(){
    console.log('On Port 3000!\n')
})
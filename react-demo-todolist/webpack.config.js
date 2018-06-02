/**
 * Created by x1c on 2018/5/30.
 */
const path = require('path');

let env = process.env.NODE_ENV;

module.exports = require(path.resolve(__dirname, 'cfg', env));
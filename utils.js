const yaml = require('js-yaml');
const fs = require('fs');

module.exports = {
  defaultConfigFile (hexo, key, file) {
    let defaultConfig = yaml.safeLoad(fs.readFileSync(file));
    let data = hexo.locals.get('data');
    hexo.config[key] = Object.assign(defaultConfig, hexo.theme.config[key], hexo.config[key], data[key]);
  }
}
/* global hexo */

'use strict';

const path = require('path');
const utils = require('hexo-cake-utils')(hexo, __dirname);
const fs = require('fs');

hexo.extend.filter.register('theme_inject', function(injects) {

  //set config var
  utils.defaultConfigFile('math', 'default.yaml');

  //set views
  hexo.theme.setView('/math/katex.swig', fs.readFileSync(path.join(__dirname, 'katex.swig')).toString());
  hexo.theme.setView('/math/mathjax.swig', fs.readFileSync(path.join(__dirname, 'mathjax.swig')).toString());

  //inject math
  injects.bodyEnd.file('math', utils.getFilePath('index.swig'));
  injects.style.push(utils.getFilePath('math.styl'));

});

/* global hexo */

'use strict';

const path = require('path');
const utils = require('./utils');
const fs = require('fs');

hexo.extend.filter.register('theme_inject', function(injects) {

  //set config var
  utils.defaultConfigFile(hexo, 'math', path.join(__dirname, 'default.yaml'))

  //set views
  hexo.theme.setView('/math/katex.swig', fs.readFileSync(path.join(__dirname, 'katex.swig')).toString());
  hexo.theme.setView('/math/mathjax.swig', fs.readFileSync(path.join(__dirname, 'mathjax.swig')).toString());

  //inject math
  injects.bodyEnd.file('math', path.join(__dirname, 'index.swig'));
  let stylePath = path.join(path.relative('./', __dirname), 'math.styl');
  console.log(stylePath);
  injects.style.push(stylePath);

});

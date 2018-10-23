'use strict';

const fs = require('fs');

let content;

const load = path => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    content = data;
    console.log('\x1Bc');
    console.log('Length: ' + content.length);
    console.log(content);
  });
};

const watch = path => {
  fs.watch(path, (event, file) => {
    console.dir({ event, file });
    load(path);
  });
};

const path = './1-file.js';
load(path);
watch(path);

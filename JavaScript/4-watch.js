'use strict';

const dependency = require('./4-dependency.js');
//delete require.cache[require.resolve('./4-dependency.js')];
console.log(Object.keys(require.cache));

const json = require('./4-dependency.json');

const collection = new Map();
collection.set('key1', 'value1');
collection.set('key2', 'value2');

console.log(`Reloaded ${[...collection.entries()].join('; ')}`);
console.log(`Reloaded ${[...dependency.entries()].join('; ')}`);
console.log(`Reloaded ${JSON.stringify(json)}`);

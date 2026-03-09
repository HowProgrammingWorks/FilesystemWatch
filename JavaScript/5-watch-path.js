'use strict';

const fs = require('fs');

const dataPath = './5-data/greeting.txt';
const greeting = fs.readFileSync(dataPath, 'utf8').trim();

console.log(`[${new Date().toISOString()}] ${greeting}`);
console.log('Edit "./5-data/greeting.txt" to trigger restart');
console.log('Editing this file will not trigger restart');

'use strict';

process.on('SIGTERM', () => {
  // By default:
  // the process will receive SIGTERM when restarting the watched process
  console.log('Received SIGTERM, shutting down.');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down.');
  process.exit(0);
});

console.log('Started. pid=', process.pid);
console.log('Edit and save this file to trigger a restart.');
console.log('Run with: node --watch --watch-kill-signal=SIGINT app.js');
console.log('On restart, the old process will receive SIGINT');

setInterval(() => {
  console.log(`[${new Date().toISOString()}] pid=${process.pid}`);
}, 5000);

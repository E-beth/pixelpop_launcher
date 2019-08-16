const fs = require('fs-extra');
const path = require('path');
const rcedit = require('rcedit');
const package = require('./package.json');

const outputDir = './build';

fs.emptyDirSync(outputDir);

fs.copySync('./node_modules/electron/dist', outputDir);
fs.emptyDirSync(path.join(outputDir, 'resources/app'));
fs.copySync('./src', path.join(outputDir, 'resources/app/src'));
fs.copySync('./package.json', path.join(outputDir, 'resources/app/package.json'));
fs.copySync('./node_modules/input-gamepads.js/dist/index.iife.js', path.join(outputDir, 'resources/app/node_modules/input-gamepads.js/dist/index.iife.js'));
rcedit(path.join(outputDir, 'electron.exe'), {
	'version-string': package.version,
	'file-version': package.version,
	'product-version': package.version,
	icon: './src/icon.ico',
});

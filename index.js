const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const YAML = require('yaml');

const readFileAsync = promisify(fs.readFile);

module.exports = async (options) => {
  options = {
    cwd: process.cwd(),
    ...options,
  };

  const filePath = path.resolve(options.cwd, 'pubspec.yaml');
  return YAML.parse(await readFileAsync(filePath, 'utf8'));
};

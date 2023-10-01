import { readFile } from 'fs';
import path from 'path';
import YAML from 'yaml';

export const readPubspec = (options, callback) => {
  if (typeof options === 'function') {
    callback = options;
  }
  if (typeof options === 'function' || typeof options === 'undefined') {
    options = { cwd: process.cwd() };
  }

  const read = (resolve, reject) => {
    const filePath = path.resolve(options.cwd, 'pubspec.yaml');
    readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(YAML.parse(data));
    });
  };

  return typeof callback === 'function'
    ? read(callback.bind(null, undefined), callback)
    : new Promise(read);
};

/**
 * @deprecated use readPubspec instead
 */
export const readPubspecAsync = async ({ cwd = process.cwd() } = {}) => {
  const filePath = path.resolve(cwd, 'pubspec.yaml');
  return YAML.parse(await fsAsync.readFile(filePath, 'utf8'));
};

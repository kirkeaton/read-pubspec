import { readFile } from 'node:fs';
import path from 'node:path';
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

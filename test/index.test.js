import assert from 'node:assert/strict';
import test from 'node:test';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { readPubspec } from '../index.js';

const dirname = path.dirname(fileURLToPath(import.meta.url));
process.chdir(dirname);
const rootCwd = path.join(dirname, '/dir');

test('should read pubspec.yaml from current working directory using callback', async (t) => {
  return new Promise((resolve, reject) => {
    readPubspec((error, pubspec) => {
      if (error) {
        return reject(error);
      }

      assert.equal(pubspec.name, 'read_pubspec');
      assert.equal(pubspec.version, '1.0.0');
      resolve();
    });
  });
});

test('should read pubspec.yaml from directory provided by cwd option using callback', async (t) => {
  return new Promise((resolve, reject) => {
    readPubspec({ cwd: rootCwd }, (error, pubspec) => {
      if (error) {
        return reject(error);
      }

      assert.equal(pubspec.name, 'read_pubspec');
      assert.equal(pubspec.version, '1.0.0');
      resolve();
    });
  });
});

test('should read pubspec.yaml from current working directory using promises', async (t) => {
  const pubspec = await readPubspec();
  assert.equal(pubspec.name, 'read_pubspec');
  assert.equal(pubspec.version, '1.0.0');
});

test('should read pubspec.yaml from directory provided by cwd option using promises', async (t) => {
  const pubspec = await readPubspec({ cwd: rootCwd });
  assert.equal(pubspec.name, 'read_pubspec');
  assert.equal(pubspec.version, '1.0.0');
});

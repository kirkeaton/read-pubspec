import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { readPubspec } from '../src/index.ts';

const dirname = path.dirname(fileURLToPath(import.meta.url));
process.chdir(dirname);
const rootCwd = path.join(dirname, '/dir');

test('should read pubspec.yaml from current working directory', async (t) => {
  const pubspec = await readPubspec();
  assert.equal(pubspec.name, 'read_pubspec');
  assert.equal(pubspec.version, '1.0.0');
  assert.equal(
    pubspec.description,
    'A sample project for testing pubspec.yaml parsing.'
  );
  assert.equal(pubspec.environment.sdk, '>=2.12.0 <3.0.0');
  assert.equal(pubspec.dependencies?.http, '^0.13.0');
  assert.equal(pubspec.dependencies?.path, '^1.8.0');
  assert.equal(pubspec.dev_dependencies?.test, '^1.16.0');
});

test('should read pubspec.yaml from directory provided by cwd option', async (t) => {
  const pubspec = await readPubspec({ cwd: rootCwd });
  assert.equal(pubspec.name, 'read_pubspec');
  assert.equal(pubspec.version, '1.0.0');
  assert.equal(
    pubspec.description,
    'A sample project for testing pubspec.yaml parsing.'
  );
  assert.equal(pubspec.environment.sdk, '>=2.12.0 <3.0.0');
  assert.equal(pubspec.dependencies?.http, '^0.13.0');
  assert.equal(pubspec.dependencies?.path, '^1.8.0');
  assert.equal(pubspec.dev_dependencies?.test, '^1.16.0');
});

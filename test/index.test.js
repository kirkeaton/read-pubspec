import test from 'ava';
import path from 'path';
import {fileURLToPath} from 'url';

import { readPubspecAsync } from '../index.js';

const dirname = path.dirname(fileURLToPath(import.meta.url));
process.chdir(dirname);
const rootCwd = path.join(dirname, '/dir');

test('should read pubspec.yaml from current working directory', async (t) => {
  const pubspec = await readPubspecAsync();
  t.is(pubspec.name, 'read_pubspec');
  t.is(pubspec.version, '1.0.0');
});

test('should read pubspec.yaml from directory provided by cwd option ', async (t) => {
  const pubspec = await readPubspecAsync({ cwd: rootCwd });
  t.is(pubspec.name, 'read_pubspec');
  t.is(pubspec.version, '1.0.0');
});

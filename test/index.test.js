const test = require('ava');
const path = require('path');

const readPubspec = require('..');

process.chdir(__dirname);

test('should read pubspec.yaml from current working directory', async (t) => {
  const pubspec = await readPubspec();
  t.is(pubspec.name, 'read_pubspec');
  t.is(pubspec.version, '1.0.0');
});

test('should read pubspec.yaml from directory provided by cwd option ', async (t) => {
  const pubspec = await readPubspec({ cwd: path.join(__dirname, '/dir') });
  t.is(pubspec.name, 'read_pubspec');
  t.is(pubspec.version, '1.0.0');
});

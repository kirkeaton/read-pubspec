import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { parse } from 'yaml';

export const readPubspec = async (options = { cwd: process.cwd() }) => {
  const filePath = resolve(options.cwd, 'pubspec.yaml');
  const data = await readFile(filePath, 'utf8');
  return parse(data);
};

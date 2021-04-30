import { promises as fsAsync } from 'fs';
import path from 'path';
import YAML from 'yaml';

export const readPubspecAsync = async ({ cwd = process.cwd() } = {}) => {
  const filePath = path.resolve(cwd, 'pubspec.yaml');
  return YAML.parse(await fsAsync.readFile(filePath, 'utf8'));
};

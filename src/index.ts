import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { parse } from 'yaml';

export interface ReadPubspecOptions {
  cwd: string;
}

export interface Pubspec {
  [k: string]: any;
  name: string;
  version: string;
  description: string;
  homepage?: string;
  repository?: string;
  issue_tracker?: string;
  documentation?: string;
  dependencies?: {
    [k: string]: any;
  };
  dev_dependencies?: {
    [k: string]: any;
  };
  dependency_overrides?: {
    [k: string]: any;
  };
  environment: {
    [k: string]: any;
    sdk: string;
    flutter?: string;
  };
  executables?: {
    [k: string]: any;
  };
  platforms?: {
    [k: string]: any;
  };
  publish_to?: string;
  funding?: string[];
  false_secrets?: string[];
  screenshots?: {
    [k: string]: any;
    description: string;
    path: string;
  }[];
  topics?: string[];
}

export const readPubspec = async (
  options: ReadPubspecOptions = { cwd: process.cwd() }
): Promise<Pubspec> => {
  const filePath = resolve(options.cwd, 'pubspec.yaml');
  const data = await readFile(filePath, 'utf8');
  return parse(data);
};

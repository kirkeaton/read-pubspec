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
  issueTracker?: string;
  documentation?: string;
  dependencies?: {
    [k: string]: any;
  };
  devDependencies?: {
    [k: string]: any;
  };
  dependencyOverrides?: {
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
  publishTo?: string;
  funding?: string[];
  falseSecrets?: string[];
  screenshots?: {
    [k: string]: any;
    description: string;
    path: string;
  }[];
  topics?: string[];
}

export function readPubspec(options?: ReadPubspecOptions): Promise<Pubspec>;
export function readPubspec(
  options: ReadPubspecOptions,
  callback: (err: Error, result: Pubspec) => void
): void;
export function readPubspec(
  callback: (err: Error, result: Pubspec) => void
): void;
/**
 * @deprecated use readPubspec instead
 */
export function readPubspecAsync(
  options?: ReadPubspecOptions
): Promise<Pubspec>;

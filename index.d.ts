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

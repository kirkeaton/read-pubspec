import { expectError, expectType } from 'tsd';

import { Pubspec, ReadPubspecOptions, readPubspec } from './index.js';

const options: ReadPubspecOptions = { cwd: '' };

expectType<Promise<Pubspec>>(readPubspec());
expectType<Promise<Pubspec>>(readPubspec(options));

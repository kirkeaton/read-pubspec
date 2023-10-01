import { expectError, expectType } from 'tsd';

import { Pubspec, ReadPubspecOptions, readPubspec } from './index.js';

const options: ReadPubspecOptions = { cwd: '' };
const callback = (error: Error, result: Pubspec) => {};

expectType<Promise<Pubspec>>(readPubspec());
expectError<Promise<Pubspec>>(readPubspec(callback));
expectType<Promise<Pubspec>>(readPubspec(options));
expectError<Promise<Pubspec>>(readPubspec(options, callback));

expectType<void>(readPubspec(callback));
expectError<void>(readPubspec());
expectType<void>(readPubspec(options, callback));
expectError<void>(readPubspec(options));

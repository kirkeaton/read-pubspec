# read-pubspec

Read a pubspec.yaml file

## Install

```
$ npm install read-pubspec
```

## Usage

```js
import path from 'node:path';
import { readPubspec } from 'read-pubspec';

process.chdir(path.join(__dirname, '/test'));

console.log(await readPubspec());
//=> { name: 'root', … }

console.log(await readPubspec({ cwd: path.join(process.cwd(), '/sub') }));
//=> { name: 'sub', … }
```

## API

### readPubspec(options?)

Returns a `Promise<Pubspec>` with the parsed YAML.

#### options

Type: `ReadPubspecOptions`

#### options.cwd

Type: `string`<br>
Default: `process.cwd()`

Current working directory

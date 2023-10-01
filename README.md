# read-pubspec

> Read a pubspec.yaml file

## Install

```
$ npm install read-pubspec
```

## Usage

```
import path from 'path';
import { readPubspec } from 'read-pubspec';

process.chdir(path.join(__dirname, '/test'));

console.log(await readPubspec());
//=> { name: 'root', … }

console.log(await readPubspec({ cwd: path.join(process.cwd(), '/sub') }));
//=> { name: 'sub', … }

```

## API

### readPubspec(options?, callback?)

Returns a `Promise<object>` with the parsed YAML.

Optionally a callback function may be used instead.

#### options

Type: `object`

#### options.cwd

Type: `string`<br>
Default: `process.cwd()`

Current working directory

#### callback

Type: `Function`

Optional callback with error as the first argument and the parsed YAML as the second.

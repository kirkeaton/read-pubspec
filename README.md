# read-pubspec

> Read a pubspec.yaml file

## Install

```
$ npm install read-pubspec
```

## Usage

```
import path from 'path';
import { readPubspecAsync } from 'read-pubspec';

process.chdir(path.join(__dirname, '/test'));

console.log(await readPubspecAsync());
//=> { name: 'root', … }

console.log(await readPubspecAsync({ cwd: path.join(process.cwd(), '/sub') }));
//=> { name: 'sub', … }

```

## API

### readPubspecAsync(options?)

Returns a `Promise<object>` with the parsed YAML.

#### options

Type: `object`

#### options.cwd

Type: `string`<br>
Default: `process.cwd()`

Current working directory

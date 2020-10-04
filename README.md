# read-pubspec [![Build Status](https://travis-ci.com/kirkeaton/read-pubspec.svg?branch=master)](https://travis-ci.com/kirkeaton/read-pubspec)

> Read a pubspec.yaml file

## Install

```
$ npm install read-pubspec
```

## Usage

```
const path = require('path');
const readPubspec = require('read-pubspec');

process.chdir(path.join(__dirname, '/test'));

(async () => {
  console.log(await readPubspec());
  //=> { name: 'root', … }

  console.log(await readPubspec({ cwd: path.join(process.cwd(), '/sub') }));
  //=> { name: 'sub', … }
})();

```

## API

### readPubspec(options?)

Returns a `Promise<object>` with the parsed YAML.

#### options

Type: `object`

#### options.cwd

Type: `string`<br>
Default: `process.cwd()`

Current working directory

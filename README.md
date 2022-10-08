# deepkit-starter

A [Deepkit Framework](https://deepkit.io/) starter template.

## TODO

### Switch to ESM

Blocked by `typescript-eslint` being unable to find types, possibly caused by `"types": "./dist/cjs/index.d.ts"` in Deepkit packages' `package.json`:
```json
{
  "name": "@deepkit/event",
  "version": "1.0.1-alpha.74",
  "description": "Deepkit async event dispatcher",
  "type": "commonjs",
  "main": "./dist/cjs/index.js",
  "module": "./dist/esm/index.js",
  "types": "./dist/cjs/index.d.ts",
  "exports": {
    ".": {
      "require": "./dist/cjs/index.js",
      "default": "./dist/esm/index.js"
    }
  }
}
```

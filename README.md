# ***HackParse*** -- An Argv Parser

Parse command line parameters to a more readable JSON format.

## Example:
```js
parse = require("hackparse",['sample'])
console.log(parse(process.argv.slice(2)))
```
You can add Boolean parameters to the array, so you can use them anywhere without worrying about being parsed to non-Boolean values.

The above example `--sample val` will be parsed as `{ _: ['val'], help: true }` .
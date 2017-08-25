# import-sort-style-absolute

Style for the [import-sort](https://github.com/renke/import-sort) package which is compatible with [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)'s import/first rule with absolute-first option, thus making it compatible with the StandardJS and Airbnb configs. The remaining order is based on the default eslint sort-imports order.

## Install

Install with `npm install import-sort-style-absolute --save-dev`

Use with

    "importSort": {
        ".js, .jsx, .es6, .es": {
          "parser": "babylon",
          "style": "absolute"
        }
    }

in your package.json.

## Order

Sorts imports as follows:

### ABSOLUTE

#### NONE

- import 'foo'

#### ALL

- import * as _ from 'bar'
- import * as Foo from 'bar'
- import * as foo from 'bar'
- import _, * as bar from 'baz'
- import Foo, * as bar from 'baz'
- import foo, * as bar from 'baz'

#### MULTIPLE

- import _, { bar, … } from 'baz'
- import Foo, { bar, … } from 'baz'
- import foo, { bar, … } from 'baz'
- import { _, bar, … } from 'baz'
- import { Foo, bar, … } from 'baz'
- import { foo, bar, … } from 'baz'

#### SINGLE

- import _ from 'bar'
- import Foo from 'bar'
- import foo from 'bar'

##### BLANK LINE

### RELATIVE

#### NONE

- import './foo'

#### ALL

- import * as _ from './bar'
- import * as Foo from './bar'
- import * as foo from './bar'
- import _, * as bar from './baz'
- import Foo, * as bar from './baz'
- import foo, * as bar from './baz'

#### MULTIPLE

- import _, { bar, … } from './baz'
- import Foo, { bar, … } from './baz'
- import foo, { bar, … } from './baz'
- import { _, bar, … } from './baz'
- import { Foo, bar, … } from './baz'
- import { foo, bar, … } from './baz'

#### SINGLE

- import _ from './bar'
- import Foo from './bar'
- import foo from './bar'

##### BLANK LINE

## Related

- [import-sort](https://github.com/renke/import-sort) - Sort ES2015 (aka ES6) imports

## License

MIT © 2017 [Alexander Bast](https://github.com/alexanderbast)

**Enjoy!**

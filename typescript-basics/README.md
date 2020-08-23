# Mini Project: Study Typescript - Typescript-basics

## Date: 23 - Aug - 2020

### Core Types

```
number      1, 5.3, -10       All numbers no differentiation between integers or floats
string      'Hi', "Hi", `Hi`  All text values
boolean     true, false       Just these two, no "truthy" or "falsy" values
object      {age: 30}         Any JS object, more specific types are possible
Array       [1,2,3]           Any JS array, type can be flexible or strict (regarding the element types)
Tuple       [1,2]             Added by TypeScript: Fixed-length array
Enum        enum{ NEW, OLD}   Added by TypeScript: Automatically enumerated global constant identifiers
Any         *                 Any kind of value, no specific type assignment
Unknown     *                 Is better than any for the reasons described
```

### Types

- `Union types` are any number of types which are joined by a vertical bar |
- `Literal types` A literal is a more concrete sub-type of a collective type. By using literal types you can allow an exact value which a string, number, or boolean must have.
- `Type Aliases & Object Types / Custom Types` : can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.
- `Function Return Types & \"void"` : void is the standard which u will use in pretty much all scenarios where u have qa function that does not return a value
- `Functions as Types`
- `Function Types & Callbacks`
- `\"never" Type` : is not return anything

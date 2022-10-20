# Types or Interfaces
- Use Interface until you need type 
- always use interface for public API's definition when authoring a library or 3rd party ambient type definitions,as this allows a consumer to extend then via declaration merging if some definitions are missing 
- consider using type for your React Component Props and State, for consistency and because it is more constrained.
- Types are useful for types(e.g. type MyType = TypeA | TypeB) whereas Interface are better for declaring dictionary shapes and then implementing or extending them.
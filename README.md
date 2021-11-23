# parcel-transformer-graphql

A Parcel transformer which allows importing GraphQL schema files. This transformer will automatically wrap the GraphQL Schema with `gql` from `graphql-tag`.

## Installation

Install the plugin via yarn.
```shell
yarn add --dev parcel-transformer-graphql
```

Alternatively, install it with npm.
```shell
npm install --save-dev parcel-transformer-graphql
```

## Usage

Create a `.parcelrc` file in your project root.
```shell
touch .parcelrc
```

Paste the following content.
```json5
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.graphql": ["parcel-transformer-graphql"]
  }
}
```

Write your GraphQL schema.
```graphql
# schema.graphql
type Query {
  ping: String!
}

type Mutation {
  noop: Boolean!
}
```

Import the schema in your code
```typescript
import typeDefs from './schema.graphql';

// ...
```

## Typescript declarations

In order for Typescript to understand the content of an imported GraphQL file, create a `types.d.ts` file in your project with the following declarations.
```typescript
declare module '*.graphql' {
  import { DocumentNode } from 'graphql';
  const Schema: DocumentNode;

  export = Schema
}
```

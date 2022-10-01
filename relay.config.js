module.exports = {
  src: './src',
  schema: './schema/schema.graphql',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  // extensions: ['ts', 'tsx'],
  language: 'typescript',
  artifactDirectory: 'src/queries/__generated__',
}

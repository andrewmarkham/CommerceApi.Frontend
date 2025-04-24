import { CodegenConfig  } from '@graphql-codegen/cli'

const config : CodegenConfig = {
    schema: "https://cg.optimizely.com/content/v2?auth=5yqTqf0yPQTBov4GrbIKHqzV4IbUiIGqQOKbtNAEEgqZtzJq",
    documents: ["src/**/*.{ts,tsx}"],
    ignoreNoDocuments: true,
    generates: {
        './src/graphql/': {
            preset: 'client',
            plugins: [],
        }
    }
}

export default config
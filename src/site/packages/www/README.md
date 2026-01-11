# Jhoose Commerce Demo Site

This is a **demonstration e-commerce website** showcasing the capabilities of the Jhoose Commerce framework. It serves as a reference implementation and testing ground for the Jhoose Commerce API and component library.

## Overview

This demo site is built with Next.js 14+ and demonstrates how to build a modern, multi-language e-commerce application using the Jhoose Commerce ecosystem. It's designed to help developers understand integration patterns, best practices, and the full feature set available in the framework.

## What This Demo Includes

### Core Features
- **Product Catalog**: Browse products with filtering and search capabilities
- **Shopping Cart**: Add, remove, and manage cart items
- **Multi-language Support**: Internationalization (i18n) with English, French, and Swedish
- **Authentication**: Integrated Auth0 for user authentication
- **GraphQL Integration**: Apollo Client for data fetching from the commerce API
- **Responsive Design**: Tailwind CSS for mobile-first responsive layouts
- **Payment Processing**: Stripe payment integration demo

### Technical Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context with Jhoose Commerce providers
- **API Communication**: Apollo Client (GraphQL)
- **Authentication**: Auth0
- **Payment**: Stripe
- **UI Components**: Jhoose Commerce Components library

## Architecture

This demo integrates several packages from the Jhoose Commerce monorepo:

- **`@jhoose/core`**: Core commerce functionality and API client
- **`@jhoose/core-nextjs`**: Next.js-specific helpers and middleware
- **`@jhoose/components`**: Pre-built React UI components
- **`@jhoose/stripe-payment`**: Stripe payment integration components

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Environment variables configured (see `.env.local.example`)

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the demo.

### Environment Configuration

Create a `.env.local` file with the following variables:

```bash
# Auth0 Configuration
AUTH0_SECRET=
AUTH0_BASE_URL=
AUTH0_ISSUER_BASE_URL=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=

# Jhoose Commerce API
NEXT_PUBLIC_API_URL=

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages and layouts
│   ├── [lang]/            # Internationalized routes
│   ├── api/               # API routes
│   └── components/        # Page-specific components
├── dictionaries/          # Translation files (en, fr, sv)
├── graphql/               # GraphQL queries and generated types
└── lib/                   # Utilities and configuration
    ├── apollo-wrapper.tsx # Apollo Client setup
    ├── auth0.ts          # Auth0 configuration
    ├── client.ts         # API client setup
    └── dictionaries.ts   # i18n helpers
```

## Key Integration Points

### Jhoose Commerce Providers

The demo uses context providers from the Jhoose Commerce framework:

- **`JhooseCommerceProvider`**: Root provider for commerce functionality
- **`CartProvider`**: Shopping cart state management
- **`MarketProvider`**: Multi-market and currency support
- **`ProductSummaryProvider`**: Product data context

### Middleware

The Next.js middleware ([middleware.ts](src/middleware.ts)) handles:
- Language detection and routing
- Authentication state
- Market/region selection

### GraphQL Integration

GraphQL queries are co-located with components and use the generated types from the API schema. See [src/graphql](src/graphql) for schema and type definitions.

## Use Cases

This demo site is ideal for:

- **Learning**: Understanding how to integrate Jhoose Commerce into a Next.js application
- **Prototyping**: Quick start for building custom e-commerce solutions
- **Testing**: Validating new features and components from the framework
- **Reference**: Best practices for authentication, state management, and API integration
- **Demonstrations**: Showcasing capabilities to stakeholders or clients

## Important Notes

⚠️ **This is a demo application for development and testing purposes only.**

- Not intended for production use without proper security hardening
- Contains sample data and configurations
- Should be customized and extended for real-world applications
- API keys and secrets should be properly secured in production environments

## Development

### Type Generation

GraphQL types are automatically generated from the API schema:

```bash
npm run codegen
```

### Building for Production

```bash
npm run build
npm run start
```

## Documentation

For more information about the Jhoose Commerce framework:

- [JavaScript API Documentation](../../../docs/javascriptapi.md)
- [Microfrontend Guide](../../../docs/microfrontend.md)
- [Core Package Documentation](../core/README.md)
- [Components Library](../components/README.md)

## Support

This is a demonstration project. For questions about the Jhoose Commerce framework, please refer to the main project documentation or contact the development team.

## License

Part of the Jhoose Commerce API project.

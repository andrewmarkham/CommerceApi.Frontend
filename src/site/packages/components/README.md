# Jhoose Commerce React Component Library

A comprehensive React component library for building e-commerce applications with the Jhoose Commerce API. This package provides pre-built, themeable components, React context providers, custom hooks, and utilities to quickly integrate commerce functionality into your applications.

## Features

### 🛍️ Commerce Components
Pre-built React components for common e-commerce functionality:
- **AddToCart** - Product add-to-cart buttons with quantity selectors
- **MiniCart** - Dropdown shopping cart overview
- **Markets** - Market/region selection interface
- **Pricing** - Product pricing display with currency formatting
- **Checkout** - Checkout flow components

### 🎨 Core UI Components
Reusable UI building blocks:
- **Drawer** - Slide-out panel component
- **Overlay** - Modal overlay backdrop
- **Layout** - Page layout containers
- **Toaster** - Toast notification system
- **Forms** - Form input components
- **Button** - Styled button components
- **Icons** - Icon components (powered by Heroicons)

### ⚙️ React Providers
Context providers for state management:
- **JhooseCommerceProvider** - Main commerce API context and configuration
- **MarketProvider** - Market/region selection and currency management
- **ProductSummaryProvider** - Product data and state management
- **CartProvider** - Shopping cart state and operations

### 🪝 Custom Hooks
Reusable React hooks for commerce operations:
- **useCart** - Access cart state and operations (add, remove, update quantities)
- **useJhooseCommerce** - Access commerce API client and configuration
- **useEscapeKey** - Handle escape key interactions for modals/drawers

### 🔧 Helpers
Utility functions:
- Logging utilities
- Market and currency helpers

## Installation

```bash
# Using npm
npm install @jhoose-commerce/components

# Using yarn
yarn add @jhoose-commerce/components

# Using pnpm
pnpm add @jhoose-commerce/components
```

### Peer Dependencies

This package requires React 19 or higher:

```bash
npm install react@^19.0.0 react-dom@^19.0.0
```

## Usage

### Basic Setup

Wrap your application with the required providers:

```tsx
import { JhooseCommerceProvider, MarketProvider, CartProvider } from '@jhoose-commerce/components';

function App() {
  return (
    <JhooseCommerceProvider
      apiUrl="https://your-api.com"
      apiKey="your-api-key"
    >
      <MarketProvider>
        <CartProvider>
          {/* Your app components */}
        </CartProvider>
      </MarketProvider>
    </JhooseCommerceProvider>
  );
}
```

### Using Components

```tsx
import { AddToCart, MiniCart, Pricing } from '@jhoose-commerce/components';

function ProductPage({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <Pricing productId={product.id} />
      <AddToCart productId={product.id} />
      <MiniCart />
    </div>
  );
}
```

### Using Hooks

```tsx
import { useCart, useJhooseCommerce } from '@jhoose-commerce/components';

function CustomCartButton({ productId }) {
  const { addToCart, cart } = useCart();
  const { client } = useJhooseCommerce();

  const handleAddToCart = async () => {
    await addToCart(productId, 1);
  };

  return (
    <button onClick={handleAddToCart}>
      Add to Cart ({cart?.items?.length || 0})
    </button>
  );
}
```

## Development

### Prerequisites

- Node.js 18+
- Yarn (recommended) or npm

### Setup

```bash
# Install dependencies
yarn install

# Start Storybook for component development
yarn storybook

# Build the library
yarn build

# Format code
yarn format

# Lint code
yarn lint
```

### Storybook

This library uses Storybook for component development and documentation. Run `yarn storybook` to start the development server at `http://localhost:6006`.

### Building

```bash
yarn build
```

This will:
1. Generate TypeScript declarations
2. Build ES and CommonJS modules
3. Output to the `dist/` directory

## Tech Stack

- **React 19+** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **SCSS/PostCSS** - Styling
- **Storybook** - Component documentation
- **Heroicons** - Icon library
- **React Toastify** - Toast notifications
- **@jhoose-commerce/core** - Core API client

## Package Structure

```
src/
├── components/        # UI components
│   ├── Commerce/     # E-commerce specific components
│   ├── Core/         # Reusable UI components
│   ├── Icons/        # Icon components
│   └── button/       # Button components
├── providers/        # React context providers
├── hooks/           # Custom React hooks
├── helpers/         # Utility functions
└── sass/            # Global styles and SCSS utilities
```

## License

ISC

## Author

Andrew Markham

## Repository

- [GitHub Repository](https://github.com/andrewmarkham/CommerceApi.Frontend/tree/main/src/site/packages/components)
- [Issues](https://github.com/andrewmarkham/CommerceApi.Frontend/issues)

## Related Packages

- [@jhoose-commerce/core](../core) - Core API client for Jhoose Commerce
- [@jhoose-commerce/core-nextjs](../core-nextjs) - Next.js integration helpers
- [@jhoose-commerce/stripe-payment](../stripe-payment) - Stripe payment components

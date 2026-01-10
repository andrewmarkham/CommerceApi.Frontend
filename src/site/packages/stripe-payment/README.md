# Jhoose Commerce Stripe Payment extensions

## Overview

The `@jhoose-commerce/stripe-payment` module is a **React component library that provides a complete Stripe-powered checkout flow** for the Jhoose Commerce e-commerce platform. It handles the entire payment journey from address collection to payment confirmation.

## Key Functionality

### 1. **Multi-Step Checkout Process**
The module orchestrates a 3-step checkout wizard:

**Step 1: Address Collection** (`StripeCheckoutAddressStep`)
- Collects shipping address using Stripe's address validation
- Validates completeness before allowing progression
- Saves address to cart via Jhoose Commerce API

**Step 2: Shipping Method Selection** (`StripeCheckoutShippingMethodStep`)
- Lets customers choose delivery options
- Updates cart with selected shipping method

**Step 3: Payment Processing** (`StripeCheckoutPaymentStep`)
- Collects payment details using Stripe's `PaymentElement`
- Collects billing address using Stripe's `AddressElement`
- Creates payment intent via your backend
- Confirms payment through Stripe
- Redirects to success page with `?checkout_finished=true` query parameter

### 2. **Stripe Integration Architecture**

```typescript
// Loads Stripe.js SDK once
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY ?? "");

// Configures Stripe Elements with cart details
const stripeOptions: StripeElementsOptions = {
    mode: 'payment',
    locale: marketContext.language,        // Auto-localizes UI
    amount: (cart?.totalPrice ?? 0) * 100, // Converts to cents
    currency: cart?.currency.code,
    appearance: { theme: 'stripe' }
};
```

### 3. **Backend Communication Flow**

The payment flow works like this:

```
1. Customer clicks "Pay"
   ↓
2. Module calls → /commerceapi/stripe/paymentintent/{cartId}
   ← Returns: { clientSecret, paymentId, paymentMethodId }
   ↓
3. Module calls → Jhoose Commerce API: checkout.addPayment()
   (Saves payment record with status "Processed")
   ↓
4. Module calls → stripe.confirmPayment()
   (Stripe handles 3D Secure, card verification, etc.)
   ↓
5. Redirect → {returnUrl}/{cartId}/?checkout_finished=true
```

### 4. **Key Features**

✅ **Automatic Currency Handling**: Converts amounts to minor units (cents/pence) for Stripe
✅ **Internationalization**: Adapts to market context (language, currency, allowed countries)
✅ **Real-time Validation**: Each step validates before enabling "Continue"
✅ **Cart Synchronization**: Updates Jhoose Commerce cart as user progresses
✅ **Stripe-Native Components**: Uses official Stripe React components (secure, PCI-compliant)
✅ **Progressive Disclosure**: Collapsible panels show completed step summaries

## Integration Example

```tsx
import { StripeCheckout } from '@jhoose-commerce/stripe-payment';

<StripeCheckout
  checkoutLabels={{
    contactDetails: { sectionHeading: "Shipping Address", ... },
    shippingMethod: { sectionHeading: "Delivery Options", ... },
    payment: { sectionHeading: "Payment Details", ... }
  }}
  cartLabels={{ ... }}
  returnUrl="https://yoursite.com/order-confirmation/"
/>
```

## Dependencies

**Peer Dependencies** (must be installed by consumer):
- `@jhoose-commerce/components` - UI components (cart, forms, checkout steps)
- `@jhoose-commerce/core` - API client and data types
- `react` ≥19.0.0
- `stripe` ^18 - Stripe SDK

**Stripe React Libraries** (built-in):
- `@stripe/react-stripe-js` - React bindings
- `@stripe/stripe-js` - Stripe.js loader

## What It's NOT

❌ **Not a backend service** - Requires a backend endpoint at `/commerceapi/stripe/paymentintent/{cartId}`
❌ **Not a standalone checkout** - Depends on Jhoose Commerce API for cart management
❌ **Not payment method agnostic** - Specifically designed for Stripe payments only

## Common Use Cases

1. **Headless Commerce**: Drop-in Stripe checkout for custom Next.js storefronts
2. **Multi-Market Stores**: Handles different currencies and locales automatically
3. **React Applications**: Pre-built components save weeks of Stripe integration work

## Gotchas

⚠️ **Environment Variable Required**: Must set `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` or pass key explicitly
⚠️ **Backend Dependency**: You must implement the `/commerceapi/stripe/paymentintent` endpoint
⚠️ **Cart State Management**: Relies on Jhoose Commerce cart context being available via `useCart()` hook

This module essentially **bridges Stripe's payment infrastructure with Jhoose Commerce's cart/order management**, providing a production-ready checkout experience with minimal configuration.
# KonnectImpact - Staging Repository

A comprehensive loyalty-to-impact platform that transforms customer loyalty points into meaningful community contributions. This repository merges all module repositories into a unified staging environment.

## 🚀 Features Overview

### ✅ **Gamified Leaderboard & Impact Dashboard**

- **Advanced Leaderboard System** (`/leaderboard-advanced`) - Full featured leaderboard with impact tracking
- **Influencer Leaderboard** (`/influencer-leaderboard`) - Top referrers and community leaders
- **Unified Dashboard** (`/dashboard`) - Comprehensive admin and user dashboard
- **Impact Analytics** - Real-time tracking of carbon offset, donations, and user engagement

### ✅ **Partner Admin & Campaign Management**

- **Campaign Creation** (`/create`) - Create and manage impact campaigns
- **Partner Management** (`/partner`) - Partner campaign oversight
- **Admin Authentication** - Secure login system with role-based access
- **Campaign Analytics** - Track campaign performance and fees

### ✅ **Payments Integration (All Variants)**

- **Unified Payment Hub** (`/payments`) - Central payment selection interface
- **Payment Portal (Aman)** (`/payment-aman`) - Full-featured payment experience with impact tracking
- **Transaction Hub (Ashwini)** (`/payment-ashwini`) - Payment with transaction history
- **Simple Payment (Myousef)** (`/payment-myousef`) - Streamlined Stripe integration
- **Stripe Integration** - Secure payment processing with multiple UI variants

### ✅ **Raffle & Interactive Logic**

- **Raffle System** (`/raffle`) - Interactive raffle participation
- **Raffle Dashboard** (`/raffle-dashboard`) - Raffle management and tracking
- **Ticket Management** - Automated ticket awarding system
- **Interactive Elements** - Gamified user engagement features

### ✅ **Redemption & Donation Forms**

- **Donation Portal** (`/donation`) - Point donation to community causes
- **Redemption System** (`/redemption`) - Exchange points for rewards
- **Multiple Form Variants** - Different UX approaches for user preference
- **Impact Tracking** - Real-time feedback on donation impact

### ✅ **SEO/Content Setup**

- **SEO Module** (`/seo`) - Search engine optimization tools
- **Content Management** - Dynamic content delivery
- **Meta Tag Management** - Automated SEO optimization

### ✅ **Site Shell & Hero**

- **Hero Section** (`/hero`) - Engaging landing page hero
- **Home Layout** (`/landing`) - Complete homepage experience
- **Responsive Design** - Mobile-first approach
- **Brand Consistency** - Unified KonnectImpact branding

### ✅ **Transaction History**

- **Transaction Tracking** (`/transactions`) - Comprehensive transaction logging
- **History Dashboard** (`/transaction-history`) - Detailed transaction analytics
- **Multiple Views** - Different perspectives on transaction data
- **Export Capabilities** - Data export functionality

## 🛠 Technology Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS + PostCSS
- **Language**: JavaScript + TypeScript (mixed)
- **State Management**: React Context API
- **Routing**: React Router v6
- **Charts**: Recharts
- **Icons**: React Icons + Lucide React
- **Payments**: Stripe Integration
- **Testing**: Vitest + React Testing Library
- **Build Tool**: Vite
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── UnifiedDashboard.jsx    # Main dashboard combining all features
│   ├── UnifiedPayment.jsx      # Payment hub with all variants
│   ├── Sidebar.jsx             # Navigation with all routes
│   └── ...                     # Individual components
├── modules/              # Feature modules
│   ├── donation/         # Donation functionality
│   ├── hero/            # Hero section
│   ├── homePage/        # Homepage layout
│   ├── leaderboard/     # Leaderboard system
│   ├── paymentAman/     # Payment variant (Aman)
│   ├── paymentAshwini/  # Payment variant (Ashwini)
│   ├── payment-Myousef/ # Payment variant (Myousef)
│   ├── raffle/          # Raffle system
│   ├── seo/             # SEO tools
│   └── transitionHistory/ # Transaction tracking
├── context/             # React Context providers
│   ├── AdminContext.jsx # Admin state management
│   ├── RaffleContext.tsx # Raffle state management
│   └── ToastContext.tsx  # Notification system
├── page/                # Page-level components
└── services/            # API services
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd konnectimpact-staging
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Create .env file in root directory
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Start the backend server** (in separate terminal)
   ```bash
   cd server
   npm install
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## 🔗 Route Structure

### Public Routes

- `/` - Login page
- `/hero` - Hero landing page
- `/landing` - Homepage layout
- `/success` - Payment success page
- `/cancel` - Payment cancellation page

### Protected Admin Routes

- `/dashboard` - Unified dashboard (main)
- `/create` - Campaign creation
- `/partner` - Partner management

### Feature Routes

- `/leaderboard` - Basic leaderboard
- `/leaderboard-advanced` - Advanced leaderboard
- `/influencer-leaderboard` - Influencer rankings
- `/raffle/*` - Raffle system (with sub-routes)
- `/raffle-dashboard` - Raffle management
- `/donation` - Donation portal
- `/redemption` - Point redemption
- `/payments/*` - Unified payment hub
- `/payment-aman` - Payment portal (Aman variant)
- `/payment-ashwini/*` - Transaction hub (Ashwini variant)
- `/payment-myousef/*` - Simple payment (Myousef variant)
- `/transactions` - Transaction tracking
- `/transaction-history` - Transaction analytics
- `/seo` - SEO management

## 🎯 Key Integration Points

### Context Providers

All modules now share unified context providers:

- `AdminContext` - User authentication and campaign management
- `RaffleContext` - Raffle state and ticket management
- `ToastContext` - Global notification system

### Navigation

Unified sidebar navigation provides access to all modules with proper routing and authentication checks.

### Payment Integration

All payment variants are accessible through:

1. Unified Payment Hub (`/payments`) - Central selection interface
2. Individual payment routes for specific implementations
3. Shared success/cancel pages

### Dashboard Integration

The UnifiedDashboard combines:

- Campaign management
- Analytics and charts
- Quick action buttons
- Raffle dashboard integration
- Real-time statistics

## 🔧 Configuration

### Stripe Configuration

Update the Stripe keys in:

- `server/index.js` - Backend configuration
- `src/components/CheckoutButton.jsx` - Frontend configuration

### API Endpoints

Backend server runs on `http://localhost:4242` with endpoints:

- `POST /create-checkout-session` - Stripe payment session creation

### Proxy Configuration

Vite proxy configuration in `vite.config.js`:

```javascript
server: {
  proxy: {
    '/api': 'http://localhost:5000'
  }
}
```

## 🧪 Testing

Run the test suite:

```bash
npm run test
```

Tests are configured with Vitest and include:

- Component testing with React Testing Library
- Integration tests for key workflows
- Mock implementations for external services

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

The build outputs to the `dist/` directory and is ready for deployment to any static hosting service.

## 📝 Development Notes

### Module Integration Status

- ✅ All payment modules integrated and accessible
- ✅ Leaderboard systems unified with multiple variants
- ✅ Raffle system integrated with proper routing
- ✅ Transaction history modules accessible
- ✅ Donation/redemption forms integrated
- ✅ SEO module integrated
- ✅ Hero/homepage modules accessible
- ✅ Admin/campaign management fully functional

### Context Management

All modules now share the same context providers, eliminating conflicts and ensuring consistent state management across the application.

### Routing Architecture

The routing system supports:

- Nested routes for complex modules
- Protected routes with authentication
- Public routes for landing pages
- Fallback routing for error handling

## 🤝 Contributing

1. Create feature branches for new modules
2. Ensure all modules integrate with the unified dashboard
3. Update routing in `App.jsx` and `Sidebar.jsx`
4. Add context providers to `main.jsx` if needed
5. Update this README with new features

## 📄 License

This project is part of the KonnectImpact platform development.

---

**KonnectImpact** - Transforming loyalty into meaningful community impact. 🌱

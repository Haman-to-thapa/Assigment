require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Debug: Check if environment variable is loaded
console.log("STRIPE_SECRET_KEY loaded:", process.env.STRIPE_SECRET_KEY ? "✅ Yes" : "❌ No");
console.log("Key type:", process.env.STRIPE_SECRET_KEY?.startsWith('sk_') ? "✅ Secret Key" : "❌ Publishable Key (Wrong!)");

// Check if we have a valid secret key
if (!process.env.STRIPE_SECRET_KEY) {
  console.error("❌ STRIPE_SECRET_KEY not found in environment variables");
  process.exit(1);
}

if (!process.env.STRIPE_SECRET_KEY.startsWith('sk_')) {
  console.warn("⚠️  Warning: Using publishable key instead of secret key - this may not work for real payments");
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 4242;

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://konnectimpact-staging.vercel.app",
  "https://candidate-001-konnectimpact-module-payments.vercel.app",
  // Add your actual frontend deployment URLs here
  "https://assignmenttask-frontend.vercel.app",
  "https://konnectimpact-frontend.netlify.app",
  // Allow any vercel.app subdomain for your project
  /https:\/\/.*\.vercel\.app$/,
  /https:\/\/.*\.netlify\.app$/
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(bodyParser.json());

// Test endpoint
app.get("/", (req, res) => {
  res.json({
    message: "🚀 Stripe Payment Server is running!",
    stripe_configured: !!process.env.STRIPE_SECRET_KEY,
    key_type: process.env.STRIPE_SECRET_KEY?.startsWith('sk_') ? 'secret' : 'publishable'
  });
});

app.post("/create-checkout-session", async (req, res) => {
  try {
    console.log("🔄 Creating checkout session...");

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Top Up Points",
              description: "Add points to your KonnectImpact account"
            },
            unit_amount: 100, // €1.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: process.env.FRONTEND_URL
        ? `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`
        : "http://localhost:5174/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: process.env.FRONTEND_URL
        ? `${process.env.FRONTEND_URL}/failure`
        : "http://localhost:5174/failure",
      automatic_tax: { enabled: false },
    });

    console.log("✅ Checkout session created:", session.id);
    console.log("🔗 Checkout URL:", session.url);

    res.json({
      id: session.id,
      url: session.url
    });

  } catch (error) {
    console.error("❌ Checkout Error:", error.message);
    console.error("Full error:", error);
    res.status(500).json({
      error: error.message,
      type: error.type || 'api_error'
    });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
import React, { useEffect } from 'react';
import './index.css'

export default function PaymentAman() {
  useEffect(() => {
    import('lucide').then(lucide => lucide.createIcons());

    const animateCounter = (elementId, end) => {
      const el = document.getElementById(elementId);
      if (!el) return;

      let start = 0;
      let duration = 2000;
      let startTimestamp = null;

      const step = timestamp => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        el.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    animateCounter("counter1", 8500);
    animateCounter("counter2", 240);
    animateCounter("counter3", 13500);
    animateCounter("counter4", 92);
  }, []);

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Roboto:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <header>
        <div className="container">
          <div className="hero-content fade-in">
            <h1>KonnectImpact</h1>
            <p className="subtitle">Turn Loyalty into Impact</p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav>
        <div className="container">
          <div className="nav-content">
            <div className="logo">KonnectImpact</div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#impact">Impact</a></li>
              <li><a href="#rewards">Rewards</a></li>
              <li><a href="#community">Community</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <div className="container">
          {/* Introduction Section */}
          <section className="section">
            <h2 className="section-title">Transform Loyalty into Meaningful Change</h2>
            <div className="content-grid">
              <ContentCard icon="heart" title="Redeem for Impact" text="Your accumulated points become powerful tools..." />
              <ContentCard icon="users" title="Drive Community Growth" text="Watch your loyalty points multiply their impact..." />
            </div>
          </section>

          {/* Points Progress Section */}
          <section className="points-section bounce-in">
            <div className="points-header">
              <div>
                <h3>Your Impact Points</h3>
                <div className="points-balance">2,450 Points</div>
              </div>
              <div className="btn-group">
                <a href="#" className="btn btn-primary">Redeem Points</a>
                <a href="#" className="btn btn-ghost">Donate Points</a>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <p style={{ color: "var(--text-light)", marginTop: "1rem" }}>
              68% towards your next impact milestone • 1,550 points to go
            </p>
          </section>

          {/* Impact Stats */}
          <section className="impact-stats">
            <div className="container">
              <h2 className="section-title">Our Collective Impact</h2>
              <div className="stats-grid">
                <Stat id="counter1" label="Points Redeemed" />
                <Stat id="counter2" label="Communities Supported" />
                <Stat id="counter3" label="Active Members" />
                <Stat id="counter4" label="Projects Funded" />
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="section">
            <h2 className="section-title">How Your Points Create Impact</h2>
            <div className="content-grid">
              <ContentCard icon="gift" title="Earn Points" text="Accumulate loyalty points through purchases..." />
              <ContentCard icon="target" title="Choose Your Cause" text="Select from verified community projects..." />
              <ContentCard icon="trending-up" title="Track Impact" text="Monitor your contributions and see real-world impact..." />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <FooterSection title="About KonnectImpact" links={["Transforming customer loyalty into community impact..."]} />
            <FooterSection title="Quick Links" links={["How It Works", "Our Partners", "Impact Stories"]} />
            <FooterSection title="Support" links={["Help Center", "Contact Us", "Terms & Privacy"]} />
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 KonnectImpact. All rights reserved. | Building bridges between loyalty and community impact.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function ContentCard({ icon, title, text }) {
  return (
    <div className="content-card fade-in">
      <div className="card-icon">
        <i data-lucide={icon} color="white" size="24"></i>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
    </div>
  );
}

function Stat({ id, label }) {
  return (
    <div className="stat-item bounce-in">
      <div className="stat-number" id={id}>0</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function FooterSection({ title, links }) {
  return (
    <div className="footer-section">
      <h3>{title}</h3>
      {links.map((link, i) =>
        link.includes("http") || link.includes(" ") ? <p key={i}>{link}</p> : <p key={i}><a href="#">{link}</a></p>
      )}
    </div>
  );
}

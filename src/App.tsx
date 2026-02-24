import React, { useState, useEffect } from 'react';
import { Nav } from './sections/Nav';
import { Hero } from './sections/Hero';
import { Problem } from './sections/Problem';
import { Flywheel } from './sections/Flywheel';
import { GrowthPillars } from './sections/GrowthPillars';
import { Pricing } from './sections/Pricing';
import { Testimonials } from './sections/Testimonials';
import { FinalCTA } from './sections/FinalCTA';
import { HowItWorks } from './sections/HowItWorks';
import { Footer } from './sections/Footer';
import { BookCall } from './pages/BookCall';
import { Legal } from './pages/Legal';
import { Checkout } from './pages/Checkout';
import { ThankYou } from './pages/ThankYou';
import { PaymentCanceled } from './pages/PaymentCanceled';
import { Upsell } from './pages/Upsell';

export default function App() {
  const [currentPath, setCurrentPath] = useState('/');

  // Simple Router Logic
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);
      window.scrollTo(0, 0);

      // Hide chat widget on demo pages by adding class to body
      if (path.startsWith('/demo')) {
        document.body.classList.add('is-demo-page');
      } else {
        document.body.classList.remove('is-demo-page');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    // Handle initial load
    handleLocationChange();

    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (path: string) => {
    // If it's a section anchor on the home page, just scroll
    if (path.startsWith('#') && currentPath === '/') {
      const el = document.querySelector(path);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // Otherwise update path which triggers our router
    window.history.pushState({}, '', path);
    // Manually trigger handleLocationChange because pushState doesn't trigger popstate
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/book-call':
        return <BookCall />;
      case '/checkout':
        return <Checkout />;
      case '/thank-you':
        return <ThankYou />;
      case '/upsell':
        return <Upsell />;
      case '/payment-canceled':
        return <PaymentCanceled />;
      case '/legal':
      case '/privacy':
      case '/terms':
        return <Legal />;
      default:
        return (
          <>
            <Hero onNavigate={navigate} />
            <Problem onNavigate={navigate} />
            <Flywheel onNavigate={navigate} />
            <GrowthPillars onNavigate={navigate} />
            <Pricing onNavigate={navigate} />
            <Testimonials />
            <HowItWorks onNavigate={navigate} />
            <FinalCTA onNavigate={navigate} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-accent selection:text-dark overflow-x-hidden">
      <Nav
        onNavigate={navigate}
        isSubpage={currentPath !== '/'}
      />

      <main>
        {renderPage()}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}

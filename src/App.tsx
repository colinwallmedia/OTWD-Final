import React, { useState, useEffect } from 'react';
import { Nav } from './sections/Nav';
import { Hero } from './sections/Hero';
import { Problem } from './sections/Problem';
import { Flywheel } from './sections/Flywheel';
import { Features } from './sections/Features';
import { HowItWorks } from './sections/HowItWorks';
import { Pricing } from './sections/Pricing';
import { Testimonials } from './sections/Testimonials';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';
import { BookCall } from './pages/BookCall';
import { Legal } from './pages/Legal';
import { LeadCaptureDemo } from './pages/demos/LeadCapture';
import { AIAgentDemo } from './pages/demos/AIAgent';
import { ReviewEngineDemo } from './pages/demos/ReviewEngine';
import { DemoPopup } from './components/DemoPopup';

export default function App() {
  const [currentPath, setCurrentPath] = useState('/');
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);

  // Simple Router Logic
  useEffect(() => {
    const handleLocationChange = () => {
      // We'll use a simple path state, but since we're in a single page app without a real router,
      // we'll handle internal navigation via state. We also check for hash-style navigation.
      const path = window.location.hash.replace('#', '') || '/';
      // Only update if it looks like a real path and not a section anchor
      if (path.startsWith('/') || path === '') {
        setCurrentPath(path || '/');
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleLocationChange);
    // Handle initial load
    handleLocationChange();

    return () => window.removeEventListener('hashchange', handleLocationChange);
  }, []);

  const navigate = (path: string) => {
    // If it's a section anchor on the home page, just scroll
    if (path.startsWith('#') && currentPath === '/') {
      const el = document.querySelector(path);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // Otherwise update hash which triggers our router
    window.location.hash = path;
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/book-call':
        return <BookCall />;
      case '/legal':
      case '/privacy':
      case '/terms':
        return <Legal />;
      case '/demo/lead-capture':
        return <LeadCaptureDemo />;
      case '/demo/ai-agent':
        return <AIAgentDemo />;
      case '/demo/review-engine':
        return <ReviewEngineDemo />;
      default:
        return (
          <>
            <Hero
              onNavigate={navigate}
              onOpenDemo={() => setIsDemoPopupOpen(true)}
            />
            <Problem />
            <Flywheel />
            <Features />
            <HowItWorks onOpenDemo={() => setIsDemoPopupOpen(true)} />
            <Pricing onNavigate={navigate} />
            <Testimonials />
            <FinalCTA onNavigate={navigate} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-accent selection:text-dark overflow-x-hidden">
      <Nav
        onNavigate={navigate}
        onOpenDemo={() => setIsDemoPopupOpen(true)}
        isSubpage={currentPath !== '/'}
      />

      <main>
        {renderPage()}
      </main>

      <Footer onNavigate={navigate} />

      <DemoPopup
        isOpen={isDemoPopupOpen}
        onClose={() => setIsDemoPopupOpen(false)}
        onNavigate={navigate}
      />
    </div>
  );
}

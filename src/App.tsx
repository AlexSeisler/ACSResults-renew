import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Spotlight from './components/Spotlight';
import FeaturedPortfolio from './components/FeaturedPortfolio';
import StudentPortfolios from './components/StudentPortfolios';
import Mission from './components/Mission';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { ScrollProgress } from './components/common/ScrollProgress';
import { FloatingCTA } from './components/common/FloatingCTA';
import { ChatWidget } from './components/common/ChatWidget';
import { AnimatedSection } from './components/AnimatedSection';
import { OnboardingPage } from './components/Onboarding/OnboardingPage';
import { SuccessPage } from './components/Onboarding/SuccessPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/" element={
          <div className="min-h-screen bg-[#0e0e0c]">
            <ScrollProgress />
            <Header />
            <Hero />
            <div className="relative space-y-32">
              <AnimatedSection variant="dark">
                <Spotlight />
              </AnimatedSection>
              <AnimatedSection variant="dark">
                <FeaturedPortfolio />
              </AnimatedSection>
              <AnimatedSection variant="dark">
                <StudentPortfolios />
              </AnimatedSection>
              <AnimatedSection variant="dark">
                <Mission />
              </AnimatedSection>
              <AnimatedSection variant="dark">
                <Testimonials />
              </AnimatedSection>
              <AnimatedSection variant="light">
                <Pricing />
              </AnimatedSection>
            </div>
            <Footer />
            <FloatingCTA />
            <ChatWidget />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
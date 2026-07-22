/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SeoHead } from './components/SeoHead';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickAccess } from './components/QuickAccess';
import { About } from './components/About';
import { Differentiators } from './components/Differentiators';
import { AdvancedFeatures } from './components/AdvancedFeatures';
import { Products } from './components/Products';
import { Solutions } from './components/Solutions';
import { Economy } from './components/Economy';
import { Trust } from './components/Trust';
import { Areas } from './components/Areas';
import { Contact } from './components/Contact';
import { CTAFinal } from './components/CTAFinal';
import { Footer, FloatingActions } from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <SeoHead />
      <Header />
      
      <main>
        <Hero />
        <QuickAccess />
        <About />
        <Differentiators />
        <AdvancedFeatures />
        <Products />
        <Solutions />
        <Economy />
        <Trust />
        <Areas />
        <Contact />
        <CTAFinal />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

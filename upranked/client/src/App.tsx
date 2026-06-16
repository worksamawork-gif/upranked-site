import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Pricing from "./pages/Pricing";

// SEO / Industry pages
import MedicalSEO from "./pages/services/MedicalSEO";
import IndustrialSEO from "./pages/services/IndustrialSEO";
import BusinessSEO from "./pages/services/BusinessSEO";

// Growth Intelligence pages
import BusinessConsultation from "./pages/services/BusinessConsultation";
import TailoredTools from "./pages/services/TailoredTools";
import TailoredWebsite from "./pages/services/TailoredWebsite";
import BusinessStrategy from "./pages/services/BusinessStrategy";

// Methodology
import Methodology from "./pages/Methodology";

// Hub pages
import Industries from "./pages/Industries";
import GrowthIntelligence from "./pages/GrowthIntelligence";
import SEOHub from "./pages/SEOHub";

// SEO cluster pages
import OnPageSEO from "./pages/seo/OnPageSEO";
import OffPageSEO from "./pages/seo/OffPageSEO";
import TechnicalSEO from "./pages/seo/TechnicalSEO";
import SchemaSEO from "./pages/seo/SchemaSEO";
import LocalSEO from "./pages/seo/LocalSEO";
import BilingualSEO from "./pages/seo/BilingualSEO";
import SEOAnalytics from "./pages/seo/SEOAnalytics";
import ContentArchitecture from "./pages/seo/ContentArchitecture";
import GeoSEO from "./pages/seo/GeoSEO";
import AEOSEO from "./pages/seo/AEOSEO";

// Markets pages
import GCCMarkets from "./pages/markets/gcc/GCCMarkets";
import DubaiMarket from "./pages/markets/gcc/uae/DubaiMarket";
import RiyadhMarket from "./pages/markets/gcc/ksa/RiyadhMarket";
import KuwaitMarket from "./pages/markets/gcc/kuwait/KuwaitMarket";
import BahrainMarket from "./pages/markets/gcc/bahrain/BahrainMarket";
import LondonMarket from "./pages/markets/uk/LondonMarket";
import NewYorkMarket from "./pages/markets/usa/NewYorkMarket";
import GermanyMarket from "./pages/markets/eu/GermanyMarket";
import FranceMarket from "./pages/markets/eu/FranceMarket";

// Blog
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// Legal
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// WhatsApp floating button
import WhatsAppButton from "./components/WhatsAppButton";

function PublicRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      {/* Core pages */}
      <Route path="/about" component={About} />
      <Route path="/methodology" component={Methodology} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/pricing" component={Pricing} />

      {/* Hub routes */}
      <Route path="/seo" component={SEOHub} />
      <Route path="/seo-industries" component={Industries} />
      <Route path="/growth-intelligence" component={GrowthIntelligence} />

      {/* SEO / Industry routes */}
      <Route path="/industries/medical-seo" component={MedicalSEO} />
      <Route path="/industries/industrial-seo" component={IndustrialSEO} />
      <Route path="/industries/business-seo" component={BusinessSEO} />

      {/* Growth Intelligence routes */}
      <Route path="/growth-intelligence/consultation" component={BusinessConsultation} />
      <Route path="/growth-intelligence/tools" component={TailoredTools} />
      <Route path="/growth-intelligence/websites" component={TailoredWebsite} />
      <Route path="/growth-intelligence/strategy" component={BusinessStrategy} />

      {/* SEO cluster routes */}
      <Route path="/seo/on-page" component={OnPageSEO} />
      <Route path="/seo/off-page" component={OffPageSEO} />
      <Route path="/seo/technical" component={TechnicalSEO} />
      <Route path="/seo/schema" component={SchemaSEO} />
      <Route path="/seo/local" component={LocalSEO} />
      <Route path="/seo/bilingual" component={BilingualSEO} />
      <Route path="/seo/analytics" component={SEOAnalytics} />
      <Route path="/seo/content-architecture" component={ContentArchitecture} />
      <Route path="/seo/geo" component={GeoSEO} />
      <Route path="/seo/aeo" component={AEOSEO} />

      {/* Markets routes */}
      <Route path="/markets/gcc" component={GCCMarkets} />
      <Route path="/markets/gcc/uae/dubai" component={DubaiMarket} />
      <Route path="/markets/gcc/ksa/riyadh" component={RiyadhMarket} />
      <Route path="/markets/gcc/kuwait" component={KuwaitMarket} />
      <Route path="/markets/gcc/bahrain" component={BahrainMarket} />
      <Route path="/markets/uk/london" component={LondonMarket} />
      <Route path="/markets/usa/new-york" component={NewYorkMarket} />
      <Route path="/markets/eu/germany" component={GermanyMarket} />
      <Route path="/markets/eu/france" component={FranceMarket} />

      {/* Blog */}
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />

      {/* Legal */}
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />

      {/* Fallback */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  const [location] = useLocation();
  if (location.startsWith('/admin')) return <Admin />;

  return (
    <>
      <div className="min-h-screen bg-navy text-white flex flex-col">
        <Navigation />
        <main className="flex-1">
          <PublicRouter />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
      <Toaster />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <AppContent />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

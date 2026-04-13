import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Destinations from "./pages/Destinations";
import Safety from "./pages/Safety";
import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Visa from "./pages/Visa";
import Testimonials from "./pages/Testimonials";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  return (
    <Router basename="/CE">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/safety" element={<Safety />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/visa" element={<Visa />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

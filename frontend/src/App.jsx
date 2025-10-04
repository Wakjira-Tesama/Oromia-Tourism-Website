import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import QuestionPage from "./pages/QuestionPage";
import ContactPage from "./pages/Contact";
import Services from "./pages/Services";
import BookingPage from "./pages/Booking";
import RegistrationForm from "./Components/RegistrationForm";
import LoginForm from "./Components/login";
import CheckForBooking from "./Components/CheckForBooking";
import TermsPage from "./Components/Terms";
import ProtectedRoute from "./Components/protectedRoute";

// Destinations
import AbijtaPage from "./pages/Destinations/Abijata";
import BorenaPage from "./pages/Destinations/Borena";
import LanganoPage from "./pages/Destinations/Langano";
import Haramaya from "./pages/Destinations/Haramaya";
import WenchiPage from "./pages/Destinations/Wenchi";
import AwashPage from "./pages/Destinations/Awash";
import SofOmarPage from "./pages/Destinations/sofOmar";
import BaleMountains from "./pages/Destinations/Bale";
import IrreachaPage from "./pages/Destinations/Irreecha";
import GadaaPage from "./pages/Destinations/Gada";

// Things to do
import HikingPage from "./pages/hikingPage";
import WildlifeSafarisPage from "./pages/wildLife";

// Additionals
import Films from "./pages/FilmsPage";
import Foods from "./pages/FoodsPage";
import Dressing from "./pages/DressingsPage";
import Music from "./pages/MusicsPage";

// Users sub-app
// 👈 asxaa sirrii ilaali

import "./App.css";

function ScrollToTop() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Frontend routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ask" element={<QuestionPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Protected route */}
        <Route element={<ProtectedRoute />}>
          <Route path="/booking-form" element={<BookingPage />} />
        </Route>
        <Route path="/booking" element={<CheckForBooking />} />

        {/* Destinations */}
        <Route path="/destination/bale" element={<BaleMountains />} />
        <Route path="/destination/abijata" element={<AbijtaPage />} />
        <Route path="/destination/borena" element={<BorenaPage />} />
        <Route path="/destination/langano" element={<LanganoPage />} />
        <Route path="/destination/haramaya" element={<Haramaya />} />
        <Route path="/destination/wenchi" element={<WenchiPage />} />
        <Route path="/destination/sof-omar" element={<SofOmarPage />} />
        <Route path="/destination/irreecha" element={<IrreachaPage />} />
        <Route path="/destination/gadaa" element={<GadaaPage />} />
        <Route path="/destination/awash" element={<AwashPage />} />

        {/* Things to Do */}
        <Route path="/todo/hiking" element={<HikingPage />} />
        <Route
          path="/todo/wildlife-safaris"
          element={<WildlifeSafarisPage />}
        />

        {/* Additionals */}
        <Route path="/additionals/films" element={<Films />} />
        <Route path="/additionals/foods" element={<Foods />} />
        <Route path="/additionals/dressings" element={<Dressing />} />
        <Route path="/additionals/musics" element={<Music />} />

        <Route path="/terms" element={<TermsPage />} />

        {/* Users sub-app */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

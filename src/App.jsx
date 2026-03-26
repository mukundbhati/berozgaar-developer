import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const WA_LINK = "https://wa.me/919269048587";
const IG_LINK = "https://instagram.com/berozgaar_developer";

function Navbar() {
  return (
    <div className="p-4 bg-white shadow flex justify-between items-center sticky top-0 z-50">
      <h1 className="font-bold text-lg">Berozgaar Developer</h1>
      <a href="#pricing" className="text-sm">Pricing</a>
    </div>
  );
}

function Hero() {
  return (
    <section className="text-center py-20 bg-[#f5e6da]">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Get your business online
        <br /> without the headache
      </h1>
      <p className="mt-4 text-lg">
        Clean, modern websites starting at ₹3499
      </p>
      <div className="mt-6 flex justify-center">
        <Link to="/demo" className="px-8 py-3 bg-black text-white rounded-xl hover:scale-105 transition">
          See your future site
        </Link>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        No technical knowledge needed • Perfect for small businesses
      </p>
    </section>
  );
}

function Features() {
  const features = [
    "Mobile-friendly website",
    "Menu / services section",
    "Contact & location",
    "WhatsApp integration",
    "Instagram integration",
    "Fast loading & clean UI"
  ];

  return (
    <section className="p-10 text-center">
      <h2 className="text-2xl font-semibold">What You Get</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {features.map((f, i) => (
          <div key={i} className="p-5 bg-white shadow-lg rounded-xl hover:scale-105 transition">
            {f}
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const data = [
    "Got my business online in few days",
    "Affordable and actually useful for my business.",
    "Customers now find us easily on Google."
  ];

  return (
    <section className="p-10 bg-white text-center">
      <h2 className="text-2xl font-semibold">What clients say</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {data.map((t, i) => (
          <div key={i} className="p-5 bg-[#fdf6f0] shadow rounded-xl">{t}</div>
        ))}
      </div>
    </section>
  );
}

// DEMO PAGE
function DemoPage() {
  return (
    <div className="bg-[#fdf6f0] text-gray-800">

      <div className="text-center py-16 bg-[#f5e6da]">
        <h1 className="text-4xl font-bold">Brew Haven Cafe</h1>
        <p className="mt-2">Coffee. Conversations. Comfort.</p>
        <p className="mt-2 text-sm text-gray-600">
          This is what our starter package looks like
        </p>
      </div>

      <div className="p-10">
        <img 
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb"
          alt="cafe"
          className="rounded-xl w-full h-64 object-cover"
        />
      </div>

      <div className="p-10 text-center">
        <h2 className="text-2xl font-semibold">About Us</h2>
        <p className="mt-4 max-w-xl mx-auto">
          A small cozy cafe where you can relax, enjoy fresh coffee, and spend quality time.
        </p>
      </div>

      <div className="p-10 bg-white text-center">
        <h2 className="text-2xl font-semibold">Menu</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-[#fdf6f0] rounded shadow">Pizza</div>
          <div className="p-4 bg-[#fdf6f0] rounded shadow">Cold Coffee</div>
          <div className="p-4 bg-[#fdf6f0] rounded shadow">Sandwich</div>
        </div>
      </div>

      <div className="p-10 text-center">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4">📍 Jaipur</p>
        <p>📞 98xxxxxxxx</p>
        <p className="mt-2">📧 your.mail@gmail.com</p>

        <div className="flex justify-center gap-4 mt-6 text-white">
          <a href={WA_LINK} className="p-3 bg-green-500 rounded-full">💬</a>
          <a href={IG_LINK} className="p-3 bg-pink-500 rounded-full">📷</a>
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="p-10 text-center">
      <h2 className="text-2xl font-semibold">Pricing</h2>
      <div className="grid md:grid-cols-4 gap-6 mt-6">

        <div className="p-6 bg-white shadow-xl rounded-xl">
          <h3 className="font-bold text-lg">Starter</h3>
          <p className="text-xl font-semibold">₹3499</p>
          <ul className="mt-4 text-sm space-y-2">
            <li>WhatsApp integration</li>
            <li>Instagram integration</li>
          </ul>
        </div>

        <div className="p-6 bg-[#f5e6da] shadow-xl rounded-xl">
          <h3 className="font-bold text-lg">Smart</h3>
          <p className="text-xl font-semibold">₹5499</p>
          <ul className="mt-4 text-sm space-y-2">
            <li>Everything in Starter</li>
            <li>Interactive UI</li>
            <li>Animations</li>
          </ul>
        </div>

        <div className="p-6 bg-white shadow-xl rounded-xl">
          <h3 className="font-bold text-lg">Growth</h3>
          <p className="text-xl font-semibold">₹9999</p>
          <ul className="mt-4 text-sm space-y-2">
            <li>Everything in Smart</li>
            <li>Multi-page</li>
            <li>Gallery</li>
          </ul>
        </div>

        <div className="p-6 bg-white shadow-xl rounded-xl">
          <h3 className="font-bold text-lg">Premium</h3>
          <p className="text-xl font-semibold">₹24999+</p>
          <ul className="mt-4 text-sm space-y-2">
            <li>Everything in Growth</li>
            <li>Custom features</li>
            <li>Booking system</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="p-10 bg-white text-center">
      <h2 className="text-2xl font-semibold">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="p-5 shadow rounded-xl">Share details</div>
        <div className="p-5 shadow rounded-xl">We build</div>
        <div className="p-5 shadow rounded-xl">Go live</div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="p-10 text-center bg-white">
      <h2 className="text-2xl font-semibold">Why Choose Us</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="p-5 bg-[#fdf6f0] shadow rounded-xl">Affordable</div>
        <div className="p-5 bg-[#fdf6f0] shadow rounded-xl">Fast</div>
        <div className="p-5 bg-[#fdf6f0] shadow rounded-xl">Simple</div>
        <div className="p-5 bg-[#fdf6f0] shadow rounded-xl">Direct</div>
      </div>
    </section>
  );
}

function Gradient() {
  return (
    <div className="w-full h-40 bg-gradient-to-t from-[#fdf6f0] to-white"></div>
  );
}

function CTA() {
  return (
    <section className="p-10 bg-black text-white text-center">
      <h2 className="text-2xl font-semibold">Ready to grow your business?</h2>
      <p className="mt-2">Let’s get you online today</p>

      <div className="flex justify-center gap-4 mt-6">
        <a href={WA_LINK} className="p-3 bg-green-500 rounded-full">💬</a>
        <a href={IG_LINK} className="p-3 bg-pink-500 rounded-full">📷</a>
      </div>

      <p className="mt-6 text-sm">mukundbhati44@gmail.com</p>
    </section>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Process />
      <WhyUs />
      <Gradient />
      <CTA />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </Router>
  );
}
"use client";

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Homepage2 from "./components/Homepage2";
import Services from "./components/Services";

export default function Page() {
  return (
    <div>
      <Header />
      <Homepage />
      {/* <Homepage2 /> */}
      <About />
      <Services />
      <Footer />
    </div>
  );
}

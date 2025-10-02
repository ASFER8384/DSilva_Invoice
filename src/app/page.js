"use client";

import Car from "./components/Car";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Services from "./components/Services";
import Homepage2 from "./Homepage2";

export default function Page() {
  return (
    <div>
      <Homepage />
      <Services />
      <Car />
      <Details />
      <Footer />
    </div>
  );
}

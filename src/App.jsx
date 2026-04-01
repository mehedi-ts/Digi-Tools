import { ToastContainer } from "react-toastify";
import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";
import Shop from "./components/shop/Shop";
import Started from "./components/started/Started";
import Stats from "./components/stats/Stats";
import Workflow from "./components/workflow/Workflow";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);
  console.log(cartCount);
  return (
    <>
      <Navbar cartCount={cartCount}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Shop setCartCount={setCartCount}></Shop>
      <Started></Started>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;

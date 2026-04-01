import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";
import Shop from "./components/shop/Shop";
import Started from "./components/started/Started";
import Stats from "./components/stats/Stats";
import Workflow from "./components/workflow/Workflow";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Shop></Shop>
      <Started></Started>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  );
}

export default App;

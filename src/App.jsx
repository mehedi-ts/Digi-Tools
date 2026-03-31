import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Shop from "./components/shop/Shop";
import Stats from "./components/stats/Stats";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Shop></Shop>
    </>
  );
}

export default App;

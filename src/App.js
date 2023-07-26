import react, { useEffect } from "react";
import { Fragment } from "react";

import ScrollButton from "./components/ScrollButton";
import "./App.css";
import "./assets/Root.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BitcoinNav from "./components/BitcoinNav";
import HeroSection from "./components/HeroSection";
import InvestCoin1 from "./components/InvestCoin1";
import InvestCoin2 from "./components/InvestCoin2";
import InvestCoinC from "./components/InvestCoinC";
import LiteCoin from "./components/LiteCoin";
import Leo from "./components/Leo";
import Standard from "./components/Standard";
import Footer from "./components/Footer";
import ThumbBoy from "./components/ThumbBoy";
import HandBoy from "./components/HandBoy";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "./components/Preloader";

function App() {
  
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
       
      <Fragment>
        <Preloader/>
     
        <div className="overflow-hidden">
          <div className="bg_nav ">
            <BitcoinNav />
            <HeroSection />
          </div>
          <InvestCoin1 />
          <InvestCoin2 />
          <InvestCoinC />
          <ThumbBoy />
          <LiteCoin />
          <Leo />
          <Standard />
          <HandBoy />
          <Footer />
        </div>
        <ScrollButton />
      </Fragment>
    </>
  );
}

export default App;

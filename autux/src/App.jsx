import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./style/styles.css"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Ten_section from "./components/sections/10_section";
import Aleone_section from "./components/sections/11_section";
import FirstSection from "./components/sections/1_Section";
import SecondSection from "./components/sections/2_Section";
import ThirdSection from "./components/sections/3_Section";
import Forth_section from "./components/sections/4_section";
import Five_section from "./components/sections/5_section";
import Six_section from "./components/sections/6_section";
import Seven_section from "./components/sections/7_section";
import Eaight_section from "./components/sections/8_section";
import Nine_section from "./components/sections/9_section";

import YtAsService1 from "./components/yt_as_service/Yt_as_service1";
import YtAsService2 from "./components/yt_as_service/Yt_as_service2";

function App() {
  return (
    <>
      <div>
        <div className=" bg-black">
          <Header />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <Forth_section />
          <Five_section />
          <Six_section />
          <Seven_section />
          <Eaight_section />
          <Nine_section />
          <Ten_section />
          {/* <Aleone_section /> */}
          <Footer />
          <div className="  ">
          {/* <YtAsService1/> */}
          <YtAsService2/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

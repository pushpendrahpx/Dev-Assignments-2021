
import React from "react";
import Section1 from "../../Components/Landing/Section1/Section1";
import Section2 from "../../Components/Landing/Section2/Section2";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";

const LandingPage = ()=>{
    return <div>
        <Navbar />
        <Section1 />
        <Section2 />
        <Footer />
    </div>
}
export default LandingPage
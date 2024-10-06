import React from 'react'
import "./Banner.css"
import Navbar from '../Navbar/Navbar'
import Content from '../Content/Content'
import SearchContent from '../SearchContent/SearchContent'
import ImgContainer from '../imagecontainer/ImgContainer'
import Slider from '../Slider/Card'
import Info from '../Info/Info'
import GrowthContent from '../GrowthContent/GrowthContent'
import OptimizeContent from '../OptimizeContent/OptimizeContent'
import MiniContent from '../MiniContent/MiniContent'
import Categories from '../Categories/Categories'
import PerfectContent from '../PerfectContent/PerfectContent'
import FrequentContent from '../FrequentContent/FrequentContent'
import SimpleAccordion from '../SimpleAccordion/SimpleAccordion'
import HeroSection from '../HeroSection/HeroSection'
import TokAudit from '../TokAudit/TokAudit'
import SubscribeContent from '../SubscribeContent/SubscribeContent'
import Footer from '../Footer/Footer'
const Banner = () => {
  return (
    <div className='Banner-container'>
        <Navbar/>
        <Content/>
        <SearchContent/>
        <ImgContainer/>
        <Slider/>
        <Info/>
        <GrowthContent/>
        {/* <BoostContent/> */}
        <OptimizeContent/>
        <MiniContent/>
        <Categories/>
        <PerfectContent/>
        <FrequentContent/>
        <SimpleAccordion/>
        <HeroSection/>
        <TokAudit/>
        <SubscribeContent/>
        <Footer/>
    </div>
  )
}

export default Banner
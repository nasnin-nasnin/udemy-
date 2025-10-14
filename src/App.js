import Navbar from "./Navbar"
import PromoBanner from "./PromoBanner"
import CareerAccelerators from './CareerAccelerators';
// import UdemyStyleCourses from "./UdemyStyleCourses";
import UdemyGrid from "./UdemyGrid";

import CourseCarousel from "./CourseCarousel";
import LearningGoals from "./LearningGoals";
import PricingPlans from "./PricingPlans";
import TestimonialCarousel from "./TestimonialCarousel";
import ReportSection from "./ReportSection";

import TrendingNow from "./TrendingNow";
import Footer from "./Footer";
import CarouselContainer from "./CarouselContainer";


function App() {
  return (
    <div>
      <Navbar />
      
      <PromoBanner/>

      <CareerAccelerators />

      <UdemyGrid/>

      <CourseCarousel/>
      
      <LearningGoals/>
      <PricingPlans/>
      <TestimonialCarousel/>
      <ReportSection/>
      <TrendingNow/>
      <CarouselContainer/>
      <Footer/>
    </div>
  )
}

export default App

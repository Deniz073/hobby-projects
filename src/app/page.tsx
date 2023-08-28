import ScrollIndicator from "./components/General/ScrollIndicator"
import LandingPageHeader from "./components/LandingPageHeader/LandingPageHeader"
import RealLifeProjects from "./components/RealLifeProjects/RealLifeProjects"
import Technologies from "./components/Technologies"
import Testimonials from "./components/Testimonials/Testimonials"
import WorkExperience from "./components/WorkExperience/WorkExperience"

export default function Home() {

  return (
    <>
      <ScrollIndicator />
      <div className="mx-auto max-w-2xl pt-32 sm:pt-48 lg:pt-56">
        <LandingPageHeader />
        <WorkExperience />
      </div>
      <Technologies />
      <RealLifeProjects />
      <Testimonials />
      
    </>
  )
}


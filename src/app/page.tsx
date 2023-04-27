import LandingPageHeader from "./components/LandingPageHeader"
import RealLifeProjects from "./components/RealLifeProjects"
import WorkExperience from "./components/WorkExperience/WorkExperience"

export default function Home() {

  return (
    <>
      <div className="mx-auto max-w-2xl pt-32 sm:pt-48 lg:pt-56 pb-24 sm:pb-40 lg:pb-44">
        <LandingPageHeader />
        <WorkExperience />
      </div>

      <RealLifeProjects />
    </>
  )
}


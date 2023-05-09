import ScrollIndicator from "./components/General/ScrollIndicator"
import LandingPageHeader from "./components/LandingPageHeader/LandingPageHeader"
import RealLifeProjects from "./components/RealLifeProjects/RealLifeProjects"
import Testimonials from "./components/Testimonials/Testimonials"
import WorkExperience from "./components/WorkExperience/WorkExperience"
import { PrismaClient } from "@prisma/client"

export default async function Home() {
  const prisma = new PrismaClient()
  console.log( await prisma.user.findMany())

  return (
    <>
      <ScrollIndicator />
      <div className="mx-auto max-w-2xl pt-32 sm:pt-48 lg:pt-56 pb-24 sm:pb-40 lg:pb-44">
        <LandingPageHeader />
        <WorkExperience />
      </div>
      <RealLifeProjects />
      <Testimonials />
      
    </>
  )
}


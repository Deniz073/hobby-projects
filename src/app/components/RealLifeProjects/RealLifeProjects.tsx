"use client"

import { motion } from 'framer-motion'
import data from './data.json'
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { fadeIn } from '@/framerAnimations'
import { useEffect, useState } from 'react'

export default function RealLifeProjects() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      console.log("current")
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Real life projects</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Projects i worked on for real customers
          </p>
        </div>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent>
            {data.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <time dateTime={project.date} className='text-gray-500 text-sm m-2'>{project.dateDisplay}</time>
                    <CardTitle className='text-xl p-2'>
                      {
                        project.link
                          ? <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{project.title}</a>
                          : <span>{project.title}</span>
                      }
                    </CardTitle>
                    <CardContent className="flex p-2 items-center justify-center">
                      <p className="text-gray-700 text-base">
                        {project.description}
                      </p>
                    </CardContent>
                    <CardFooter className='flex flex-col items-start p-2'>
                      <h2 className='text-md font-semibold'>Deniz Erdem</h2>
                      <p className='text-gray-600'>{project.role}</p>
                      <div className="flex-1 md:flex-row">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="inline-block mt-2 flex-wrap bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            <p className="text-sm">{tag}</p>
                          </span>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
    </div>
  )
}

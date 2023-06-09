import Image from "next/image"

export default function Technologies() {
  const IMAGEWIDTH = 158
  const IMAGEHEIGHT = 200
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-xl sm:text-2xl font-semibold leading-8 text-gray-900">
          This website is built with
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-4 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/images/next.png"
            alt="Next.js"
            width={IMAGEWIDTH}
            height={IMAGEHEIGHT}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/images/react-logo.png"
            alt="React"
            width={IMAGEWIDTH}
            height={IMAGEHEIGHT}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/images/prisma.svg"
            alt="Prisma"
            width={IMAGEWIDTH}
            height={IMAGEHEIGHT}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/images/planetscale.png"
            alt="Planetscale"
            width={IMAGEWIDTH}
            height={IMAGEHEIGHT}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/images/tailwindcss.png"
            alt="Tailwind CSS"
            width={IMAGEWIDTH}
            height={IMAGEHEIGHT}
          />
        </div>
      </div>
    </div>
  )
}
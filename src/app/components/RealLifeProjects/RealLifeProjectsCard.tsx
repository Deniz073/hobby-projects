"use client"
import { motion } from "framer-motion";
import { fadeIn } from "@/framerAnimations";

interface Props {
  title: string;
  description: string;
  role: string;
  date: string;
  link?: string
  dateDisplay: string;
  tags: string[];
}


export default function RealLifeProjectsCard({ title, description, role, date, link, dateDisplay, tags }: Props) {
  return (
    <motion.article {...fadeIn} className="inline-block mt-3 lg:flex">
      <motion.div whileHover={{ scale: 1.04 }} className=" w-64  lg:w-[25rem] lg:h-[18rem]  overflow-hidden shadow-xl shadow-slate-950/10 rounded-2xl bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <time dateTime={date} className="text-gray-500 text-sm mt-2">
            {dateDisplay}
          </time>
          <div className="text-gray-900 font-bold text-xl mb-2">
            {link ? <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">{title}</a> : <span>{title}</span> }
          </div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="font-semibold text-gray-900">
              Deniz Erdem
            </p>
            <p className="text-gray-600">{role}</p>
            <div className="flex flex-1 flex-col md:flex-row ">
              {tags.map((tag, index) => (
                <span key={index} className="inline-block mt-2  flex-wrap bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <p className="text-sm">{tag}</p> 
                </span>
              ))}
            </div>

          </div>
        </div>
      </motion.div>
    </motion.article>
  )
}

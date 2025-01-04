import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { RiClaudeFill } from "react-icons/ri";
import {animate, motion} from "framer-motion"
import { RiFirebaseFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const iconVariants =(duration)=>({
    intial: {y: -10},
    animate: {
        y: [10,-10],
        transition : {
            duration: duration, 
            ease: "Linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div>
                <RiReactjsFill className="text-7xl text-cyan-400" />
            </div>
            <div className="p-4">
                <RiNextjsFill className="text-7xl"/>
            </div>
            <div className="p-4">
                <DiMongodb className="text-7xl text-cyan-400"/>
            </div>
            <div className="p-4">
                <DiRedis className="text-7xl text-red-700"/>
            </div>
            <div className="p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </div>
            <div className="p-4">
                <VscAzure className="text-7xl text-blue-500"/>
            </div>
            <div className="p-4">
                <RiClaudeFill className="text-7xl text-red-400"/>
            </div>
            <div className="p-4">
                <RiFirebaseFill className="text-7xl text-red-800"/>
            </div>
            <div className="p-4">
                <FaGithub className="text-7xl"/>
            </div>

        </div>
    </div>
  )
}

export default Technologies

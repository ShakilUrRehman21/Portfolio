"use client"
import Image from "next/image";
import {motion} from "framer-motion";



const Homepage = () => {
  return (
  <motion.div 
  className="h-full"
  initial={{y:"-200vh"}}
  animate={{y:"0%"}}
  transition={{duration:1}}
  >

  <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
  {/*Image Container */}
  <div className="relative w-3/4 h-3/4 lg:w-1/2 lg:h-full ">
  <Image src="/heropic.png" alt="" fill className="object-contain "/>
  </div>
  {/*Text Container */}
  <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-start justify-center">
  {/* Title */}
  <h1 className="text-4xl md:text-6xl font-bold">
    Crafting Digital Experiences, Designing Tomorrow.
  </h1>
  {/* Description */}
  <p className="md:text-xl">
    Welcome to my digital canvas, where imagination meets technology.
    With an eye for design and proficiency in coding, my portfolio
    highlights a varied collection of projects that demonstrate my
    pursuit of excellence.
  </p>
  {/* Download CV Button */}
  <a
    href="https://drive.google.com/file/d/14B38fqpfvIxNc1FzbDcZEPpiReb_uZsC/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-black text-white px-6 py-3 rounded hover:bg-white hover:text-black"
  >
    Show CV
  </a>
</div>

</div>
  </motion.div>
  );
};

export default Homepage;

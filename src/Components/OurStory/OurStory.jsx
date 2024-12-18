import React from 'react'
import AnimatedText from '../AnimatedText'
import img from '../../Images/IMG_3229 full.webp'
import line1 from '../../Images/line 1.jpeg'
import line2 from '../../Images/line 2.jpeg'
import 'aos/dist/aos.css';
import { motion } from 'framer-motion'

const OurStory = () => {
  return (
    <div className='ourStory bg-light rounded-3xl relative -top-14'>
        <div className='line d-flex justify-center align-items-center relative top-7 '>
            <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
        </div>
        <div className="container py-32">
            <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:1 , y:0}} transition={{duration:1.5 }} className="row">
                <div  className="col-md-7">
                    <AnimatedText text="Our Story" ClassName='text-start !text-5xl !text-blue-500'/>
                    <p className='text-dark/60 leading-loose'>The ICPC community at HTI University is a vibrant hub of talented 
                    individuals united by their passion for computer science. Members engage in regular practice sessions, honing 
                    their problem-solving skills and collaborating on challenging coding challenges. The community actively 
                    participates in local and regional ICPC contests, showcasing their expertise and representing the university
                     with pride. Beyond competitions, members often collaborate on personal projects, exploring cutting-edge 
                     technologies and pushing the boundaries of innovation. The ICPC community at HTI University fosters a 
                     supportive and inclusive environment, encouraging members to learn from each other and grow both academically 
                     and personally. Through their dedication and teamwork, members of the ICPC community have achieved remarkable 
                     success, earning recognition and accolades at various levels of competition.
                    </p>
                </div>
                <div  className="col-md-5">
                    <img className='rounded-xl' src={img} alt="icpc hti team" />
                </div>
            </motion.div> 
            <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:1 , y:0}} transition={{duration:1.5 }} className="vid d-flex relative -top-4 justify-center align-items-center md:mt-12 d-md-flex ">
                <iframe width="950" height="500" 
                    className='sm:!h-[300px]'
                    src="https://www.youtube.com/embed/6l19PsCtbTs?si=F8df9aOFTtrq9U-w"
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                  </iframe>
            </motion.div>
        </div>
        <div className='line d-flex justify-center align-items-center h-25 absolute right-10 bottom-16 d-none d-md-block '>
            <img className='rounded-2xl h-[100%]' src={line1} alt="line" />
        </div>
    </div>
  )
}

export default OurStory
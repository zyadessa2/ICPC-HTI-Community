import LiIcon from '../LiIcon'
import { motion, useScroll } from 'framer-motion'
import icpc from '../../Images/222.svg'
import shape1 from '../../Images/circleright.svg'
import shapeleft from '../../Images/circleleft.svg'
import style from './RoudeMap.module.css'
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'

const Details = ({position , company , companyLink , time , address , work}) =>{

    const ref = useRef(null)

    return <li ref={ref} className=' my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />

        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5 , type:"spring"}}        
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp; <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize' > {company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time}  {address}
            </span>
            <p className='font-medium text-light/75 w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const RoudeMap = () => {


    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref ,
            offset: ["start end" , "center start"]
        }
    )
  return (
    <div className={`${style.whatisicpc} relative  py-16 !bg-[#4d72c2] `}>
        {/* <h2 className='font-bold text-8xl  w-full text-light/90 text-center md:text-6xl xs:text-4xl md:mb-16'>
            Route Map
        </h2> */}
        <img src={shape1} className='absolute right-0 -top-10' />
        <div className="row justify-around align-items-center">
            <div  className="col-md-5 d-flex align-items-center justify-center">
                <img className='' src={icpc} alt="icpc" />
            </div>
            <div className="col-md-7">
                <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='bg-light  absolute left-9 top-0 w-[4px] h-full origin-top
                md:w-[2px] md:left-[30px] xs:left-[20px]
                '/>
                <ul className=' w-full flex flex-col items-start justify-between ml-4'>
                    <Details
                    position="Our Roadmap" 
                    work="Our Roadmap contains all the materials we use for our training, 
                    that includes slides, sheets, and even videos! The Roadmap targets everyone
                     interested in PS, either you're a college student, older or even younger, no 
                     matter what your major is, as long as you're interested in learning and willing"
                    />
                    <button className='btn grade2 ms-5'><Link className='durationNone text-light' to={'/training'}>Reade More</Link></button>

                </ul>
            </div>
            </div>
        </div>
        <img src={shapeleft} className='absolute z-2 ' alt='shape'/>
        {/* <img className=' absolute -bottom-32' src={footerWaves} alt="waves" /> */}
    </div>
  )

}

export default RoudeMap
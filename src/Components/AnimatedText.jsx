import { motion } from 'framer-motion'
import React from 'react'


const qoute = {
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren:0.08
        }
    }
}

const singleWord = {
    initial:{
        opacity:0,
        y:50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1
        }
    }
}

const AnimatedText = ({text , ClassName=""}) => {
    return (
        <div className='w-full mx-auto overflow-hidden
        py-2  flex sm:py-0  items-center justify-center text-center'>
          <motion.h1 className={` inline-block w-full  font-bold capitalize text-7xl ${ClassName}`}
          variants={qoute}
          initial="initial"
          animate="animate"
          >
            {
                text.split(" ").map((word , index)=>
                <motion.span key={word+'-'+index} className='inline-block'
                variants={singleWord}
                
                >
                    {word}&nbsp;
                </motion.span>
                )
            }
          </motion.h1>
        </div>
      )
}

export default AnimatedText
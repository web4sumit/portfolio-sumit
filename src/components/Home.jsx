import React, { useRef } from 'react'
import {animate, motion} from "framer-motion"
import Typewriter  from 'typewriter-effect'
import {BsArrowUpRight, BsChevronBarDown} from "react-icons/bs"
// import Me from '../assets/logo.png'

const Me = "https://scontent.fdel1-4.fna.fbcdn.net/v/t1.6435-9/45696708_791149777909234_586321889840857088_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=dMesSzh1N_oAX87a4HQ&_nc_ht=scontent.fdel1-4.fna&oh=00_AfCjvC7ex7r3Vdsi4slbQrijU1Llu1ozQSx0OFSEN4Jqag&oe=64F2E5AB"

const Home = ({ratio}) => {
    const clientCount = useRef(null);
    const projectCount = useRef(null);
    const animationClientsCount = () => {
         animate(0,100,{
            duration:1,
            onUpdate:(v) => (clientCount.current.textContent = v.toFixed() ), 
         });
    };

    const animationProjectCount = () => {
        animate(0,500,{
           duration:2,
           onUpdate:(v) => (projectCount.current.textContent = v.toFixed() ), 
        });
   };

    const animations = {
       h1:{
        initial:{
            x:"-100%",
            opacity:0,
        },
        whileInView:{
            x:0,
            opacity:1, 
        }
       },
       button:{
        initial:{
            y:"-100%",
            opacity:0,
        },
        whileInView:{
            y:0,
            opacity:1, 
        }
       }
    }
  return (
    <div id='home'>
        <section className='box'>
            <div>
              <motion.h1 {...animations.h1}>
                Hi, I'm <br/> Sumit Kumar 
              </motion.h1>
              <Typewriter options={{
                strings:["A Developer","A Designer","A Creater"],
                autoStart:true,
                loop:true,
                cursor:"",
                wrapperClassName:'typrwriterpara'
              }}/>
              <div>
                <a href="mailto:web4sumit@gmail.com">
                    Hire Me
                </a>
                <a href="#work">Projects <BsArrowUpRight/></a>
              </div>
              <article>
                <p>+
                     {
                        ratio < 2.1 && <motion.span ref={clientCount} whileInView={animationClientsCount}></motion.span>
                    }
                </p>
                <span>Clients Worldwide</span>
              </article>
              <aside>
                <article>
                <p>+
                    { ratio < 2.1 && <motion.span ref={projectCount} whileInView={animationProjectCount}>500</motion.span> }
                </p>
                <span>Projects Done</span>
                </article>
              <article data-special>
                <p>Contact</p>
                <span>web4sumit@gmail.com</span>
                </article>
              </aside>
            </div>
        </section>
        <section>
            <img src={Me} alt="Sumit" />
        </section>
        <BsChevronBarDown/>
    </div>
  )
}

export default Home;
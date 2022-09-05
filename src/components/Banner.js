import Navbar from "./Navbar";
import { ArrowRightCircle  } from 'react-bootstrap-icons';
import { useState , useEffect } from "react";
import Typed from 'react-typed';
import NavBarMobile from "./NavBarMobile";
import {Link,animateScroll as scroll } from 'react-scroll'

const Banner = () => {

    const jobs=['web developer','data-scientist ','pro javascript ']
    const [toComplite,setToComplite]=useState('')
    const [loop,setloop]=useState(0)
    const [screenSize,setScreenSize]=useState(window.screen.width)
    const [isMobile,setIsMobile]=useState(false)


    useEffect(()=>{
          
      window.addEventListener('resize',( )=>{

           setScreenSize(window.innerWidth) 
         
            
      })

     if (screenSize<730){
        setIsMobile(true)
        
     }
     else setIsMobile(false)

     
 

   
      
   
},[screenSize])
console.log(screenSize)
    return (
        <section className='main' id="home">
           
           {isMobile ? 
           <NavBarMobile/>:   <Navbar/>
           }
                
        
            

      <div className='flex'>

                <div className="text">

                    <h4 className="title">Welcome to my Portfolio </h4>
                    <h1 className="toAnimate">Hi ! i'm Hakim <Typed strings={jobs}
                    typeSpeed={100}
                    backSpeed={80}
                   
                    loop >
                 
                </Typed> </h1>
                    <p >Développeur full stack certifié Scrum, avec plus de 2 ans d'expérience. Mordu d'informatique, j'ai appris à coder dès mon plus jeune âge dans divers langages informatiques (Javascript, PHP, AngularJS…) et ai créé des projets personnels.</p>
                        <div className="box--flex">
                         <Link to='contact'
                  smooth={true}
                   duration={500}
                   delay={200} 
                   > <a > Contact Me </a> </Link> <ArrowRightCircle className="arrowRight"/>
                        </div>

                </div>

                   { screenSize>=500 &&

                    <div className="box-svg">
                    


                  <img src="header-img.svg" className="chkil--img"/>

                        
                    </div>
                   }  

            </div>





<div id='Skills'></div>


        </section>
    );
 
          }
export default Banner;
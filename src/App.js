import Banner from './components/Banner';
import Contact from './components/Contact';
import Newslatter from './components/Newslatter';
import Projects from './components/Projects';
import Skills from './components/Skills';
import logo from './logo.svg';
import {useState,useEffect} from 'react'
import Typed from 'react-typed';

function App() {
  const [isloading,setIsLoading]=useState(false)
const [timeout,setTime] =useState(true)
var string=['Loading . . .']
  useEffect(()=>{

    setTimeout(() => {
      setIsLoading(()=>{
        setTime(false) 
        return true
      })
    }, 2000);
   

  },[])

  return (


    <div className="App">
      {timeout  &&
      <div className='loading--page'> 

          <img src="header-img.svg" className='loading--img' alt=''/>
          <Typed strings={string}
                    typeSpeed={100}
                    backSpeed={80}
                   
                    loop >
                 
                </Typed>
      </div>
      
      
      }

     { isloading  &&
      <div>
         <Banner/>
    <div className='bg--skills'>
      <Skills />
    </div>
    <Projects/>
     <Contact/>
     <Newslatter/>
     
     </div>
     }
      
   
    </div> 
  );
}

export default App;

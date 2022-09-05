import {useState,useEffect} from 'react'
import { useInView } from 'react-intersection-observer';
const Contact = () => {

    const { ref:formRef, inView:isFormVisible } = useInView({triggerOnce:true});
    const { ref:ImgRef, inView:isImgVisible } = useInView();

    const [screenSize,setScreenSize]=useState(window.innerWidth)

    const[isDelete,setIsDelete] = useState(false)

    const[form,setForm]=useState({firstName:'',
                                    lastName:'',
                                    email:'',
                                    phone:'',
                                    message:''
                                    })


    const handleOnChange = (e)=>{
        const {value,name}=e.target
        
        setForm(prev=>{
            return{...prev,[name]:value}
        })
        console.log(value)

    }

    useEffect(()=>{
          
            window.addEventListener('resize',( )=>{

                 setScreenSize(window.innerWidth) 
                  
            })

           
          

         
            
         
    },[screenSize])

    return ( 
<section className='contact--sec' id='contact'>
    
    <div className='contenair--flex'>

    {    screenSize>=780 &&
         <div ref={ImgRef} className={isImgVisible ? 'contact--box imganim'  : 'contact--box'}>
      
        <img  src='contact-img.svg' alt=''/>
    </div>
    }
   

    <form ref={formRef} onSubmit={()=>{}} className={isFormVisible ? 'form--box formeanim' : 'form--box'}>  
        <h1 className='getIn'>Get In Touch</h1>
        <div className='grid'>
        <input type='text'
         placeholder='Firstname' 
         name='firstName'
         value={form.firstName}
         onChange={handleOnChange}
         />
           <input type='text'
         placeholder='Lastname' 
         name='lastName'
         value={form.lastName}
         onChange={handleOnChange}
         />

              <input type='text'
         placeholder='email' 
         name='email'
         value={form.email}
         onChange={handleOnChange}
         />
              <input type='text'
         placeholder='phone' 
         name='phone'
         value={form.phone}
         onChange={handleOnChange}
         />
         <textarea 
         value={form.message}
         name='message'
         onChange={handleOnChange}
         placeholder='Message'
         >message </textarea>
 
            <button className='btn--send' onClick={(e)=>{e.preventDefault()}}>Send</button>
            </div>
    </form>
</div>
</section>
        

     );
}
 
export default Contact;
import { useState, useEffect } from 'react'
import {List,XLg} from 'react-bootstrap-icons'
import {Link,animateScroll as scroll } from 'react-scroll'
const NavBarMobile = () => {
    
    const [scroll, setScroll] = useState(false)
    const [activeLink,setActiveLink]=useState('')
    const [valueScroll,setValueScroll]=useState(0)
    const [isToggled,setIsToggled]=useState(false)
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
            /*  console.log(window.scrollY) */
        }

        window.addEventListener("scroll", onScroll);



        window.addEventListener("scroll",()=>setValueScroll(window.scrollY))




        return () => window.removeEventListener("scroll", onScroll);


    }, [])


    function toggle(){

        setIsToggled(prev=>!isToggled)

    }

    return (
        <div className='nav--contenair'>

       
        <nav className='nav--mobile--flex' style={scroll  ? {backdropFilter:'blur(10px)',['-webkit-backdrop-filter']:'blur(10px)', transition:'1s'}:{transition:'1s'}}>
            <div className="Logo">
                <svg width="120" height="41" viewBox="0 0 155 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.728001V39.928H22.064V32.032H8.4V0.728001H0Z" fill="white" />
                    <path d="M64.0268 20.328C64.0268 9.016 54.9548 0 43.5308 0C32.1068 0 23.0348 9.016 23.0348 20.328C23.0348 31.64 32.1068 40.656 43.5308 40.656C54.9548 40.656 64.0268 31.64 64.0268 20.328ZM55.4028 20.328C55.4028 27.104 50.1948 32.48 43.5308 32.48C36.8668 32.48 31.6588 27.104 31.6588 20.328C31.6588 13.552 36.8668 8.176 43.5308 8.176C50.1948 8.176 55.4028 13.552 55.4028 20.328Z" fill="white" />
                    <path d="M107.11 10.136C103.918 3.808 97.3096 0 89.4136 0C78.1576 0 68.9176 9.128 68.9176 20.328C68.9176 31.528 77.9336 40.656 89.3576 40.656C100.558 40.656 108.734 32.256 108.734 21.28V18.144H88.3496V25.2H99.7176C98.6536 29.68 94.6216 32.76 89.4136 32.76C82.6936 32.76 77.4296 27.216 77.4296 20.328C77.4296 13.384 82.6936 7.952 89.3576 7.952C93.8936 7.952 97.5336 10.024 99.4936 13.832L107.11 10.136Z" fill="white" />
                    <path d="M154.261 20.328C154.261 9.016 145.189 0 133.765 0C122.341 0 113.269 9.016 113.269 20.328C113.269 31.64 122.341 40.656 133.765 40.656C145.189 40.656 154.261 31.64 154.261 20.328ZM145.637 20.328C145.637 27.104 140.429 32.48 133.765 32.48C127.101 32.48 121.893 27.104 121.893 20.328C121.893 13.552 127.101 8.176 133.765 8.176C140.429 8.176 145.637 13.552 145.637 20.328Z" fill="white" />
                </svg>

            </div>
            <div>

                  <List className='menu--icon' onClick={toggle}/>

            </div>

           
          






        </nav> 
        { isToggled && 
        <div className='box--nav--mobile'>

<XLg className='exit--nav--icon' onClick={toggle}/>


<ul className="items--nav--mobile">
    <li ><Link
     to='home'
     smooth={true}
       duration={500}
       delay={200}
        onClick={()=>{
        setActiveLink('home')
        console.log('this is the value  h ' , activeLink)
    }} style={  (valueScroll>=0 && valueScroll<500)   ? {color:'#FF66B2' ,textDecoration:'none'} :{color:'white',textDecoration:'none'} } > Home </Link></li>

    <li><Link  to='Skills'
    smooth={true} 
     duration={1000}
     delay={200}
       onClick={()=>{
        setActiveLink('skills')
        console.log('this is the value  s ' , activeLink)
    }}
    style={  (valueScroll>=500 && valueScroll<1200) ? {color:'#FF66B2',textDecoration:'none'} : {color:'white',textDecoration:'none'} }
     > Skills </Link></li>

    <li><Link to='projects' 
    smooth={true}  
    duration={500} 
    delay={200}
    onClick={()=>{
        setActiveLink('projects')
        console.log('this is the value  p ' , activeLink)
    }}
    style={  valueScroll>=1200  ? {color:'#FF66B2',textDecoration:'none'} :{color:'white',textDecoration:'none'} }
    > projects </Link></li>
<li className='Contact--mobile' >
      <Link to='contact'
      smooth={true}
       duration={500}
       delay={200} 
       >Let's Contact</Link></li>

    <li className='items--nav--social--btn--mobile'>
        <button><a href='https://www.linkedin.com/'> <svg className='svgs' width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M15.996 16V15.9993H16V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33 5.93465 8.888 6.77398H8.84133V5.31732H5.65933V15.9993H8.97267V10.71C8.97267 9.31732 9.23667 7.97065 10.9613 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z" fill="white"/>
<path d="M0.264008 5.31812H3.58134V16.0001H0.264008V5.31812Z" fill="white"/>
<path d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0V0Z" fill="white"/>
</svg></a>
</button>
        <button><a href='https://www.facebook.com/'> <svg className='svgs--mobile' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.54 2.65667H12.0007V0.112667C11.7487 0.078 10.882 0 9.87267 0C7.76667 0 6.324 1.32467 6.324 3.75933V6H4V8.844H6.324V16H9.17333V8.84467H11.4033L11.7573 6.00067H9.17267V4.04133C9.17333 3.21933 9.39467 2.65667 10.54 2.65667V2.65667Z" fill="white"/>
</svg></a>
</button>
        <button><a  href='https://www.instagram.com/'> <svg className='svgs--mobile' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00269 3.8916C5.73406 3.8916 3.89743 5.73024 3.89743 7.99686C3.89743 10.2655 5.73606 12.1021 8.00269 12.1021C10.2713 12.1021 12.108 10.2635 12.108 7.99686C12.108 5.72824 10.2693 3.8916 8.00269 3.8916V3.8916ZM8.00269 10.6615C6.53005 10.6615 5.33807 9.46884 5.33807 7.99686C5.33807 6.52489 6.53072 5.33224 8.00269 5.33224C9.47467 5.33224 10.6673 6.52489 10.6673 7.99686C10.668 9.46884 9.47533 10.6615 8.00269 10.6615V10.6615Z" fill="white"/>
<path d="M11.2986 0.0502569C9.82665 -0.0184086 6.18071 -0.0150753 4.7074 0.0502569C3.41276 0.110922 2.27078 0.423584 1.35013 1.34423C-0.188512 2.88287 0.00815137 4.95617 0.00815137 7.99678C0.00815137 11.1087 -0.165179 13.134 1.35013 14.6493C2.89477 16.1933 4.99806 15.9913 8.00268 15.9913C11.0853 15.9913 12.1493 15.9933 13.2393 15.5713C14.7212 14.996 15.8399 13.6714 15.9492 11.2921C16.0185 9.81942 16.0145 6.17415 15.9492 4.70084C15.8172 1.89222 14.3099 0.188921 11.2986 0.0502569V0.0502569ZM13.6286 13.6314C12.6199 14.64 11.2206 14.55 7.98335 14.55C4.65007 14.55 3.31343 14.5993 2.33811 13.6214C1.2148 12.5034 1.41813 10.7081 1.41813 7.98612C1.41813 4.30285 1.04013 1.65023 4.73674 1.4609C5.58605 1.4309 5.83605 1.4209 7.97401 1.4209L8.00401 1.4409C11.5566 1.4409 14.3439 1.06891 14.5112 4.76484C14.5492 5.60816 14.5579 5.86149 14.5579 7.99612C14.5572 11.2907 14.6199 12.6354 13.6286 13.6314V13.6314Z" fill="white"/>
<path d="M12.2706 4.6889C12.8004 4.6889 13.2299 4.2594 13.2299 3.72958C13.2299 3.19976 12.8004 2.77026 12.2706 2.77026C11.7408 2.77026 11.3113 3.19976 11.3113 3.72958C11.3113 4.2594 11.7408 4.6889 12.2706 4.6889Z" fill="white"/>
</svg></a>
</button>
    </li>
    


</ul>

</div>}
        
        
        
        </div>
    );
}

export default NavBarMobile;
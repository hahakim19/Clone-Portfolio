import data from '../data'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
            
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (

        <div className="skills--container--flex" >
           < div className='text--skill--flex'>
            <h1>Skills</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Velit debitis nihil quibusdam doloribus ipsum labore veniam
                Velit debitis nihil quibusdam doloribus ipsum labore veniam </p>
</div>
<div className='carousel--container'>
            <Carousel 
            responsive={responsive} 
            infinite={true} 
            className='carousel--skills'
            autoPlaySpeed={1000}
            >
                {
                    data.map((data1) => <div className='circle' key={data1.id}>
                        <img src={data1.img} alt='' className='img--circle' />

                        <p>{data1.skill}</p>

                    </div>)
                } 
            </Carousel>

        </div>
        <div id='projects'></div>
</div>
    );
}

export default Skills;











/**/
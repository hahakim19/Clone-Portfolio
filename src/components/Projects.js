import data_Card from '../data_Card'
import {useState} from 'react'
import 'animate.css' 
const Projects = () => {
const [table,setTable]=useState('tab1');
const [isShow,setIsShow]=useState(false)


    return (  

            <section className='project--sections' >

            <div className="project--text">
                
                <h1>Projects</h1>
                <p> je maîtrise les différentes étapes techniques de la création d’un site ou d’une application web ; de la compréhension des besoins utilisateurs, au développement frontend et backend en passant par la maintenance. 
                </p>

                        <div className='tab--project'>
                            <button onClick={()=>{setTable('tab1')}} 
                            style={table==='tab1' ? {background:'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)'}:{backgroundColor: 'transparent'}} 
                            className='btn num1 active'>Tab 1</button>
                            <button 
                             onClick={()=>{setTable('tab2')}} 
                             style={table==='tab2' ? {background:'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)'}:{backgroundColor: 'transparent'}}  
                             className='btn num2 active'>Tab 2 </button>

                            <button onClick={()=>{setTable('tab3')}} 
                             style={table==='tab3' ? {background:'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)'}:{backgroundColor: 'transparent'}}  
                             className='btn num3 active'>Tab 3 </button>
                        </div>

            </div>
{ table ==='tab1' &&
     <div className='jobs--grid'>

            { data_Card.map((data22,index)=><div className="proj-imgbx" key={index}>
                    <img src={data22.img}  className='project-img'/>
                    <div className="proj-txtx">
                    <h4>{data22.header}</h4>
                   
                    </div>
                </div>)

            

            }
                
            </div>
}
           
           {
            table ==='tab2' &&  <div className='descriptions1 animate__animated animate__slideInUp '>
<p>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit debitis nihil quibusdam doloribus ipsum labore veniam corporis, tempore iste nesciunt aspernatur mollitia ab a delectus voluptas, id maiores repellendus obcaecati!
    debitis nihil quibusdam doloribus ipsum labore veniam corporis, tempore iste nesciunt aspernatur
</p>

            </div>
           }
           {
            table ==='tab3' &&
            <div className='descriptions1 animate__animated animate__slideInUp '>
<p>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit debitis nihil quibusdam doloribus ipsum labore veniam corporis, tempore iste nesciunt aspernatur mollitia ab a delectus voluptas, id maiores repellendus obcaecati!
    debitis nihil quibusdam doloribus ipsum labore veniam corporis, tempore iste nesciunt aspernaturnihil quibusdam doloribus ipsum labore veniam
</p>
            </div>
}
<div  id='contact'></div>
            </section>

    );
}
 
export default Projects;
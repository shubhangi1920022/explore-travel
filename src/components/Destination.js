import React from 'react'
import './DestinationStyle.css'
import DestinationData from './DestinationData';


const Destination =()=>{
    return(
        <>
          <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
             
            <DestinationData className="first-des"
                heading="Taal Volcano, Batangas" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
            consequatur dignissimos fugiat animi sunt reprehenderit esse magnam
            illum. Aspernatur eligendi eum, magni ex, deleniti eveniet corrupti
            a fugit architecto ipsam adipisci perspiciatis repudiandae eos eius.
            Soluta, libero? Incidunt, aut modi?Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Doloremque fuga aperiam omnis sit
            iure corrupti, minima magni, inventore adipisci unde harum assumenda
            voluptate ex animi reprehenderit facilis alias sequi veritatis." img1={"https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"} img2={"https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"}
            />

            <DestinationData className="first-des-reverse"
                heading="Mt. Daguldul, Batangas" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
            consequatur dignissimos fugiat animi sunt reprehenderit esse magnam
            illum. Aspernatur eligendi eum, magni ex, deleniti eveniet corrupti
            a fugit architecto ipsam adipisci perspiciatis repudiandae eos eius.
            Soluta, libero? Incidunt, aut modi?Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Doloremque fuga aperiam omnis sit
            iure corrupti, minima magni, inventore adipisci unde harum assumenda
            voluptate ex animi reprehenderit facilis alias sequi veritatis." img1={"https://images.unsplash.com/photo-1444930694458-01babf71870c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"} img2={"https://images.unsplash.com/photo-1428353077903-d09b3e000f37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"}
            />
    
          </div>
        </>
    )
}

export default Destination;
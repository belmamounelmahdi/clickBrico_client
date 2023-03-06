import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Stars = () => {
    
    return (
        <div>
            <FontAwesomeIcon className="text-yellow-400" icon={faStar}/>
            <FontAwesomeIcon className="text-yellow-400" icon={faStar}/>
            <FontAwesomeIcon className="text-yellow-400" icon={faStar}/>
            <FontAwesomeIcon className="text-yellow-400" icon={faStar}/>
            <FontAwesomeIcon className="text-yellow-400" icon={faStar}/>
        </div>
    )
}

function Slider() {
    const [avis, setAvis] = useState([])

    useEffect(() => {
        fetch("/avis").then(
            response => response.json()
            ).then(
                data => {
                    setAvis(data)
                }
                )
    }, [])
    return (
    <Carousel autoPlay interval={6000} infiniteLoop >
        
        {avis.map((avis, id) => (
                    <div key={id} className="text-left ml-8 h-48">
                    <Stars/>
                        <h1 className=''>
                        {avis.nom.charAt(0).toUpperCase() + avis.nom.slice(1)}
                        </h1>
                        <h1 className="text-xl font-bold">
                            {avis.title}
                        </h1>
                        <h1 className="">
                            {avis.avis}
                        </h1>
                    </div>
                ))}
            

    </Carousel>
    )
}

export default Slider
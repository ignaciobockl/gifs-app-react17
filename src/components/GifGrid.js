import React, { /*useEffect, useState*/ } from 'react';

import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const { data: images, loading } = useFetchGifs( category );

    // useEffect(() => {
      
    //     getGifs( category )
    //         .then( imgs => setImages( imgs ) );
    
    // }, [ /* category */ ]);

    

    return (
        <>
            <h3 className='animate__animated animate__fadeIn' >{ category }</h3>    

            { loading && <p className='animate__animated animate__flash' >Loading...</p> }

            <div className='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            img={ img } 
                        />
                    ))
                }
            </div>
        </>
    )
}

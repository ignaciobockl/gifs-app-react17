import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  
    // const categories = ['Rapido y Furioso', 'Los Simpsons', 'Futurama'];
    const [categories, setCategories] = useState(['Rapido y Furioso'])

    // const handleAdd = () => {
    //     setCategories( [...categories, 'Duro de Matar'] );
    //     setCategories( cats => [ ...cats, 'Duro de Matar' ] )
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map( cat => (
                        <GifGrid 
                            key={ cat }
                            category={ cat }
                        />
                    ))
                }
            </ol>


        </>
    )
}

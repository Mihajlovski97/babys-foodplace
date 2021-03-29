import React, { useState , useEffect} from 'react';
import '../../babys-assets/baby-style/GetByStars.css';

import useFetch from '../pages/FetchHook';
import Card from '../pages/Card';

export const GetByStars = (props) => {

    const {data} = useFetch('http://localhost:10002/api/v1/recipe/most-stared');

return(
    <div className='most-stared'>
        <div className="div-title">
            <h2 className="title-popular">Most Popular Recipes</h2>
        </div>
        <div className="date-div">
        <div className="recipes-date">
            {data && <Card recipes={data} />}  
        </div>
        </div>
    </div>
    )
};

export default GetByStars;
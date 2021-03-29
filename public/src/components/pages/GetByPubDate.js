// vendor imports
import React, { useState , useEffect} from 'react';
import '../../babys-assets/baby-style/GetByPubDate.css';
import Card from './Card';
import useFetch from './FetchHook';

export const GetByPubDate = (props) => {

    const {data} = useFetch('http://localhost:10002/api/v1/recipe/pub-date')

return(
    <div className='getByPubDate'>
        <div className="div-title">
            <h2 className="title-fresh">Fresh & New</h2>
        </div>
        <div className="date-div">
        <div className="recipes-date">
            {data && <Card recipes={data} />} 
        </div>
        </div>
    </div>
    )
};

export default GetByPubDate;
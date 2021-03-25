import React from 'react';
import { GetByPubDate } from '../pages/GetByPubDate';
import { GetByStars } from '../pages/GetByStars';

const Home = () => {
    return (
      <div className="home">
        <GetByPubDate />
        <GetByStars />
      </div>
    );
  }
  
  export default Home;
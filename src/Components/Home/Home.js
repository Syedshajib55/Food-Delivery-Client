import React from 'react';
import './Home.css'
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
const Home = () => {
    return (
      <>
      <div>
         <Banner></Banner>
      </div>
      <div>
        <Services></Services>
      </div>
  </>
    );
};

export default Home;
import React from 'react';
import './Home.css'
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Subscribe from '../Subscribe/Subscribe';
import Videos from '../Videos/Videos';
const Home = () => {
    return (
      <>
      <div>
         <Banner></Banner>
      </div>
      <div>
        <Services></Services>
      </div>
      <div>
        <Subscribe></Subscribe>
      </div>
      <div>
        <Videos></Videos>
      </div>
     
  </>
    );
};

export default Home;
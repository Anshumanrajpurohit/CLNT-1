import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; // Redux
import '../style/home.css';
import { AnimatedStack } from "./AnimatedStack";
import {CategorySection} from "./category";
import { MostRecommended } from './MostRecommended';
import { Testimonials } from './Testimonials';

function Home() {

  return (
    <>
    <AnimatedStack />
    <CategorySection />
    <MostRecommended />
    <Testimonials />
    </>
  );
}

export default Home;

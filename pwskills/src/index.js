import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Section from './components/Section';
import Card from './components/Card';
import image1 from './images/statistics1.png';
import image2 from './images/statistics2.png';
import image3 from './images/statistics3.png';
import image4 from './images/statistics4.png';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Section/>
    <div className=' flex flex-col justify-center items-center p-16 my-18 md:flex-row md:justify-evenly  '>
    <Card number="55%"des="Average Salary Hike" imgSrc={image1}/>
    <Card number="600+" des="Different Courses"imgSrc={image2}/>
    <Card number="12000+" des="Careere Transition" imgSrc={image3}/>
    <Card number="400+" des="Hiring Partners" imgSrc={image4}/>
    </div>
  </React.StrictMode>
);


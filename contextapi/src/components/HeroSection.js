import React from "react";
import '../index.css';
import heroImage from '../image/image-hero.jpg';

function HeroSection() {
  return (
    <div>
        <p className="text-blue-200">Hero</p>
        <img src={heroImage} alt="hero" className="h-96 w-full"/>
    </div>
  );
}

export default HeroSection;
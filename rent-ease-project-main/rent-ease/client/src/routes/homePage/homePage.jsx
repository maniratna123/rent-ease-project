import React, { useState, useEffect, useRef } from "react";
import SearchBar from "../../components/searchBar/SearchBar";


import "./homePage.scss";



const videos = [
  "public/bg1.mp4",
  "public/bg2.mp4",
  "public/bg3.mp4",
  "public/bg4.mp4",
  "public/bg5.mp4",
];

function HomePage() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 7000); // Change video every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <>
    <div className="homePage">
      <div className="videoContainer">
        <video
          className="backgroundVideo"
          autoPlay
          muted
          ref={videoRef}
          key={videos[currentVideoIndex]}
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="textContainer">
        <div className="wrapper">
        <div className="title">
          <h1 >Your Partner in Finding Houses to Buy or Rent</h1>
          </div>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>5+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>100</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>500+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <button className="prevButton" onClick={handlePrev}>
        &#9664;
      </button>
      <button className="nextButton" onClick={handleNext}>
        &#9654;
      </button>
      </div>
      <div className="aboutUsPage" id="about">
        <div className="AboutUscontainer">
      <div className="content">
        <h1>About Royal Estate</h1>
        <p>
          Royal Estate is your premier partner in buying and selling luxurious
          properties. With over a decade of experience, we have gained numerous
          awards and successfully managed hundreds of properties.
        </p>
        <hr/>
          <h2>Our Values</h2>
          <ul>
            <li>Integrity and Transparency: We believe in honesty and clear communication in all our dealings.</li>
            <li>Client-Centric Approach: Our clients' needs and satisfaction are our top priorities.</li>
            <li>Market Expertise: Our team has deep knowledge of the local real estate market and trends.</li>
            <li>Community Engagement: We actively participate in and give back to our community.</li>
          </ul>
          <hr />
          <h2>Why Choose Us?</h2>
          <p>
            At Royal Estate, we combine extensive market knowledge with personalized
            service to guide you through every step of your real estate journey. Our
            dedicated agents are committed to finding the best properties for buyers
            and achieving the best outcomes for sellers.
          </p>
          <p>
            We use the latest technology and marketing strategies to ensure your
            property gets the attention it deserves. Our track record of success is
            backed by numerous satisfied clients and industry awards.
          </p>
          <hr />
          <h2>Our Team</h2>
          <p>
            Our team consists of experienced professionals who are dedicated to helping
            you find the perfect property. We believe in building long-term relationships
            with our clients and providing them with the best possible service.
          </p>
          <p>
            Each member of our team brings unique skills and expertise, from seasoned
            negotiators to market analysts, ensuring you have the best support in every
            aspect of your real estate transaction.
          </p>
          <hr />
         
         
        
      </div>
      <div className='card'>
        <img className="about-bg" src="public/aboutbg-1.jpg" alt="Real Estate" />
      </div>
    </div>
    </div>
      


    
    </>
  );
}

export default HomePage;
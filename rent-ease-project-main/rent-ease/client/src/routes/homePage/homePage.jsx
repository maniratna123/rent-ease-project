import React, { useState, useEffect, useRef } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

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
              <h1>Your Partner in Finding Houses to Buy or Rent</h1>
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
                <h2>Houses Available</h2>
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
          <h1>About Us</h1>
            <p>
              Rent Ease is your premier partner in finding and renting houses. With over a decade of experience, we have gained numerous awards and successfully managed hundreds of rental houses.
            </p>
            <hr />
            <h2>Our Values</h2>
            <ul>
              <li>We believe in honesty and clear communication in all our dealings.</li>
              <li>Our clients' needs and satisfaction are our top priorities.</li>
              <li>Our team has deep knowledge of the local rental housing market and trends.</li>
              <li>We actively participate in and give back to our community.</li>
            </ul>
            <hr />
            <h2>Why Choose Us?</h2>
            <p>
              At Rent Ease, we combine extensive market knowledge with personalized service to guide you through every step of your house rental journey. Our dedicated agents are committed to finding the best houses for renters and achieving the best outcomes for house owners.
            </p>
            <p>
              We use the latest technology and marketing strategies to ensure your rental house gets the attention it deserves. Our track record of success is backed by numerous satisfied clients and industry awards.
            </p>
            <hr />
            <h2>Our Team</h2>
            <p>
              Our team consists of experienced professionals who are dedicated to helping you find the perfect house to rent. We believe in building long-term relationships with our clients and providing them with the best possible service.
            </p>
            <p>
              Each member of our team brings unique skills and expertise, from seasoned negotiators to market analysts, ensuring you have the best support in every aspect of your house rental transaction.
            </p>
            <hr />


          </div>
          <div className="card">
            <img className="about-bg" src="public/login-bg.jpg" alt="Real Estate" />
          </div>
        </div>
      </div>
      <footer className="footer" id='footer'>
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/logo-footer.png" alt="Rent Ease Logo" />
        </div>
        <div className="footer-details">
          <h4>Contact Us</h4>
          <p>Email: contact@rentease.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Rent Ease Street, Real Estate City, RE 12345</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/properties">Properties</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Rent Ease. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}

export default HomePage;

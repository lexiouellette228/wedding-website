// File: src/pages/Home.js
// This file has been edited for security precautions
import React from 'react';
import Button from 'react-bootstrap/Button';
import Countdown from '../components/Countdown';
import './Home.css';

const Home = () => (
  <div className="background-wrapper">
    <header className="header-with-icon">
    <img src="/shelllogo.png" alt="Wedding Icon" className="wedding-icon" />
      <h1 className="bride-groom-name"> </h1>
      <p className="location-date"></p>
    </header>

    <nav className="main-nav text-center py-2">
      <ul className="nav justify-content-center">
        <li className="nav-item"><a className="nav-link" href="/rsvp">RSVP</a></li>
        <li className="nav-item"><a className="nav-link" href="/events">Events</a></li>
        <li className="nav-item"><a className="nav-link" href="/gallery">Gallery</a></li>
        <li className="nav-item"><a className="nav-link" href="/travel">Travel</a></li>
        <li className="nav-item"><a className="nav-link" href="/dresscode">Dress Code</a></li>
        <li className="nav-item"><a className="nav-link" href="/registry">Registry</a></li>
      </ul>
    </nav>

    <section className="hero-image">
      <img src="/roof1.JPG" alt="Couple by the sea" className="hero-photo" />
    </section>

    <section className="text-center py-3">
    <div className="container wedding-details-container">
        <div className="wedding-list p-4">
            <div className='wedding-font-title '>
                <h2>Wedding Details</h2>
            </div>
            <div className='wedding-font'>
                <p><strong>Ceremony:</strong></p>
                <p><strong>Reception:</strong> </p>
                <Button variant="secondary" size="md" href="/dresscode">Dress Code</Button>
            </div>
        </div>
    </div>
    </section>

    <section className="text-center py-3">
    <div className="container wedding-details-container">
        <div className="wedding-list p-4">
            <div className='wedding-font-title'>
                <h4><strong>Let know if you can make it!</strong></h4>
                <br/>
                <div className="wedding-font">  
                <Button variant="secondary" size="lg" href="/rsvp">RSVP</Button>
                </div>
            </div>
        </div>
    </div>
    </section>

    <section className="text-center py-6">
    <div className='countdown-color'>
      <Countdown />
      </div>
    </section>

  </div>
);

export default Home;

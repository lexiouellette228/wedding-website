// File: src/pages/Events.js
// This file has been edited for security precautions
import React from 'react';
import './Events.css';
import { FaGlassCheers, FaHeart } from 'react-icons/fa';
import { GiSailboat } from "react-icons/gi";

const Events = () => {
  return (
    <section className="text-center py-5 events-wrapper">
      <div className="container events-container">
        <h2 className="events-title">Schedule of Events</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon"><GiSailboat/></div>
            <div className="timeline-content">
              <h5>Welcome Party</h5>
              <p className="event-time">Friday, | 4:00 PM</p>
              <p className="event-location">Location: TBD</p>
              <p className="event-note">Join us for a sunset welcome celebration — wear all white!</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"><FaHeart /></div>
            <div className="timeline-content">
              <h5>The Ceremony</h5>
              <p className="event-time">Saturday, | 4:00 PM</p>
              <p className="event-location"></p>
              <p className="event-note">Please arrive 30 minutes early for seating.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon"><FaGlassCheers /></div>
            <div className="timeline-content">
              <h5>The Reception</h5>
              <p className="event-time">Saturday, | 6:00 PM</p>
              <p className="event-location"></p>
              <p className="event-note">Dinner, dancing, and celebration to follow the ceremony.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

// File: src/pages/Travel.js
// This file has been edited for security precautions
import React from 'react';
import './Travel.css';

const Travel = () => {
  return (
    <section className="travel-wrapper py-5">
      <div className="container travel-container">
        <h2 className="travel-title text-center mb-5">Travel Information</h2>

        <div className="section-block mb-5">
        <div class="row justify-content-between">
    <div class="col-4">
    <h4 className='wedding-t1'>Wedding Location</h4>
          <p></p>
          <p></p>
            </div>
            <div class="col-4">
            <div className="wedding-location-image">
                    <img src="" alt="" className="img-fluid rounded shadow" />
                </div>
            </div>
        </div>
          <iframe
            title="Wedding Location Map"
            src="https://www.google.com/maps/"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="section-block mb-5">
          <h4> Transportation</h4>

        </div>

        <div className="section-block mb-5">
          <h4> Hotel Options</h4>
          <ul>
            <li><strong></strong> – Beachfront with pool</li>
            <li><strong></strong> – Budget friendly, 15 minutes away</li>
            <li><strong>/strong> – Great for relaxing by the ocean</li>
            <br/>
            <li><strong> </strong> – Will update as soon as it complete</li>
          </ul>
        </div>

        <div className="section-block mb-5">
          <h4>Weather</h4>
          <p>February in is typically mild with highs around °F and lows near °F. We recommend bringing layers and checking the forecast before you pack!</p>
        </div>

        <div className="section-block">
          <h4>Things To Do</h4>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>


        <div className="section-block">
          <ul>
            <br/>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Travel;


// File: src/pages/RSVP.js
//This file has been modified for privacy 

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './RSVP.css';

const guestMap = {
//hidden for privacy
};

const guestList = Object.keys(guestMap);

const sanitizeInput = (input) => {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML.trim();
  };
const RSVP = () => {
  const [search, setSearch] = useState('');
  const [selectedGuest, setSelectedGuest] = useState('');
  const [partyNames, setPartyNames] = useState([]);
  const [isAttending, setIsAttending] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dietary, setDietary] = useState('');
  const [song, setSong] = useState('');

  const filteredGuests = search.trim()
  ? guestList.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    )
  : [];

  const preloadParty = (guest) => {
    const party = guestMap[guest] || [];
    setPartyNames(party.map(name => ({ name, response: '' })));
  };

  const updatePartyResponse = (index, response) => {
    const updatedParty = [...partyNames];
    updatedParty[index].response = response;
    setPartyNames(updatedParty);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('entry', sanitizeInput(selectedGuest));
    formData.append('entry', sanitizeInput(isAttending));
    formData.append(
      'entry.1498135098',
      partyNames.map(p => `${sanitizeInput(p.name)}: ${sanitizeInput(p.response || 'No response')}`).join(', ')
    );
    formData.append('entry', sanitizeInput(dietary));
    formData.append('entry', sanitizeInput(song));

    fetch('hidden for privacy', {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    }).then(() => {
      setSubmitted(true);
    });
  };

  return (
    <div className="background-wrapper"> 
      <section className="text-center py-5">
        <div className="container events-container">
          <div className="container rsvp-container">
            <h2 className='rsvp-font'>RSVP</h2>
            <p className="location-date">Wedding</p>
            <p className="location-date">If you're responding for you and a guest (or your family), you'll be able to RSVP for your entire group.</p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="rsvp-form">
                {!selectedGuest ? (
                  <>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Find your name..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                {search.length > 0 && filteredGuests.length > 0 && (
                <ul className="list-group guest-list">
                    {filteredGuests.map((guest, index) => (
                    <li
                        key={index}
                        className="list-group-item list-group-item-action"
                        onClick={() => {
                        setSelectedGuest(guest);
                        preloadParty(guest);
                        }}
                    >
                        {guest}
                    </li>
                    ))}
                </ul>
                )}
                <br/>
             <p className="location-date">If you need to change your RSVP, please text (615) 633-5265.</p>
                  </>
                ) : (
                  <>
                    <div className='guest-response mb-3'>
                      <div className="rsvp-row">
                        <span className="rsvp-name">{selectedGuest}</span>
                        <div className="d-flex gap-2">
                          <Button
                            variant="outline-dark"
                            className={`rsvp-buttons ${isAttending === "Yes,  I'll be there" ? 'active' : ''}`}
                            onClick={() => setIsAttending("Yes,  I'll be there")}
                          >
                            Accept
                          </Button>
                          <Button
                            variant="outline-dark"
                            className={`rsvp-buttons ${isAttending === "Sorry, can't make it" ? 'active' : ''}`}
                            onClick={() => setIsAttending("Sorry, can't make it")}
                          >
                            Decline
                          </Button>
                        </div>
                      </div>
                    </div>

                    {partyNames.map((guest, idx) => (
                      <div key={idx} className="guest-response mb-3">
                        <div className="rsvp-row">
                          <span className="rsvp-name">{guest.name}</span>
                          <div className="d-flex gap-2">
                            <Button
                              variant="outline-dark"
                              className={`rsvp-buttons ${guest.response === "Yes,  I'll be there" ? 'active' : ''}`}
                              onClick={() => updatePartyResponse(idx, "Yes,  I'll be there")}
                            >
                              Accept
                            </Button>
                            <Button
                              variant="outline-dark"
                              className={`rsvp-buttons ${guest.response === "Sorry, can't make it" ? 'active' : ''}`}
                              onClick={() => updatePartyResponse(idx, "Sorry, can't make it")}
                            >
                              Decline
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Dietary restrictions (optional)"
                        value={dietary}
                        onChange={(e) => setDietary(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Song request (optional)"
                        value={song}
                        onChange={(e) => setSong(e.target.value)}
                      />
                    </div>

                    <Button variant="outline-dark" type="submit" className="continue-button" disabled={!isAttending}>
                      CONTINUE
                    </Button>
                  </>
                )}
              </form>
            ) : (
              <div className="alert alert-success mt-4 text-start" role="alert">
                <h4 className="mb-3">Thank you! Your RSVP has been submitted.</h4>
                <p><strong>{selectedGuest}</strong>: {isAttending}</p>
                {partyNames.length > 0 && (
                  <>
                    <h5 className="mt-4">Party Responses:</h5>
                    <ul className="list-group mb-3">
                      {partyNames.map((guest, i) => (
                        <li key={i} className="list-group-item d-flex justify-content-between">
                          <span>{guest.name}</span>
                          <span>{guest.response || 'No response'}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {dietary && <p><strong>Dietary Restrictions:</strong> {dietary}</p>}
                {song && <p><strong>Song Request:</strong> {song}</p>}
                <div className="text-center mt-4">
                  <a href="/home" className="btn btn-outline-secondary">Return Home</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RSVP;

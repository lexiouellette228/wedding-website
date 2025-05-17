//This file has been modified for privavcy
import React from 'react';
import { Button } from 'react-bootstrap';
import './Registry.css';

const Registry = () => {
  return (
    <section className="registry-wrapper py-5">
      <div className="container registry-container">
        <h2 className="registry-title text-center mb-5">Gift Registry</h2>

        <p className="text-center lead mb-4">
          Your presence is the best gift we could ask for! But if you'd like to bless us with something special,
          we've created a few registries to make it simple.
        </p>

        <div className="text-center">
        <div> 
           <Button href="" 
                   target="_blank" 
                   variant="outline-dark" 
                   size="lg">
                   View Our Amazon Registry
            </Button>
        </div>
        <div> 
          <br/>
           <Button href="" 
                   target="_blank" 
                   variant="outline-dark"
                   size="lg">
                   View Our Crate & Barrel Registry
            </Button>       
        </div>
        <div> 
          <br/>
           <Button href="" 
                   target="_blank" 
                   variant="outline-dark"
                   size="lg">
                   View Cash Fund - Venmo
            </Button>  
        </div>
        </div>
      </div>
    </section>
  );
};

export default Registry;



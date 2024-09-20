
import React from "react";
import "./Services.css"

const Services= ()=>{


    return (
        <section id="services">
        <h3>Our Services</h3>
        <div className="service-list">
          <div className="service">
            <img src='https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="General Check-Up" />
            <h4>General Check-Up</h4>
            <p>Comprehensive health check-ups for all ages.</p>
          </div>
          <div className="service">
            <img src='https://plus.unsplash.com/premium_photo-1661774008595-375997e2a2b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Cardiology" />
            <h4>Cardiology</h4>
            <p>Advanced heart care with specialized treatments and surgeries.</p>
          </div>
          <div className="service">
            <img src='https://images.unsplash.com/photo-1632053002928-1919605ee6f7?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Pediatrics" />
            <h4>Pediatrics</h4>
            <p>Complete medical care for infants, children, and adolescents.</p>
          </div>
          <div className="service">
            <img src='https://images.unsplash.com/photo-1666214276389-393fb7dbc75c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Radiology" />
            <h4>Radiology</h4>
            <p>State-of-the-art imaging services including X-rays, MRIs, and CT scans to diagnose and monitor various conditions with precision.</p>
          </div>
          <div className="service">
            <img src='https://plus.unsplash.com/premium_photo-1661373766140-91267929f644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Neurology" />
            <h4>Neurology</h4>
            <p>Comprehensive neurological care including diagnosis and treatment of conditions affecting the nervous system, such as migraines, epilepsy, and neurodegenerative diseases.</p>
          </div>
          <div className="service">
            <img src='https://plus.unsplash.com/premium_photo-1661868386344-80726f22a620?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Emergency Services" />
            <h4>Emergency Services</h4>
            <p>24/7 emergency care for all critical cases.</p>
          </div>
        </div>
      </section>
    )
}

export default Services;
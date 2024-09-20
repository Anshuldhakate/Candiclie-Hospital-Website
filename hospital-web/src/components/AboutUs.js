import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faBed, faProcedures, faSyringe, faHeartbeat, faAmbulance, faStethoscope, faFirstAid } from '@fortawesome/free-solid-svg-icons';

export const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about">
        <div className="about-text">
          <p>
            Welcome to Forever Care, where compassionate care meets advanced medical expertise. At Forever Care, we are committed to providing exceptional healthcare services that prioritize your well-being and comfort. Our mission is to deliver accessible, compassionate, and high-quality healthcare to our community, placing your health at the forefront of everything we do.
          </p>
        </div>
        <div className="about-img">
          <img src="https://themes.muffingroup.com/be/clinic2/wp-content/uploads/2017/08/home_clinic2_treatment1.jpg" alt="Forever Care" />
        </div>
      </div>

      <hr />

      <h1>Our Mission & Vision</h1>
      <div className="mission">
        <div className="mission-img">
          <img src="https://themes.muffingroup.com/be/healthy/wp-content/uploads/2019/01/home_healthy_pic28.jpg" alt="Mission" />
        </div>
        <div className="mission-text">
          <h2>Mission</h2>
          <p>
            "Our mission at Forever Care is to provide accessible, compassionate, and high-quality healthcare to enhance the well-being of our community. We strive to deliver personalized, patient-centric care that meets the diverse needs of individuals and families, ensuring their comfort, trust, and confidence in our services."
          </p>
        </div>
      </div>

      <hr />

      <div className="vision">
        <div className="vision-text">
          <h2>Vision</h2>
          <p>
            "Our vision at Forever Care is to be a leading healthcare institution recognized for delivering exceptional medical services, pioneering advancements in healthcare, and positively impacting the communities we serve. We envision a future where healthcare is accessible, equitable, and patient-focused, promoting a culture of wellness and a higher quality of life."
          </p>
        </div>
        <div className="vision-img">
          <img src="https://themes.muffingroup.com/be/clinic2/wp-content/uploads/2017/08/home_clinic2_treatment2.jpg" alt="Vision" />
        </div>
      </div>

      <hr />

      <div className="facilities">
        <h1>Facilities and Technology</h1>
        <p>
          At Forever Care, we prioritize delivering healthcare in a state-of-the-art environment, equipped with the latest advancements in medical technology and a range of specialized facilities.
        </p>
        <ul className="facility-list">
          <li className="facility-card">
            <FontAwesomeIcon icon={faHospital} className="facility-icon" />
            <span>Advanced Medical Equipment</span>
          </li>
          <li className="facility-card">
            <FontAwesomeIcon icon={faBed} className="facility-icon" />
            <span>Comfortable Patient Rooms</span>
          </li>
          <li className="facility-card">
            <FontAwesomeIcon icon={faProcedures} className="facility-icon" />
            <span>Specialized Departments</span>
          </li>
          <li className="facility-card">
            <FontAwesomeIcon icon={faSyringe} className="facility-icon" />
            <span>Modern Surgical Suites</span>
          </li>
          <li className="facility-card">
            <FontAwesomeIcon icon={faHeartbeat} className="facility-icon" />
            <span>Emergency Care</span>
          </li>
          <li className="facility-card">
            <FontAwesomeIcon icon={faAmbulance} className="facility-icon" />
            <span>Ambulance Services</span>
          </li>
          <li className="facility-card">
            <FontAwesomeIcon icon={faStethoscope} className="facility-icon" />
            <span>Diagnostic Services</span>
          </li>
          <li className="facility-card">
            <FontAwesomeIcon icon={faFirstAid} className="facility-icon" />
            <span>First Aid Facilities</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

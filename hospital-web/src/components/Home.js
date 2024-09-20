import React, { useState } from 'react';
import './Home.css';
import { useToast } from '@chakra-ui/react';
import { FaHeartbeat, FaUserMd, FaProcedures, FaStethoscope, FaRadiation, FaClinicMedical } from 'react-icons/fa'; 


const Home = () => {
  const readMore = () => {
    window.location.href = '/about';
  }
  const readMoreS = () => {
    window.location.href = '/services';
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [appointmentData, setAppointmentData] = useState({
    appointmentFirstName: '',
    appointmentLastName: '',
    appointmentEmail: '',
    appointmentPhone: '',
    appointmentDate: '',
    appointmentService: '',
    appointmentGender: '', 
    appointmentNotes: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const toast = useToast(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('appointment')) {
      setAppointmentData({
        ...appointmentData,
        [name]: value
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
  
    if (!appointmentData.appointmentFirstName || !appointmentData.appointmentLastName || !appointmentData.appointmentEmail || !appointmentData.appointmentDate || !appointmentData.appointmentGender || !appointmentData.appointmentService) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }
    setErrorMessage('');
  
    toast({
      title: "Appointment Scheduled.",
      description: "Your appointment request has been received. We will contact you shortly.",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
      onCloseComplete: () => {
        window.location.href = '/';
      }
    });
  
    setAppointmentData({
      appointmentFirstName: '',
    appointmentLastName: '',
    appointmentEmail: '',
    appointmentPhone: '',
    appointmentDate: '',
    appointmentService: '',
    appointmentGender: '', 
    appointmentNotes: ''
    });
  };

  const services = [
    { name: 'Cardiology', icon: <FaHeartbeat /> },
    { name: 'General Surgery', icon: <FaUserMd /> },
    { name: 'Pediatrics', icon: <FaProcedures /> },
    { name: 'Internal Medicine', icon: <FaStethoscope /> },
    { name: 'Radiology', icon: <FaRadiation /> },
    { name: 'Outpatient Care', icon: <FaClinicMedical /> },
  ];

  const blogs = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1512102438733-bfa4ed29aef7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: 'Jeffrey Davis',
      date: '24 Jan 2023',
      title: 'New Technology Make for Pulmonary Operation',
      description: 'Discover how recent technological advancements are revolutionizing pulmonary operations, making procedures safer and more efficient.',
      link: '#'
    },
    {
      id: 2,
      image: 'https://plus.unsplash.com/premium_photo-1672760403439-bf51a26c1ae6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: 'Allen Hartzler',
      date: '22 Jan 2023',
      title: 'To Be Good Health Take Doctor Suggestions',
      description: 'Understanding why following your doctor’s advice is crucial for maintaining good health and preventing serious conditions.',
      link: '#'
    },
    {
      id: 3,
      image: 'https://plus.unsplash.com/premium_photo-1666299865437-b619457adeb0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: 'Diana Ayers',
      date: '20 Jan 2023',
      title: 'A Guide to Maintaining Healthy Bones',
      description: 'A comprehensive guide on strategies for maintaining strong and healthy bones, including diet, exercise, and lifestyle tips.',
      link: '#'
    }
  ];

  const testimonials = [
    {
      id: 1,
      image: 'https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Sara Jonas',
      feedback: 'The care and professionalism of the staff at Forever Care were outstanding. They made sure I was comfortable and informed throughout my treatment. Highly recommend!'
    },
    {
      id: 2,
      image: 'https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Rocky Smith',
      feedback: 'I had a wonderful experience at Forever Care. The facilities are top-notch, and the doctors are very knowledgeable. I felt well taken care of during my stay.'
    },
    {
      id: 3,
      image: 'https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Ema Davis',
      feedback: 'From the moment I walked in, I felt at ease. The staff was incredibly kind and attentive, and the treatment I received was exceptional. Thank you, Forever Care!'
    }
  ];


  const doctors = [
    {
      id: 1,
      name: 'Dr. Neha Sharma',
      speciality: 'Cardiologist',
      photo: 'https://plus.unsplash.com/premium_photo-1681967035389-84aabd80cb1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      details: 'Dr. Neha Sharma excels in advanced cardiac imaging and treatment for heart disease. Her expertise in complex cardiovascular conditions ensures that patients receive top-tier care and management.'
    },
    {
      id: 2,
      name: 'Dr. Michael ',
      speciality: 'Neurologist',
      photo: 'https://plus.unsplash.com/premium_photo-1664474967260-eb1dbe4d5977?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      details: 'Dr. Michael is an expert in managing chronic neurological conditions such as Parkinson’s disease and multiple sclerosis. His practice focuses on integrating advanced research with patient care.'
    },
    {
      id: 3,
      name: 'Dr. Ovi Johnson',
      speciality: 'Pediatrician',
      photo: 'https://plus.unsplash.com/premium_photo-1681996428751-93e0294fe98d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      details: 'Dr. Ovi Johnson provides comprehensive care for children, focusing on both acute and chronic conditions. Her approach emphasizes preventive health and developmentally appropriate care.'
    },
    {
      id: 4,
      name: 'Dr. Rony Wilson',
      speciality: 'Cardiologist',
      photo: 'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      details: 'Dr. Rony Wilson specializes in cardiac rehabilitation and heart failure management. His focus is on improving patients’ quality of life through effective treatment strategies and lifestyle modifications.'
    },
    {
      id: 5,
      name: 'Dr. Sophia Martinez',
      speciality: 'Pediatrician',
      photo: 'https://plus.unsplash.com/premium_photo-1681966907271-1e350ec3bb95?q=80&w=1793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      details: 'Dr. Sophia Martinez is dedicated to the health and wellness of children, offering expert care in growth, development, and preventative measures. She provides a supportive and caring environment for young patients.'
    },
    {
      id: 6,
      name: 'Dr. James Lee',
      speciality: 'Neurologist',
      photo: 'https://plus.unsplash.com/premium_photo-1681996484614-6afde0d53071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      details: 'Dr. James Lee specializes in treating neurological disorders with a focus on epilepsy and stroke management. His approach combines advanced diagnostics with patient-centered care for optimal outcomes.'
    }
  ];
  

  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <div className="overlay">
          <h4>Welcome to Forever Care</h4>
          <h2>Your Health, Our Priority</h2>
          <p>Providing world-class healthcare services for all your medical needs.</p>
          <button onClick={() => window.location.href='#services-section'}>Explore Our Services</button>
          <button onClick={() => window.location.href='#appointment-section'}>Book an Appointment</button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about">
        <h1>About Us</h1>
        <div className="about-content">
          <img src="https://plus.unsplash.com/premium_photo-1681842906523-f27efd0d1718?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hospital" className="about-image" />
          <div className="about-text">
            <p>We are a modern hospital offering state-of-the-art medical care and services with a team of experienced doctors and healthcare professionals. Our mission is to provide comprehensive medical care tailored to each patient’s unique needs.</p>
            <button onClick={readMore}>Read More</button>
          </div>
        </div>
      </section>

      <hr className="separator" />

      {/* Services Section */}
      <div id="services-section">
        <h1>Our Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <div className="service-name">{service.name}</div>
          </div>
        ))}
      </div>
      <div className="read-more-container">
      <button onClick={readMoreS}>Read More</button>
      </div>
    </div>


    <hr className="separator" />

       {/* Meet Our Doctors Section */}
      <section id="doctors">
        <h1>Meet Our Doctors</h1>
        <div className="doctor-list">
          {doctors.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              <img src={doctor.photo} alt={doctor.name} className="doctor-photo" />
              <div className="doctor-info">
                <h4>{doctor.name}</h4>
                <p>{doctor.speciality}</p>
                <div className="doctor-details">
                  <p>{doctor.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="separator" />


      {/* Blog Section */}
      <div id="blog-section">
        <h1 className="section-title">Latest Blogs & Articles</h1>
        <div className="blogs">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-author">{blog.author}</span>
                  <span className="blog-date">{blog.date}</span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-description">{blog.description}</p>
                <a href={blog.link} className="blog-link">
                  View Details &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="more-articles-btn">More Articles</button>
      </div>


      <hr className="separator" />


      {/* Testimonials Section */}
      <section id="testimonials">
        <h1>What Our Patients Say</h1>
        <div className="testimonial-list">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <div className="testimonial-content">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="separator" />

      <div id="appointment-section">
    <h1 className="appointment-title">
      <i className="appointment-icon"></i> Book an appointment
    </h1>
    {errorMessage && <div className="error-message">{errorMessage}</div>} 
    <div className="appointment-container">
            <div className="appointment-image">
              <img src="https://plus.unsplash.com/premium_photo-1661377234244-3f68ab576d15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Doctors" />
            </div>
            <div className="appointment-form">
              <form onSubmit={handleAppointmentSubmit}>
                <div className="input-row">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="appointmentFirstName"
                    value={appointmentData.appointmentFirstName}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="appointmentLastName"
                    value={appointmentData.appointmentLastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-row">
                  <input
                    type="email"
                    placeholder="Email"
                    name="appointmentEmail"
                    value={appointmentData.appointmentEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-row">
                  <input
                    type="tel"
                    placeholder="Phone"
                    name="appointmentPhone"
                    value={appointmentData.appointmentPhone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-row">
                  <input
                    type="date"
                    placeholder="Preferred Date"
                    name="appointmentDate"
                    value={appointmentData.appointmentDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-row">
                  <select
                    name="appointmentGender"
                    value={appointmentData.appointmentGender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="input-row">
                  <select
                    name="appointmentService"
                    value={appointmentData.appointmentService}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a Service</option>
                    <option value="General Check-Up">General Check-Up</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Radiology">Radiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Emergency Services">Emergency Services</option>
                  </select>
                </div>
                <button type="submit">Book Appointment</button>
              </form>
            </div>
          </div>
       </div>

    </div>
  );
};

export default Home;

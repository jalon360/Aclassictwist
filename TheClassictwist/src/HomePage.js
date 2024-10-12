// HomePage.js
import React from 'react';
import NavBar from './comp/Navbar';
import Carousel from './comp/ControlledCarousel';
import MapComponent from './MapComponent'; // Adjust the import path if necessary
import Footer from './comp/Footer';
import { Card, Row, Col, Button } from 'react-bootstrap'; // Import Bootstrap components

// Catering Services Component
function CateringServices() {
  return (
    <Card className="catering-services" style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
      <Row className="g-0">
        <Col md={4}>
          <Card.Img variant="left" src="https://example.com/path/to/catering-services.png" alt="Catering Services" />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>Catering Services</Card.Title>
            <Card.Text>
              At Classic Twist, we specialize in creating unforgettable culinary experiences for your events. From elegant weddings to corporate gatherings, our catering services are tailored to your needs. Let us make your occasion truly special.
            </Card.Text>
            <Button variant="primary" href="https://example.com/catering">
              Learn More
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

// src/DeliveryLocation
function DeliveryLocations() {
  return (
    <Card className="delivery-locations" style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>Delivery Locations</Card.Title>
        <Card.Text>
          We currently deliver at these locations.
        </Card.Text>
        <MapComponent />
      </Card.Body>
    </Card>
  );
}



// HomePage Component
const HomePage = () => (
  <div className="bg-white">
    <NavBar />
    <Carousel />
    <CateringServices /> {/* Add Catering Services here */}
    <DeliveryLocations /> {/* Add Delivery Locations here */}
    <Footer />
  </div>
);

export default HomePage;

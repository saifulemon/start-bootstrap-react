import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import BootsCard from './components/BootsCard/BootsCard';

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>
      <Row>
        <Col>
          <Slider></Slider>
        </Col>
      </Row>
      <Row>
        <Col>
          <BootsCard></BootsCard>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

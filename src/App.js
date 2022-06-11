import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import { useState } from 'react';
import News from './components/News/News';
import { Spinner } from 'react-bootstrap';

const App = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=apple&from=2022-06-10&to=2022-06-10&sortBy=popularity&apiKey=f4b0fa6b003a4da88ca5ff3f0cf3f2db')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  }, [])


  return (
   <>
     <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>
    <Container>
      <Row>
        <Col>
          <Slider></Slider>
        </Col>
      </Row>
      <br />
      {
        news.length === 0 ? <Spinner animation="border" />
        :
        <Row xs={1} md={3} className="g-4">
        {
          news.map(nw => <News news={nw}></News>)
        }
        </Row>
      }
    </Container>
   </>
  );
};

export default App;

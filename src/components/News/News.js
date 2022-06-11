import React from 'react';
import { Card, Col} from 'react-bootstrap';

const News = (props) => {

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={props.news.urlToImage} />
                <Card.Body>
                    <Card.Title>{props.news.title}</Card.Title>
                    <Card.Text>
                        {props.news.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default News;
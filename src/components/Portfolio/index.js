import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Portfolio() {

    const images =[
        {
            title: 'Project 1 - BrewCast',
            name: 'brewcast',
            description: 'App for locating breweries and weather conditions in US cities',
            deployedLink: "https://domconf.github.io/BrewCast/",
            gitHubRepo: "https://github.com/domconf/BrewCast"
        },
        {
            title: 'Project 2 - RealDill ProShop',
            name: 'realdill',
            description: 'Purchase pickleball equipment and apparel through our ProShop',
            deployedLink: "https://real-dills-pro-shop.herokuapp.com/",
            gitHubRepo: "https://github.com/domconf/Real-Dill-Pro-Shop"
        },
        {
            title: 'Project 3 - CinemaStash',
            name: 'cinemastash',
            description: 'Look up your favorite movies and save them for a rainy day',
            deployedLink: "https://cinema-stash-c85de8364f90.herokuapp.com/",
            gitHubRepo: "https://github.com/domconf/Cinema-Stash"
        },
      ];

    return (
            <Container>
                <Card align="center">
                    <Card.Body>
                       <h2> Full Stack Web Developer</h2>
                    </Card.Body>
                </Card>
                <Row className="justify-content-md-center">
                 {images.map((image, i) => (
                    <Col onClick={() => console.log("test")} 
                     xs={12} md={6} xl={4}>
                    <Card 
                    text="dark" 
                    className="mb-2 my-2 " 
                    >
                    <Card.Img 
                    variant="top" 
                    
                    height={300}
                    src={require(`../../assets/projects/${image.name}.JPG`).default}

                    />
                    <Card.Body>
                        <Card.Title >{image.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{image.technology}</Card.Subtitle>
                        <Card.Text>
                        {image.description}
                        </Card.Text>
                        <Button 
                        className="mb-2 text-center" 
                        text="light" 
                        bg="primary" 
                        variant="primary"
                        href={image.gitHubRepo}
                        block
                        target="_blank">
                            GitHub
                        </Button>
                        <Button 
                        className="mb-2 text-center" 
                        text="light" 
                        bg="primary" 
                        variant="primary"
                        href={image.deployedLink}
                        block
                        target="_blank">
                            Deployed Project
                        </Button>
                    </Card.Body>
                    </Card>
                    </Col>
                 ))}
                </Row>
            </Container>
    )
}

export default Portfolio;

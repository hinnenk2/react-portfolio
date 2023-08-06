import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ResumeFile from "../../assets/resume/Ian Hinnenkamp's Professional Resume.pdf";


function Resume() {
    return (
        <> 
        <Container className="text-center">
                    <Button
                text="light" 
                bg="primary" 
                variant="primary"
                href={ResumeFile} 
                download>
                    Click to Download Resume
                </Button>     

        </Container>
    </>
    )
}

export default Resume;
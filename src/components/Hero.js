import React from "react";


import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image"
import logo from "../assets/logo__magic-pay--mobile.png"
import logoDesktop from "../assets/logo__magic-pay.png"




const Hero = () => {
    return (
        <Card className="text-center text-light hero">
           
        <Container>

            
            <Row className="mx-0 my-5 linha">
                <Col lg className="text-lg-end my-5">
                    {/* essa é a configuração para mostrar logos diferentes entre mobile e desktop */}
                    <Image className="d-lg-none" src={logo} />
                    <Image className="d-none d-lg-inline-block" src={logoDesktop} />
                </Col>
                <Col lg className="text-lg-start my-5">
                <p>Pague suas contas pelo nosso APP</p>
                <Button variant="outline-light">Abra sua conta</Button>
                </Col>
               
            
                
            </Row>


        
        </Container>
        
     
        </Card>
        
      );
     
}


export default Hero;
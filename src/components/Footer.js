import { Col, Container, Row, Image } from "react-bootstrap";
import logo from '../assets/MAGbank.png';
import appstore from '../assets/applestore.png';
import playstore from '../assets/googleplay.png';

import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () =>{
    return(
        <footer>
            <Container>
                <Row className="text-center py-5">
                    <Col xs={12} lg={6}>
                    <Image src={logo}/>
                    </Col>

                    <Col className="my-4 my-lg-0" xs={12} lg={4}>
                    <Image className="mx-2" src={appstore}/>
                    <Image className="mx-2" src={playstore} />
                    </Col>
                    <Col xs={12} lg={2}>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookSquare} color='#7c7c7c' size='2x' /> </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitterSquare} color='#7c7c7c' size='2x' /> </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagramSquare} color='#7c7c7c' size='2x' /> </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;
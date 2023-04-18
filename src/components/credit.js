import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import cartao from '../assets/credit-card.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faCartShopping, faMobileButton, faWallet } from '@fortawesome/free-solid-svg-icons'
import './credit.scss'


const Credit = () => (

   

<Container className='my-5'>
        <Row >
            <Col xs={12} lg={7} className='mb-5 mb-lg-0 px-5 px-lg-0'>

                <Row>
                
                <h2 className="credit-card-title">Cartão de Crédito</h2> 
                </Row>
                <Row>
                  
                    <Col className="my-2"  sm={true}>
                   
                    <FontAwesomeIcon className="mx-2" icon={faCreditCard} style={{color: "#f05656",}} />
                   Crédito Pessoal
                    </Col >

                    <Col className="my-2" sm={true}>
                    <FontAwesomeIcon className="mx-2" icon={faCartShopping} style={{color: "#f05656",}}/>    
                    Pagamentos Online
                    </Col>
                </Row> 

                <Row>
                    <Col className="my-2" sm={true}>
                    <FontAwesomeIcon className="mx-2" icon={faMobileButton} style={{color: "#f05656",}}/> 
                    App
                    </Col>

                    <Col className="my-2" sm={true}>
                    <FontAwesomeIcon className="mx-2" icon={faWallet} style={{color: "#f05656",}}/> 
                    Carteira Digital
                    </Col>
                </Row>    
               
            
            </Col>

            <Col  xs={12} lg={5}>
            <Image  src={cartao} fluid />
            </Col>
        </Row>
        
    </Container>

    
)

export default Credit;
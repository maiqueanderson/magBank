import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import cartao from '../assets/credit-card.jpg'

import { faCreditCard, faCartShopping, faMobileButton, faWallet } from '@fortawesome/free-solid-svg-icons'
import './credit.scss'
import IconText from "./IconText";


const Credit = () => (

   

<Container className='my-5'>
   
        <Row >
            <Col xs={12} lg={7} className='mb-5 mb-lg-0 px-5 px-lg-0'>

                <Row>
                
                <h2 className="credit-card-title mb-5">Cartão de Crédito</h2> 
                </Row>
                <Row>
                  
                    <Col xs={12} lg={6} className="mb-4" >
                   
                    <IconText icon={faCreditCard} textClassName='h5 text-muted m-0' size={2}>
                    Crédito Pessoal
                    </IconText>
                    
                    </Col >

                    <Col xs={12} lg={6} className="mb-4">
                   
                    <IconText icon={faCartShopping} textClassName='h5 text-muted m-0' size={2}>
                    Pagamentos Online
                    </IconText>
                    
                    </Col >

                    <Col xs={12} lg={6} className="mb-4">
                   
                    <IconText icon={faMobileButton} textClassName='h5 text-muted m-0' size={2}>
                    APP
                    </IconText>
                    
                    </Col >

                    <Col xs={12} lg={6} className="mb-4">
                   
                    <IconText icon={faWallet} textClassName='h5 text-muted m-0' size={2}>
                    Carteira Digital
                    </IconText>
                    
                    </Col >
    {/* abaixo temos a forma antiga que eu fiz a implementação dos icones de nomes do cartão de credito */}
                    {/* <Col className="my-2" sm={true}>
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
                    </Col> */}
                </Row>    
               
            
            </Col>

            <Col  xs={12} lg={5}>
            <Image  src={cartao} fluid />
            </Col>
        </Row>
        
    </Container>

    
)

export default Credit;
import React, { useState } from 'react';

import { Row, Col, Form, Button, Image } from 'react-bootstrap';
import logo from '../assets/MAGbank.svg';
import './Login.scss'


const Login = () => {
    const [name, setName] = useState();
    const [account, setAccount] = useState();

    const handleSubmit = () =>{
        console.log('Fazer Login')
    }
 

  return (
    <section className='login'>
      <div className='login__container'>
        <Row>
          <Col className='text-center text-light'>
            <Image src={logo} className='mb-5' />
            <Form>
              <Form.Group controlId='formBasicName'>
                <Form.Label className='lead'>
                  <strong>Nome e Sobrenome</strong>
                </Form.Label>
                <Form.Control
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </Form.Group>

              <Form.Group controlId='formBasicAccount'>
                <Form.Label className='lead'>
                  <strong>Número da Conta</strong>
                </Form.Label>
                <Form.Control
                  type='number'
                  value={account}
                  onChange={(e) => setAccount(e.currentTarget.value)}
                />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label className='lead'>
                  <strong>Senha</strong>
                </Form.Label>
                <Form.Control type='password' />
              </Form.Group>

              <Button
                className='mt-3'
                variant='success'
                type='submit'
                onClick={handleSubmit}
            
              >
                Entrar
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Login;
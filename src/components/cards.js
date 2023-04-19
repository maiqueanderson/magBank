import React from "react";
import { Col, Row, Card, Container, Button } from "react-bootstrap";


const Cards = ({ posts }) => {
  return (
    <Container>
      <Row>
        {/* para executar um javascript precisa colocar {} */}
        {/* a função abaixo está pegando informações de um objeto que está dentro de um array do arquivo posts.js na pasta data */}
        {/* a ? depois de posts serve como medida de segurança para caso a pagina não encontre  posts por falta de internet ou algo do tipo, ao inves de dar um erro ele simplismente não exibe nada do elemento map */}
        {/* o post && serve para não dar erro para o usuario quando a afirmativa acima estiver configurada */}
        {
        posts &&
        posts?.map((post) => {
          return (
            <Col xs={12} lg={4} key={post.id}>
              <Card className="mx-auto my-3" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={post.image} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>
                {post.description}
                  </Card.Text>
                  <Button variant="danger">{post.action}</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}

        
      </Row>
    </Container>
  );
};

export default Cards;

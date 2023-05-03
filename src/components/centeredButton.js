import { Button, Container, Row } from "react-bootstrap";

const CenteredButton = ({children}) => (

        <Container className="d-flex justify-content-center">
            <Row >
                <Button className="my-5 px-5 py-3" variant="success" size="lg">
                  {children}
                </Button>
            </Row>
        </Container>
)

export default CenteredButton;
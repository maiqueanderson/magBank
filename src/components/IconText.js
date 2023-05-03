import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row } from 'react-bootstrap';


// essa função serve para colocar o incone e o nome na parte de cartão de forma dinamica, utilizando o coneito de children para pegar as informações do Credit.js
const IconText = ({children, icon, size, textClassName, color, click, className}) => {
    return(
        <Row className={`d-flex justify-content-center ${className}`} onClick={() => click()} >
            <Col lg={1} xs={size} className='d-flex justify-content-center'>
            <FontAwesomeIcon icon={icon} color={color} size={`${size}x`}/>
            </Col>

            <Col xs={12 - size} className={textClassName}>
            {children}
            </Col>
        </Row>
    )
}

export default IconText;


// <FontAwesomeIcon className="mx-2" icon={faCreditCard} style={{color: "#f05656",}} />
import React from 'react';
import { Container, Row, Col, Button} from "react-bootstrap";
import LogoGabotor from "../../assets/png/logo.png";
import LogoWhiteGabotor from "../../assets/png/logo-white.png";

import "./SignInSignUp.scss";

export default function SignInSignUp() {
    return (
      <Container className="signin-signup" fluid>
          <Row>
            <LeftComponent/>
            <RightComponent/>
          </Row>
      </Container>
    );
};

function LeftComponent(){
    return(
        <Col className="signin-signup__left" xs={6}> 
            <img src={LogoGabotor} alt="Gabotor"/>
            <div>
                <h2>
                    - Sigue lo que te interesa.
                </h2>
                <h2> 
                    - Enterate de que esta hablando la gente.
                </h2>
                <h2> 
                    - Unete a la conversacion.
                </h2>
            </div>
        </Col>
    );
}

function RightComponent(){
    return(
        <Col className="signin-signup__right" xs={6}> 
            <h2>RightComponent...</h2>
        </Col>
    );
}

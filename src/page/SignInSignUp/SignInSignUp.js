import React, { useState} from 'react';
import { Container, Row, Col, Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faUsers, faComment} from "@fortawesome/free-solid-svg-icons"
import BasicModal from "../../components/Modal/BasicModal";
import LogoGabotor from "../../assets/png/logo.png";
import LogoWhiteGabotor from "../../assets/png/logo-white.png";

import "./SignInSignUp.scss";

export default function SignInSignUp() {
    
    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);

    //Funcion para que se habra la Modal
    const openModal = content => {
        setShowModal(true);
        setContentModal(content);
    }

    return (
    <>
        <Container className="signin-signup" fluid>
          <Row>
            <LeftComponent/>
            <RightComponent
                openModal={openModal}
                setShowModal={setShowModal}
            />
          </Row>
      </Container>
      <BasicModal show={showModal} setShow={setShowModal} >
          {contentModal}
      </BasicModal>
    </>
    )
};

function LeftComponent(){
    return(
        <Col className="signin-signup__left" xs={6}> 
            <img src={LogoGabotor} alt="Gabotor"/>
            <div>
                <h2>
                    <FontAwesomeIcon icon={faSearch}/>
                    Sigue lo que te interesa.
                </h2>
                <h2> 
                    <FontAwesomeIcon icon={faUsers}/>
                    Enterate de que esta hablando la gente.
                </h2>
                <h2>
                    <FontAwesomeIcon icon={faComment}/> 
                    Unete a la conversacion.
                </h2>
            </div>
        </Col>
    )
}

function RightComponent(props){

    const {openModal, setShowModal} = props;

    return(
        <Col className="signin-signup__right" xs={6}> 
            <div>
                <img src={LogoWhiteGabotor} alt="Gabotor"/>
                <h2>Mira lo que está pasando en el mundo en este momento</h2>                
                <h3>Únete a Gabotor hoy mismo.</h3>
                <Button 
                    variant="primary"
                    onClick={() => openModal(<h2>Formulario de Registro</h2>)}
                >
                    Regístrate
                </Button>
                <Button 
                    variant="outline-primary"
                    onClick={() => openModal(<h2>Formulario de Login</h2>)}
                >
                    Iniciar sesióm
                </Button>
            </div>
        </Col>
    )
}

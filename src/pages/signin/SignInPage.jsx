import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SignIn from "../../components/signIn/SignIn";
const SignInPage = () => {
  return (
    <>
      <Container fluid>
        <Row className="mt-4">
          <Col className="flex justify-content-center align-items-center w-[500px] ">
            <div className="shadow-lg p-3 border rounded">
              <h1>Login Now</h1>
              <SignIn />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignInPage;

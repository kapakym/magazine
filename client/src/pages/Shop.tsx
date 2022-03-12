import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import TypeBar from "../components/TypeBar";

function Shop() {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <TypeBar></TypeBar>
        </Col>
        <Col md={9}>
          <BrandBar></BrandBar>
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;

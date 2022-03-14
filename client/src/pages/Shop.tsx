import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Context } from "../index";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import TypeBar from "../components/TypeBar";
import { AppProviderType } from "../types/types";
import { fetchTypes } from "../http/deviceAPI";

const Shop = observer(() => {
  const { device } = useContext<AppProviderType>(Context);

  useEffect(() => {
    fetchTypes().then((data) => {
      device.setTypes(data);
    });
  }, []);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <TypeBar></TypeBar>
        </Col>
        <Col md={9}>
          <BrandBar></BrandBar>
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;

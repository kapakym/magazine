import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import star from "../assets/star.png";
import { fetchOneDevice } from "../http/deviceAPI";
import { REACT_APP_API_URL } from "../types/types";

function DevicePage() {
  const [device, setdevice] = useState<any>({ info: [] });

  const { id } = useParams<string>();

  useEffect(() => {
    fetchOneDevice(Number(id)).then((data) => {
      setdevice(data);
    });
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image src={REACT_APP_API_URL+device.img} width={300} height={300} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${star}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>От: {device.price} руб.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {device.info.map((desc:any, index:number) => (
          <Row
            key={desc.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {desc.title} : {desc.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
}

export default DevicePage;

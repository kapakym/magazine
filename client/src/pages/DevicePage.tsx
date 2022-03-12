import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png";

function DevicePage() {
  const device = {
    id: 8,
    name: "Iphone 12 pro",
    price: 120000,
    rating: 5,
    img: "http://localhost:5000/8e7d5402-4828-48a1-b292-b04248784901.jpg",
  };
  const description = [
    { id: 1, title: "Оперативная память", description: "5 гБ" },
    { id: 2, title: "Камера", description: "12 мп" },
    { id: 3, title: "Процессор", description: "SnapDragon 888" },
    { id: 4, title: "Количество ядер", description: "8" },
    { id: 5, title: "Аккумулятор", description: "4000" },
  ];
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image src={device.img} width={300} height={300} />
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
        {description.map((desc, index) => (
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

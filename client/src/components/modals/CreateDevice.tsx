import React, { useContext, useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  Form,
  FormControl,
  FormGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { Context } from "../..";
import { AppProviderType } from "../../types/types";
interface CDType {
  show: boolean;
  onHide: () => void;
}

interface infoType {
  title: string;
  description: string;
  number: number;
}

function CreateDevice({ show, onHide }: CDType) {
  const { device } = useContext<AppProviderType>(Context);
  const [info, setinfo] = useState<infoType[] | []>([]);

  const addInfo = () => {
    const newInfo: infoType = {
      title: "",
      description: "",
      number: Date.now(),
    };
    setinfo([...info, newInfo]);
  };

  const removeInfo = (number: number) => {
    setinfo(info.filter((i) => i.number !== number));
  };

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Выберите тип устройства</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Выберите производителя устройства</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <FormControl
            className="mt-2"
            placeholder="Введите название устройства"
          />
          <FormControl
            type="number"
            className="mt-2"
            placeholder="Введите стоимость устройства"
          />
          <FormControl type="file" className="mt-2" />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Добавить новое свойство
          </Button>
          {info.map((element) => (
            <Row className="mt-2" key={element.number}>
              <Col md={4}>
                <FormControl placeholder="Введите название свойства" />
              </Col>
              <Col md={4}>
                <FormControl placeholder="Введите описание свойства" />
              </Col>
              <Col md={4}>
                <Button variant={"outline-danger"} onClick={()=>removeInfo(element.number)}>Удалить</Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateDevice;

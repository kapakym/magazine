import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createBrand } from "../../http/deviceAPI";

interface CBType {
  show: boolean;
  onHide: () => void;
}

function CreateBrand({ show, onHide }: CBType) {
  const [value, setvalue] = useState("");
  const addBrand = () => {
    createBrand(value).then((data) => setvalue(""));
    onHide();
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
          Добавить нового производителя устройства
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            placeholder="Введите название типа"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addBrand}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateBrand;

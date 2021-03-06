import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createType } from "../../http/deviceAPI";
interface CDType {
  show: boolean;
  onHide: () => void;
}

function CreateType({ show, onHide }: CDType) {
  
  const [value, setvalue] = useState("");
  const addType = () => {
    console.log("click")
    createType(value).then(data=>setvalue(""));
    onHide()
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
          Добавить новый тип устройства
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
        <Button variant="outline-success" onClick={addType}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateType;

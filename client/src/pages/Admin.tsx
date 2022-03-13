import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

function Admin() {
  const [typeVisible, settypeVisible] = useState(false);
  const [brandVisible, setbrandVisible] = useState(false);
  const [deviceVisible, setdeviceVisible] = useState(false);
  return (
    <Container className="  d-flex flex-column">
      <Button
        variant="outline-dark"
        className="mt-4 p-2"
        onClick={() => settypeVisible(true)}
      >
        Добавить тип
      </Button>
      <Button
        variant="outline-dark"
        className="mt-4 p-2"
        onClick={() => setbrandVisible(true)}
      >
        Добавить бренд
      </Button>
      <Button
        variant="outline-dark"
        className="mt-4 p-2"
        onClick={() => setdeviceVisible(true)}
      >
        Добавить устройство
      </Button>
      <CreateType show={typeVisible} onHide={() => settypeVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setdeviceVisible(false)}
      />
      <CreateBrand show={brandVisible} onHide={() => setbrandVisible(false)} />
    </Container>
  );
}

export default Admin;

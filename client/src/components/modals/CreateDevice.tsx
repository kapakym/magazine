import { observer } from "mobx-react-lite";
import React, {
  ChangeEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
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
import { createDeivce, fetchBrands, fetchTypes } from "../../http/deviceAPI";
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

const CreateDevice = observer(({ show, onHide }: CDType) => {
  const { device } = useContext<AppProviderType>(Context);
  const [info, setinfo] = useState<infoType[] | []>([]);
  const [name, setname] = useState("");
  const [price, setprice] = useState(0);
  const [file, setfile] = useState<any>(null);

  useEffect(() => {
    fetchTypes().then((data) => {
      device.setTypes(data);
    });
    fetchBrands().then((data) => {
      device.setBrands(data);
    });
  }, []);

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

  const selectFile = (e: React.ChangeEvent<any>) => {
    setfile(e.target.files[0]);
  };

  const changeInfo = (key: string, value: string, number: number) => {
    setinfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const addDevice = () => {
    console.log(info);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", `${device.selectedBrand?.id}`);
    formData.append("typeId", `${device.selectedType?.id}`);
    formData.append("info", JSON.stringify(info));
    console.log(formData)
    createDeivce(formData);
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
            <Dropdown.Toggle>
              {device.selectedType?.name || "Выберите тип устройств"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item
                  key={type.id}
                  onClick={() => device.setSelectedType(type)}
                >
                  {type.name} 1
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {device.selectedBrand?.name ||
                "Выберите производителя устройства"}{" "}
              2
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item
                  key={brand.id}
                  onClick={() => device.setSelectedBrand(brand)}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <FormControl
            className="mt-2"
            placeholder="Введите название устройства"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <FormControl
            type="number"
            className="mt-2"
            placeholder="Введите стоимость устройства"
            value={price}
            onChange={(e) => setprice(Number(e.target.value))}
          />
          <FormControl type="file" className="mt-2" onChange={selectFile} />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Добавить новое свойство
          </Button>
          {info.map((element) => (
            <Row className="mt-2" key={element.number}>
              <Col md={4}>
                <FormControl
                  value={element.title}
                  onChange={(e) =>
                    changeInfo("title", e.target.value, element.number)
                  }
                  placeholder="Введите название свойства"
                />
              </Col>
              <Col md={4}>
                <FormControl
                  value={element.description}
                  onChange={(e) =>
                    changeInfo("description", e.target.value, element.number)
                  }
                  placeholder="Введите описание свойства"
                />
              </Col>
              <Col md={4}>
                <Button
                  variant={"outline-danger"}
                  onClick={() => removeInfo(element.number)}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addDevice}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;

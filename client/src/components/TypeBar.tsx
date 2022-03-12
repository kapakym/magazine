import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "../index";
import DeviceStore from "../store/DeviceStore";
import { AppProviderType } from "../types/types";

const TypeBar = observer(() => {
  const { device } = useContext<AppProviderType>(Context);
  return (
    <ListGroup className="mt-2" style={{ cursor: "pointer" }}>
      {device.types.map((type) => (
        <ListGroup.Item
          key={type.id}
          onClick={() => device.setSelectedType(type)}
          active={type.id === device.selectedType.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;

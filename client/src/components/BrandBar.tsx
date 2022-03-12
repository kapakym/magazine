import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { Context } from "../index";
import { AppProviderType } from "../types/types";

const BrandBar = observer(() => {
  const { device } = useContext<AppProviderType>(Context);
  return (
    <Row className="d-flex mt-2" style={{ cursor: "pointer" }}>
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-3"
          style={{ width: "auto" }}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
          onClick={() => device.setSelectedBrand(brand)}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;

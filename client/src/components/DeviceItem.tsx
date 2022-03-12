import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { DeviceType } from "../types/types";
import star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
interface DeviceItemType {
  device: DeviceType;
}
function DeviceItem({ device }: DeviceItemType) {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <Col
      md={3}
      className="mt-2"
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card style={{ width: "150px", cursor: "pointer" }} border={"light"}>
        <Image width={150} height={150} src={device.img} />
        <div className="text-black-50 d-flex justify-content-between align-item-center mt-2">
          <div>Samsung</div>
          <div>
            <div className="d-flex align-item-center">
              {device.rating}
              <Image src={star} width={18} height={18} />
            </div>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
}

export default DeviceItem;
